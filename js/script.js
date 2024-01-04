// Luas Segitiga
const alas = document.getElementById("nilai-alas");
const tinggi = document.getElementById("nilai-tinggi");
const hitung = document.getElementById("hitung");
const output = document.getElementById("output");
const resetButton = document.getElementById("reset");

hitung.addEventListener("click", function () {
  let a = alas.value;
  let t = tinggi.value;
  let l = 0.5 * a * t;
  output.innerHTML = `L = 1/2 x a x t <br> L = 1/2 x ${a} x ${t} <br> L= ${l} cm`;
});

function resetForm() {
  alas.value = "";
  tinggi.value = "";
  output.innerHTML = "";
}

const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
const s3 = document.getElementById("s3");
const hitungKeliling = document.getElementById("hitungKeliling");
const outputKeliling = document.getElementById("outputKeliling");
const resetKelilingButton = document.getElementById("resetKeliling");

hitungKeliling.addEventListener("click", function () {
  let nilaiS1 = parseFloat(s1.value);
  let nilaiS2 = parseFloat(s2.value);
  let nilaiS3 = parseFloat(s3.value);

  if (!isNaN(nilaiS1) && !isNaN(nilaiS2) && !isNaN(nilaiS3)) {
    let keliling = nilaiS1 + nilaiS2 + nilaiS3;
    outputKeliling.innerHTML = `K = S1 + S2 + S3  <br> K = ${nilaiS1} + ${nilaiS2} + ${nilaiS3} <br> K = ${keliling} cm`;
  } else {
    outputKeliling.innerHTML = "Masukkan nilai yang valid untuk sisi A, B, dan C.";
  }
});

resetKelilingButton.addEventListener("click", function () {
  s1.value = "";
  s2.value = "";
  s3.value = "";
  outputKeliling.innerHTML = "";
});


function scrollToTop() {
    document.body.scrollTop = 0; // Untuk browser yang mendukung
    document.documentElement.scrollTop = 0; // Untuk browser lainnya
  }


  window.addEventListener("scroll", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });



