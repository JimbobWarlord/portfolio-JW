window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", function () {
    const target = this.dataset.page;

    if (!target) return;

    document.body.classList.remove("loaded");
    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = target;
    }, 500);
  });
});
