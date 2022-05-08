const open = document.querySelector("i.fa-bars");
const close = document.querySelector("i.fa-xmark");
const oc = document.querySelectorAll("i.fa-bars, i.fa-xmark");
const navigation = document.querySelector(".navigation");

const openCloseMenu = () => {
  open.classList.toggle("hide");
  close.classList.toggle("hide");
  navigation.classList.toggle("hide");
};

open.addEventListener("click", openCloseMenu);
close.addEventListener("click", openCloseMenu);
