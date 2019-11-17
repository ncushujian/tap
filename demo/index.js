import tap from '../dist/tap';

var clickDom = document.getElementById('j_click');
var tapDom = document.getElementById('j_tap');

tap(document.body);

clickDom.addEventListener('click', function () {
  alert('click trigger');
});

tapDom.addEventListener('click', function () {
  alert('tap trigger');
});
