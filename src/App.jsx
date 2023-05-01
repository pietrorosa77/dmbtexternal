import React from "react";

export default () => {
  return (
  <div className={`p-component flex p-reset w-full h-full`}>
    <h1>Welcome to React Vite Micro App!</h1>
    <p>Hard to get more minimal than this React app.</p>
    <style>{window.xprops.botCss}</style>
  </div>
);}
