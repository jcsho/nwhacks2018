const fs = require('fs');
const mime = require('mime');
const path = require('path');

let filepath = './static';
let staticFiles = readFiles(filepath);

/**
 * This endpoint handles all routes to `/static` over HTTP, and maps them to the
 *  `./static` service folder
 * @returns {Buffer}
 */
module.exports = (context, callback) => {

  // Hot reload for local development
  if (context.service && context.service.environment === 'local') {
    staticFiles = readFiles(filepath);
  }

  let staticFilepath = path.join(...context.path.slice(1));
  let buffer;
  let headers = {};

  headers['Cache-Control'] = context.service.environment === 'release' ?
    'max-age=31536000' :
    'max-age=0';

  if (!staticFiles[staticFilepath]) {
    headers['Content-Type'] = 'text/plain';
    buffer = new Buffer('404 - Not Found');
  } else {
    headers['Content-Type'] = mime.lookup(staticFilepath);
    buffer = staticFiles[staticFilepath];
  }

  return callback(null, buffer, headers);

};

function readFiles (base, dir, files) {
  dir = dir || '';
  files = files || {};
  let pathname = path.join(base, dir);
  let dirList = fs.readdirSync(pathname);

  for (let i = 0; i < dirList.length; i++) {
    let dirpath = path.join(dir, dirList[i]);
    let dirname = dirpath.split(path.sep).join('/');
    let fullpath = path.join(pathname, dirList[i]);
    if (fs.lstatSync(fullpath).isDirectory()) {
      readFiles(base, dirpath, files);
    } else {
      files[dirname] = fs.readFileSync(fullpath);
    }
  }

  return files;
};
