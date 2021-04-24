import {
  initialisePage,
  menuTab,
  contactTab,
  clearTab,
} from "./page-modules.js";

initialisePage();
menuTab();

const tabButtonOne = document.getElementById("tab1");
const tabButtonTwo = document.getElementById("tab2");

tabButtonOne.addEventListener("click", function () {
  if (this.checked) {
    clearTab();
    menuTab();
  }
});

tabButtonTwo.addEventListener("click", function () {
  if (this.checked) {
    clearTab();
    contactTab();
  }
});
