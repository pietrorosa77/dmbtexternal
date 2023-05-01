import * as zoid from "zoid/dist/zoid.frameworks";

const ExternalDummbotTest = zoid.create({
  tag: "ext-dmbt",
});

window.ExternalDummbotTest = ExternalDummbotTest;

if (window.xprops) {
  const onResize = () => {
    requestAnimationFrame(() => {
      window.xprops._onChangeSize(document.documentElement.getBoundingClientRect().height);
    })
  }

  window.addEventListener('resize', onResize);

  window.addEventListener("load", () => {
    window.xprops._onLoaded(document.documentElement.getBoundingClientRect().height);
    onResize();
  });
}

