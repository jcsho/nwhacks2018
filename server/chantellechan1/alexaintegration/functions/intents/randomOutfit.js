/**
 * @returns {any}
 */

const lib = require('lib');

module.exports = (context, callback) => {

  lib[`${context.service.identifier}.readAll`]((err, res) => {

    let tops = [];
    let bottoms = [];
    let shoes = [];

    //console.log(res);

    for(let i = 0; i < res.length; i++){
      if(res[i].type === 'top'){
        tops.push(res[i]);
      }else if(res[i].type === 'bottom'){
        bottoms.push(res[i]);
      }else if(res[i].type === 'shoes'){
        shoes.push(res[i]);
      }
    }

    let outfit = {
      top: tops[Math.floor(Math.random() * 3)],
      bottom: bottoms[Math.floor(Math.random() * 3)],
      shoe: shoes[Math.floor(Math.random() * 3)]
    };

    let alexaSay = "You should wear your " + outfit.top.name.toString() + ", " + outfit.bottom.name.toString() + ", and " + outfit.shoe.name.toString() + ".";

    return callback(null, alexaSay);

  });

};
