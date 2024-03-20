//global data collection
const closeIcon = document.querySelector(".close");
const btnClose = document.querySelector(".btn");
const header = document.querySelector(".header");
const getYear = document.querySelector("#dateYear");
let downArrowIcon = document.querySelector(".material-symbols-sharp");
// footer data collection

document.querySelector("#f1").addEventListener("click", function () {
  document.querySelector("#f1").innerHTML = "remove";
  f1 = (document.querySelector("#f1").innerHTML = "remove");
  document.querySelector("#show_1").style.display = "flex";
  footerIcon(f1, "#f1", "f11", "#f11", "#show_1");
});
function footerIcon(f, fv, cf, ccf, show_){
  if (f == "remove") {
    document.querySelector(fv).setAttribute("id", cf);
    document.querySelector(ccf).addEventListener("click", function () {
      document.querySelector(ccf).innerHTML = "add";
      document.querySelector(show_).style.display = "none";
      if(!( document.querySelector(ccf).innerHTML == "remove")){
        document.querySelector(show_).style.display = "none";
        document.querySelector(ccf).innerHTML = "add";
      }
    });
  
  }
}
document.querySelector("#f2").addEventListener("click", function () {
  f2 = document.querySelector("#f2").innerHTML = "remove";
  document.querySelector("#show_2").style.display = "flex";
  footerIcon(f2, "#f2", "f22", "#f22", "#show_2");
});
document.querySelector("#f3").addEventListener("click", function () {
f3 =  document.querySelector("#f3").innerHTML = "remove";
  document.querySelector("#show_3").style.display = "flex";
  footerIcon(f3, "#f3", "f33", "#f33", "#show_3");
});
document.querySelector("#f4").addEventListener("click", function () {
  f4 = document.querySelector("#f4").innerHTML = "remove";
  document.querySelector("#show_4").style.display = "flex";
  footerIcon(f4, "#f4", "f44", "#f44", "#show_4");
});
document.querySelector("#f5").addEventListener("click", function () {
  f5 = document.querySelector("#f5").innerHTML = "remove";
  document.querySelector("#show_5").style.display = "flex";
  footerIcon(f5, "#f5", "f55", "#f55", "#show_5");
});

let date = new Date();
date = date.getFullYear();
getYear.innerHTML = `Binance &copy; ${date}`;

//functions
function close() {
  header.classList.add("hide");
}

//event listener to listen to element querry.
closeIcon.addEventListener("click", function () {
  close();
});
btnClose.addEventListener("click", function () {
  close();
});
downArrowIcon.addEventListener("click", function () {
  changeIcon();
});
