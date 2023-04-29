import * as zoid from "zoid/dist/zoid.frameworks";

const ExternalDummbotTest = zoid.create({
  tag: "ext-dmbt",
});

window.ExternalDummbotTest = ExternalDummbotTest;

const onResize = () => {requestAnimationFrame(() => {
  window.xprops.changeSize(document.documentElement.getBoundingClientRect().height)
})}
window.addEventListener("DOMContentLoaded", () => {
  window.xprops.changeSize(document.documentElement.getBoundingClientRect().height)
});
window.addEventListener('resize', onResize);

