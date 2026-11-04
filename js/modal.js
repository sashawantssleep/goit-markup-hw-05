const backdrop = document.querySelector(".backdrop");
const openButton = document.querySelector(".hero-button");
const closeButton = document.querySelector(".modal-close");
const dialog = document.querySelector(".modal");
function closeModal() {
  backdrop.classList.remove("is-open");
  document.body.style.overflow = "";
  openButton.focus();
}
openButton.addEventListener("click", () => {
  backdrop.classList.add("is-open");
  document.body.style.overflow = "hidden";
  closeButton.focus();
});
closeButton.addEventListener("click", closeModal);
backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (!backdrop.classList.contains("is-open")) return;
  if (event.key === "Escape") closeModal();
  if (event.key === "Tab") {
    const controls = [
      ...dialog.querySelectorAll("button, input, textarea, a[href]"),
    ];
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});
