let loaderDisable = setTimeout(() => {
  document.getElementById("loader").style.display = "none";
}, 3700);

function closeMenu() {
  document.querySelector(".nav-container").classList.remove("mobile");
  document.querySelector(".menu-btn").classList.remove("opened");
}

function openMenu() {
  document.querySelector(".nav-container").classList.toggle("mobile");
  document.querySelector(".menu-btn").classList.toggle("opened");
}

// -- forms field validation  --

let field1 = document.getElementById("name");
let field2 = document.getElementById("email");
let field3 = document.getElementById("message");

function success() {
  if (
    field1.value == "" ||
    field2.value == "" ||
    field2.value.indexOf("@") == -1 ||
    field2.value.lastIndexOf(".") < field2.value.indexOf("@") ||
    field2.value.lastIndexOf(".") == field2.value.length - 1 ||
    field2.value.charAt(field2.value.indexOf("@") + 1) == "." ||
    field2.value.charAt(0) == "." ||
    field2.value.charAt(0) == "@" ||
    //-- global amount of "@" in string is more than 1? --
    (field2.value.match(/@/g) || []).length > 1 ||
    field3.value == ""
  ) {
    document.getElementById("btnSubmit").disabled = true;
  } else {
    document.getElementById("btnSubmit").disabled = false;
  }
}

// -- timeout before submit  --

function funcSubmit() {
  let form = document.getElementById("contactForm");
  setTimeout(() => {
    form.submit();
  }, 4500);
}

// -- animate sending  --

function animateSending() {
  let formH3 = document.getElementById("formH3");
  let formContainer = document.getElementById("formContainer");
  let bgr = document.getElementById("contactBgr");
  let airplane = document.getElementById("airplane");

  formH3.style.transition = "0.3s";
  formH3.style.opacity = 0;
  formContainer.style.transition = "0.3s";
  formContainer.style.opacity = 0;
  bgr.style.padding = "2rem";
  bgr.style.animation = "shrink .7s .3s forwards, transparent 1.5s 1s forwards";
  airplane.style.opacity = 1;
  airplane.style.animation = "fly 3s 1.5s forwards";
}

//---- delete initial animation from h1-----

let h1Element = document.getElementById("h1");
setTimeout(() => {
  h1Element.classList.remove("initial-animation");
}, 4850);

//-----add "jelly" animation to all span-tag----

let spanElements = document.getElementsByTagName("span");
for (let i = 0; i < spanElements.length; i++) {
  spanElements[i].addEventListener("mouseover", function () {
    spanElements[i].style.animation = "jelly 1s";
    setTimeout(() => {
      spanElements[i].style.animation = "";
    }, 1000);
  });
}

// ----- color blind ------

let colorBlindActivate = false;

function colorBlind() {
  let root = document.querySelector(":root");
  let img = document.getElementById("blindness");
  if (!colorBlindActivate) {
    root.style.setProperty("--bgr", "#0B0B1E");
    root.style.setProperty("--oxford", "#13132D");
    root.style.setProperty("--cyan", "#6E70FF");
    root.style.setProperty("--green", "#3E3F83");
    root.style.setProperty("--lavender", "#8D8DB2");
    root.style.setProperty("--snow", "#F6F6F4");
    root.style.setProperty("--x-midnight-green", "#252557");
    root.style.setProperty("--x-accent-b", "#5355ED");
    root.style.setProperty("--x-accent-o", "#B8B717");
    img.src = "./src/img/color-blind/color-blind-disable.svg";
    img.style.filter =
      "brightness(0) saturate(100%) invert(38%) sepia(89%) saturate(1290%) hue-rotate(220deg) brightness(100%) contrast(102%)";
    colorBlindActivate = true;
  } else {
    root.style.setProperty("--bgr", "#071222");
    root.style.setProperty("--oxford", "#0d1b33");
    root.style.setProperty("--cyan", "#00ffff");
    root.style.setProperty("--green", "#048a81");
    root.style.setProperty("--lavender", "#8e8dbe");
    root.style.setProperty("--snow", "#fceff9");
    root.style.setProperty("--x-midnight-green", "#064e5a");
    root.style.setProperty("--x-accent-b", "#00c1fc");
    root.style.setProperty("--x-accent-o", "#fc6100");
    img.src = "./src/img/color-blind/color-blind-enable.svg";
    img.style.filter = "none";
    colorBlindActivate = false;
  }
}

// --- show "back to top" button ---

window.onscroll = function () {
  if (
    document.documentElement.scrollTop > document.documentElement.clientHeight
  ) {
    document.getElementById("back").style.visibility = "visible";
  } else {
    document.getElementById("back").style.visibility = "hidden";
  }
};
