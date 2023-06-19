(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-buy-now-top-open]"),
    modal: document.querySelector("[data-modal-buy-now]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();