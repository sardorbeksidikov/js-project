const loginForm = document.getElementById('catalog-list');
const toggleForm = document.getElementById('toggleForm');

toggleForm.addEventListener('click', function (e) {
    loginForm.classList.toggle('open');
});


// Modal/////////////////////


const btnOpen = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");

btnOpen.addEventListener("click", function (e) {
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
});

btnClose.addEventListener("click", function (e) {
  modal.classList.remove("open");
});

