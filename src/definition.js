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
} else {
  window.xprops = {
    botCss: '',
    ports: {
      default: 'default'
    },
    variables: {},
    processed: [],
    interactionProgress: [],
    node: {},
    onCallHost: (method, args) => {
      console.info(`called method`, method, args)
    },
    onValidation: (isValid, message) => {
      console.info(`is valid`, isValid, message)
    },
    onSetVariable: (id, value) => {
      console.info(`setting variable`, id, value)
    },
    onProceed: (port, output, type) => {
      console.info(`moving to next node on port`, port, `output`, output, `of type`, type)
    }
  }
}