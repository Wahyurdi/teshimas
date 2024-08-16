window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar2").style.top = "0";
  } else {
    document.getElementById("navbar2").style.top = "-50px";
  }
}

function openNav() {
  document.getElementById("sidebar").style.width = "250px";
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
}
document.addEventListener("DOMContentLoaded", function () {
  const photos = document.querySelectorAll(".photo");
  let currentIndex = 0;

  setInterval(() => {
    photos[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % photos.length;
    photos[currentIndex].classList.add("active");
  }, 3000); // Ganti foto setiap 3 detik
});
