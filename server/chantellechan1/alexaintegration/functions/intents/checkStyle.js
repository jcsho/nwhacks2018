/**
* @returns {any}
*/

const request = require('request');

module.exports = (context, callback) => {

  request('http://api.worldweatheronline.com/premium/v1/weather.ashx?q=vancouver&num_of_days=1&key=bb251809200b4b9d8d0175612181401&format=json',
    function(err, weather, body) {

      console.log(weather.statusCode);

      let temp = JSON.parse(body.toString()).data.current_condition[0].temp_C;

      console.log(temp);

      let alexaSay = "Good morning, Chantelle. Today it will be " + temp + " degrees out. How do you want to be dressed today?";

      return callback(null, alexaSay);
    });
};
