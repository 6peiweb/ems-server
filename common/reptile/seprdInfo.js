const request = require('request');
const cheerio = require('cheerio');

const { seprdAuth } = require('./authOption');

const seprdInfoPromise = (seprdKey) => new Promise((resolve, reject) => {
  request(seprdAuth(seprdKey), (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(body);
      const dateTitles = $('#datesmodule .item-details li dl.dates dd.date>span').toArray().map(ele => ele.attribs['data-name']);
      const dateTimes = $('#datesmodule .item-details li dl.dates dd.date>span time').toArray().map(ele => ele.attribs.datetime.slice(0, 10));
      const peopelTitles = $('#peoplemodule .item-details#peopledetails li dl dt').toArray().map(ele => ele.children[0].data.replace(':', ''));
      let peopelNames = [], peopelMiss = [];
      $('#peoplemodule .item-details#peopledetails li dl span.user-hover').toArray().forEach(ele => {
        let userInfo = ele.attribs['data-user'] && JSON.parse(ele.attribs['data-user']);
        if (userInfo) {
          peopelNames.push(userInfo.displayName);
          peopelMiss.push(userInfo.username);
        } else {
          peopelNames.push(ele.children[0].data);
          peopelMiss.push(ele.attribs.rel);
        }
      });
      resolve({
        date: {
          key: '日期',
          value: dateTitles.map((v, i) => {return {title: v, time: dateTimes[i]}})
        }, 
        user: {
          key: '用户', 
          value: peopelTitles.map((v, i) => {return {title: v, name: peopelNames[i], mis: peopelMiss[i]}})
        }
      });
    } else {
      reject(error);
    }
  })
})

module.exports = async (seprdKey) => await seprdInfoPromise(seprdKey);
