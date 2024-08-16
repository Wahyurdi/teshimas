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

const number = document.getElementById("number");
let count = 0;
const targetNumber = 2; // Ganti dengan angka yang diinginkan
const interval = 400; // Kecepatan perubahan angka (ms)

function animateNumber() {
  if (count < targetNumber) {
    count++;
    number.textContent = count;
    setTimeout(animateNumber, interval);
  }
}

animateNumber();
