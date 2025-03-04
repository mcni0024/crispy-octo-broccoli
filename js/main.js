//github.com/prof3ssorSt3v3/improved-goggles
//prof3ssorSt3v3.github.io/improved-goggles/index.html
//127.0.0.1.5500/index.html
//https://improved-goggles-beryl.vercel.app

document.addEventListener("DOMContentLoaded", init);

const MODE = Object.freeze({
  DEV: "DEV",
  PROD: "PRODUCTION",
  STAGING: "STAGING",
});

//IIFE that runs before init to determine our app mode
// http://127.0.0.1:5500 - origin
// 127.0.0.1:5500 - host
// 127.0.0.1 - hostname
let mode = (() => {
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    return MODE.DEV; //DEV
  }
  if (location.hostname.endsWith("github.io")) {
    return MODE.STAGING; //STAGING
  }
  if (location.hostname.endsWith("vercel.app")) {
    return MODE.PROD; //PRODUCTION
  }
})();

//level = 'info' || 'warn' || 'error'
const log = (msg, level = "info") => {
  switch (level) {
    case "info":
      if (mode === MODE.DEV) {
        console.log(msg);
      }
      break;
    case "warn":
      console.warn(msg);
      break;
    case "error":
      console.error(msg);
  }
};

//DEV is the local development environment (testing)
//PROD is the live production environment
//STAGING is the testing environment

function init() {
  //page is ready to use
  log("hello");
  log("yikes", "warn");
  log("oh no", "error");
}
