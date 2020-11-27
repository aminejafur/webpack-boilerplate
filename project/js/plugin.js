// style
import "../css/main.scss";
// js
import { default as showAlert } from "./loads/noLazyLoad";
// import { default as showLazyAlert } from './loads/withLazyLoad'; do not import it now

window.onload = (_) => {
  // Menu Links indicator
  const indicator = document.querySelector(".navbar__menu--links-indicator");
  const links = document.querySelectorAll(".navbar__menu--links");
  // under home link
  indicator.style.left = links[0].offsetLeft + "px";
  indicator.style.width = links[0].offsetWidth + "px";
  // onmouseover
  links.forEach((link) => {
    link.onmouseover = (_) => {
      indicator.style.left = link.offsetLeft + 5 + "px";
      indicator.style.width = link.offsetWidth - 10 + "px";
    };
  });
  if (document.location.pathname == "/") {
    // Lazy loading demo
    const alertBtn = document.querySelector("#alert");
    const lazyAlertBtn = document.querySelector("#lazy_alert");
    // normal call
    alertBtn.onclick = (_) => {
      // showAlert();
    };
    // lazy import
    lazyAlertBtn.onclick = (_) => {
      import(
        /* webpackChunkName: "lazyloadedalert"*/
        "./loads/withLazyLoad"
      ).then((module) => {
        module.default();
      });
    };
  }
};
