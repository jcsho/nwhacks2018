/**
* @returns {any}
*/

const lib = require('lib');

module.exports = (context, callback) => {

  lib[`${context.service.identifier}.sortByKeyword`]("formal", (err, res) => {

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
      top: tops[0],
      bottom: bottoms[0],
      shoe: shoes[0]
    };

    let alexaSay = "You should wear your " + outfit.top.name.toString() + ", " + outfit.bottom.name.toString() + ", and " + outfit.shoe.name.toString() + ".";


    alexaSay += " I've sent the outfit to your phone. Have a good day!"

    return callback(null, alexaSay);

  });

};
