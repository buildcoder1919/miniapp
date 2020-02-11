const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getTimeStamp() {
  return Date.now();
}

function loadRandom (len) {
  let rnd = '';
  for (let i = 0; i < len; i++) {
    rnd += Math.floor(Math.random() * 10);
  }
  return rnd;
}

module.exports = {
  formatTime: formatTime,
  url0: '/creditcard',
  url2: 'http://wxtest.smeia.cn',
  moduleCode: 'enjoyarrondi',
  menusCode: 'homeGuide',
  getTimeStamp: getTimeStamp,
  loadRandom: loadRandom
};
