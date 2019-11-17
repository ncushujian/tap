# tap
click事件在部分移动端浏览器内有300ms延迟，使用tap插件，可以解决延迟问题。

## 安装
```javascript
npm install @qt/tap
```
## 基本用法

```html
<div id="div"></div>
```
```javascript
import attachTap from '@qt/tap';
var divDom = document.getElementById('div');
// 执行后，dom节点内部的所有元素在点击后都会触发tap事件
attachTap(div);
divDom.addEventListener('tap', function(){
  alert('tap')
})
```
