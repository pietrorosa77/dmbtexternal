import * as zoid from "zoid/dist/zoid.frameworks";

const ExternalDummbotTest = zoid.create({
  tag: "ext-dmbt",
});

window.ExternalDummbotTest = ExternalDummbotTest;

const onResize = () => {requestAnimationFrame(() => {
  window.xprops._onChangeSize(document.documentElement.getBoundingClientRect().height);
})}

const cssString = window.xprops._onGetCss();
const head = document.head || document.getElementsByTagName('head')[0];
const style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
style.appendChild(document.createTextNode(cssString));

window.addEventListener("DOMContentLoaded", () => {
  window.xprops._onLoaded(document.documentElement.getBoundingClientRect().height);
  window.xprops._onChangeSize(document.documentElement.getBoundingClientRect().height)
});
window.addEventListener('resize', onResize);

