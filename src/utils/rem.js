export default function () {
  var devicePixelRatio = 1;
  var scale = 1 / devicePixelRatio;
  document.querySelector('meta[name="viewport"]').setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no,viewport-fit=cover');
  var globalWidth = window.innerWidth;
  var radixNO = 100 / 750 * globalWidth;
  document.documentElement.style.fontSize = radixNO + 'px';
  /* fit document fit the screen, get the radix */
  (function (doc, win) {
    var docEl = doc.documentElement;
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc = function () {
      // var globalWidth = window.innerWidth;// for judge the screen ??
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      console.log('clientWidth-', clientWidth, 12 * (clientWidth / 750) + 'px');
      docEl.style.fontSize = 10 * (clientWidth / 750) + 'px';
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);
};
