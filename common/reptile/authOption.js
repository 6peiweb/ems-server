const headers = {
  'Authorization': 'Basic ' + new Buffer.from('liupei05' + ':' + 'lp-19970127').toString('base64'),
  'Content-Type': 'application/json'
};

module.exports = {
  seprdAuth: (seprdId) => {
    let seprdKey = isNaN(seprdId) && seprdId.indexOf('SEPRD-') > -1 ? seprdId : `SEPRD-${seprdId}`;
    return {
      url: `https://flow-in.sankuai.com/browse/${seprdKey}`,
      headers
    }
  },
  rapidViewAuth: (rapidViewId) => {
    return {
      url: `https://flow-in.sankuai.com/rest/greenhopper/1.0/xboard/work/allData.json?rapidViewId=${rapidViewId}`,
      headers
    }
  }
};
