(function(context) {
  'use strict';

  var ENTER_KEY = 13;

  function App(localStorageKey) {
    this.$insert = $('#js-insert');
    this.$toggleAll = $('#js-toggle-all');
    this.$bar = $('#js-bar');
    this.$list = $('#js-list');
    this.$clearCompleted = $('#js-clear-completed');
    this.$total = $('#js-total');
    this.$filters = $('#js-filters');
    this.addEventListeners();
    this.render();
  }

  App.prototype.addEventListeners = function() {
    $.on(this.$insert, 'keypress', this.onInsert.bind(this));
    $.on(this.$toggleAll, 'click', this.onToggleAll.bind(this));
    $.on(this.$clearCompleted, 'click', this.onClearCompleted.bind(this));
    $.delegate(this.$list, '.toggle', 'click', this.onToggle.bind(this));
    $.delegate(this.$list, '.destroy', 'click', this.onDestroy.bind(this));
    $.delegate(this.$filters, '.button', 'click', this.onFilter.bind(this));
  };

  App.prototype.getItemId = function(element) {
    var li = $.parent(element, 'li');
    return li.dataset.id;
  };

  App.prototype.getElementByDataId = function(id) {
    return $('[data-id="' + id + '"]');
  };

  App.prototype.onInsert = function(event) {
    var element = event.target;
    var text = element.value.trim();
    if (text && event.keyCode === ENTER_KEY) {
      this.insert(text);
      element.value = '';
    }
  };

  App.prototype.onToggleAll = function(event) {
    var checked = event.target.checked;
    var todos = this.$list.getElementsByTagName('li');
    var ids = [];
    for (var i = 0; i < todos.length; ++i) {
      ids.push(todos[i].dataset.id);
      todos[i].className = checked ? 'completed' : '';
      $('.toggle', todos[i]).checked = checked;
    }
    this.showControls();
    lib(GLOBALS.SERVICE_PATH + '.update')(ids, checked, function(
      error,
      results
    ) {
      if (error) {
        console.log(error);
      }
    });
  };

  App.prototype.onToggle = function(event) {
    var element = event.target;
    var id = this.getItemId(element);
    var completed = element.checked;
    var li = this.getElementByDataId(id);
    li.className = completed ? 'completed' : '';
    $('.toggle', li).checked = completed;
    this.showControls();
    lib(GLOBALS.SERVICE_PATH + '.update')([id], completed, function(
      error,
      results
    ) {
      if (error) {
        console.log(error);
      }
    });
  };

  App.prototype.onDestroy = function(event) {
    var id = this.getItemId(event.target);
    this.destroy(id);
  };

  App.prototype.onClearCompleted = function(event) {
    var todos = this.$list.getElementsByTagName('li');

    var ids = [];
    for (var i = todos.length - 1; i >= 0; i--) {
      if (todos[i].className === 'completed') {
        ids.push(todos[i].dataset.id);
        this.$list.removeChild(todos[i]);
      }
    }
    this.showControls();

    lib(GLOBALS.SERVICE_PATH + '.destroy')(ids, function(error, results) {
      if (error) {
        console.log(error);
      }
    });
  };

  App.prototype.onFilter = function(event) {
    document.location.hash = event.target.getAttribute('href');
    this.render();
  };

  // Insert
  App.prototype.insert = function(text) {
    var item = {
      text: text,
      completed: false
    };
    lib.steve['todo-mongo']['@dev'].create(
      item,
      function(error, id) {
        if (error) {
          console.log(error);
        }
        item.id = id;
        var element = this.nodeItem(item);
        this.$list.appendChild(element);
        this.showControls();
      }.bind(this)
    );
  };

  // Destroy
  App.prototype.destroy = function(id) {
    var li = this.getElementByDataId(id);
    this.$list.removeChild(li);
    lib(GLOBALS.SERVICE_PATH + '.destroy')(
      [id],
      function(error, results) {
        if (error) {
          console.log(error);
        }
        this.showControls();
      }.bind(this)
    );
  };

  App.prototype.filter = function() {
    var hash = document.location.hash;
    if (!hash) return false;
    $.qsa('.button', this.$filters).each(function(button) {
      if (button.getAttribute('href') === hash) {
        button.className = 'button selected';
      } else {
        button.className = button.className.replace('selected', '');
      }
    });
    hash = hash.split('#/')[1];
    return hash !== 'all' ? hash : false;
  };

  // Render
  App.prototype.render = function() {
    var filter = this.filter();
    lib(GLOBALS.SERVICE_PATH + '.read')(
      function(error, items) {
        if (error) {
          console.log(error);
        }
        if (filter) {
          items = items.filter(function(item) {
            return item.completed === (filter === 'completed');
          });
        }
        var nodes = this.nodeItemMulti(items);
        this.$list.innerHTML = '';
        this.$list.appendChild(nodes);
        this.showControls();
      }.bind(this)
    );
  };

  App.prototype.showControls = function() {
    var todos = this.getTodos();
    this.showBarAndToggleAll(todos);
    this.showTotalTasksLeft(todos);
    this.showClearCompleted(todos);
  };

  App.prototype.showBarAndToggleAll = function(items) {
    var total = items.length;
    var completed = items.filter(function(item) {
      return item.completed;
    });
    this.$toggleAll.checked = total === completed.length;
  };

  App.prototype.showTotalTasksLeft = function(items) {
    items = items.filter(function(item) {
      return !item.completed;
    });
    var len = items.length;
    var text = [len, ' item', $.pluralization(len), ' left'].join('');
    this.$total.innerHTML = text;
  };

  App.prototype.showClearCompleted = function(items) {
    var some = items.some(function(item) {
      return item.completed;
    });
    this.$clearCompleted.style.display = some ? 'inline-block' : 'none';
  };

  App.prototype.nodeItemMulti = function(items) {
    var fragment = document.createDocumentFragment();
    $.each(
      items,
      function(item) {
        fragment.appendChild(this.nodeItem(item));
      }.bind(this)
    );
    return fragment;
  };

  App.prototype.nodeItem = function(item) {
    var li = document.createElement('li');
    var div = document.createElement('div');
    var toggle = document.createElement('input');
    var span = document.createElement('span');
    var destroy = document.createElement('button');

    li.setAttribute('data-id', item.id);

    if (item.completed) {
      li.className = 'completed';
    }

    div.className = 'todo';

    toggle.setAttribute('type', 'checkbox');
    toggle.className = 'toggle';
    toggle.checked = item.completed;

    span.appendChild(document.createTextNode(item.text));

    destroy.className = 'destroy';

    div.appendChild(toggle);
    div.appendChild(span);
    div.appendChild(destroy);

    li.appendChild(div);

    return li;
  };

  App.prototype.getTodos = function() {
    var items = this.$list.getElementsByTagName('li');
    var todos = [];
    for (var i = 0; i < items.length; i++) {
      todos.push({
        id: items[i].dataset.id,
        text: items[i].innerHTML,
        completed: items[i].className === 'completed'
      });
    }
    return todos;
  };

  window.addEventListener('DOMContentLoaded', function() {
    var app = new App('todo');
  });
})(this);
