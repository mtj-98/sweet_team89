(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function d(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(e){if(e.ep)return;e.ep=!0;const n=d(e);fetch(e.href,n)}})();(()=>{const t=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),d=document.querySelector(".js-close-menu"),l=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),t.classList.toggle("is-open");const n=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};o.addEventListener("click",l),d.addEventListener("click",l),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(t.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(()=>{const t={openModalBtn:document.querySelector("[data-modal-buy-now-open]"),closeModalBtn:document.querySelector("[data-modal-buy-now-close]"),modal:document.querySelector("[data-modal-buy-now]")};function o(){t.modal.classList.toggle("is-hidden")}t.openModalBtn.addEventListener("click",o),t.closeModalBtn.addEventListener("click",o)})(),(()=>{const t={openModalBtn:document.querySelector("[data-modal-explore-open]"),closeModalBtn:document.querySelector("[data-modal-explore-close]"),modal:document.querySelector("[data-modal-explore]")};function o(){t.modal.classList.toggle("is-hidden")}t.openModalBtn.addEventListener("click",o),t.closeModalBtn.addEventListener("click",o)})(),(()=>{const t={openModalBtn:document.querySelector("[data-modal-review-open]"),closeModalBtn:document.querySelector("[data-modal-review-close]"),modal:document.querySelector("[data-modal-review]")};function o(){t.modal.classList.toggle("is-hidden")}t.openModalBtn.addEventListener("click",o),t.closeModalBtn.addEventListener("click",o)})();
