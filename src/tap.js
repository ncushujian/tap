/**
 * tap.js 模拟tap事件
 * @param {dom} elem 增加tap事件监控的根节点,attach后，后代node会触发tap事件
 */
// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
var listenerParam = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function () {
      listenerParam = { passive: true };
      return true;
    }
  });
  addEventListener('test', null, opts);
} catch (e) {}
var touches;
var startTx;
var startTy;
var onsTouchStart = function (e) {
  touches = e.touches[0];
  startTx = touches.clientX;
  startTy = touches.clientY;
};

var changedTouches;
var evt;
var timeout;
var onTouchEnd = function (e) {
  changedTouches = e.changedTouches[0];
  if (Math.abs(startTx - changedTouches.clientX) < 15 && Math.abs(startTy - changedTouches.clientY) < 15) {
    timeout = setTimeout(function () {
      triggerEvent(e, 'tap');
    }, 0);
  }
};
var attach = function (elem) {
  elem.addEventListener('touchstart', onsTouchStart, listenerParam);
  elem.addEventListener('touchend', onTouchEnd, listenerParam);
  elem.addEventListener('scroll', cancelAll);
  window.addEventListener('scroll', cancelAll);
};
function cancelAll () {
  if (timeout) clearTimeout(timeout);
}
function triggerEvent (e, name) {
  if (CustomEvent) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('CustomEvent');
    evt.initEvent(name, true, true);
  }
  e.target.dispatchEvent(evt);
}

export {
  attach
};

export default attach;
