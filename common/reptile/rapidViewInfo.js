const request = require('request');

const { rapidViewAuth } = require('./authOption');

const rapidViewInfoPromise = (rapidViewId) => new Promise((resolve, reject) => {
  request(rapidViewAuth(rapidViewId), (error, response, body) => {
    if (!error && response.statusCode == 200) {
      resolve(body);
    } else {
      reject(body ? {
        errorMsg: JSON.parse(body).errors,
        statusCode: response.statusCode
      } : error);
    }
  })
})

module.exports = async (rapidViewId) => await rapidViewInfoPromise(rapidViewId);
