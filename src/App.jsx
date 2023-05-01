import React from "react";

export default (props) => {
  const onSetVariable = () => {
    props.onSetVariable('testExternal', 'pietro test remote')
  }
  const onCallHost = () => {
    props.onCallHost('testFromExternal', props.variables).then((res) => {
      props.onSetVariable('testCallHostMethod', res)
    })
  }

  const onMoveNext = () => {
    props.onProceed(props.ports.ext1, 'Hi!i answered this', 'string')
  }
  return (
    <>
      <div className={`p-component p-reset w-full h-full`}>
        <h2>This is an external DumbotComponent</h2>
        <div className={`p-component flex p-reset w-full h-full gap-2`}>
            <button onClick={onSetVariable} className="p-button p-component">
              <span className="p-button-label p-c">set variable</span>
            </button>
            <button onClick={onCallHost} className="p-button p-component">
              <span className="p-button-label p-c">cal host method</span>
            </button>
            <button onClick={onMoveNext} className="p-button p-component">
              <span className="p-button-label p-c">move next</span>
            </button>
        </div>
      </div>
      <style>{window.xprops.botCss}</style>
    </>
  );
}
