(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-buy-now-top-open]"),
    closeModalBtn: document.querySelector("[data-modal-buy-now-top-close]"),
    modal: document.querySelector("[data-modal-buy-now-top]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();