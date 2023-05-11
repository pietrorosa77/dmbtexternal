import * as zoid from "zoid/dist/zoid.frameworks";

const ExternalDummbotTest = zoid.create({
  tag: "ext-dmbt",
  exports: {
    getContentSize: {
      type: "function",
    },
  },
});

window.ExternalDummbotTest = ExternalDummbotTest;

if (window.xprops) {
  window.addEventListener("load", () => {
    window.xprops._onLoaded();
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

window.xprops.export({
  getContentSize: () => {
    return document.body.scrollHeight + 50;
  },
});