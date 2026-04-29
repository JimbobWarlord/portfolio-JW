document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("my-audio");
  const songs = document.querySelectorAll(".song-item");

  songs.forEach((song) => {
    song.addEventListener("click", function () {
      const songUrl = this.getAttribute("data-src");
      audio.src = songUrl;
      audio.currentTime = 0;
      audio.play();
      audio.volume = 0.3;
      console.log("bing");
    });
  });
});

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

const backgroundshape = document.getElementById("background-shape");

document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() === "r") {
    document.body.style.backgroundColor = "rgb(60, 0, 0)";
    console.log("ping");
    backgroundshape.style.backgroundColor = "rgb(255, 0, 0)";
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() === "b") {
    document.body.style.backgroundColor = "rgb(0, 0, 60)";
    console.log("ping");
    backgroundshape.style.backgroundColor = "rgb(0, 0, 255)";
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() === "p") {
    document.body.style.backgroundColor = "rgb(60, 0, 60)";
    console.log("ping");
    backgroundshape.style.backgroundColor = "rgb(255, 0, 255)";
  }
});
