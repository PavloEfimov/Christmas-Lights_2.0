let main = document.querySelector("main");
let circles1 = document.querySelector("#circles1");
let circles2 = document.querySelector("#circles2");
let circles3 = document.querySelector("#circles3");
let circles4 = document.querySelector("#circles4");
let circles5 = document.querySelector("#circles5");
let circles6 = document.querySelector("#circles6");
let circles7 = document.querySelector("#circles7");

let circlesCollctn;
let circles = document.querySelectorAll(".circles");
let intervalDisplay = document.querySelector("#intervalDisplay");
let intensityDisplay = document.querySelector("#intensityDisplay");
let setIntvl = document.querySelector("#setIntvl");
let setIntensity = document.querySelector("#setIntensity");
let btnChngSize = document.querySelector("#btnChngSize");
let setSizeRange = document.querySelector("#setSizeRange");
let sizeDisplay = document.querySelector("#sizeDisplay");
let btnChngClr = document.querySelector("#btnChngClr");
let colorPicker = document.querySelector("#colorPicker");
let hexValue = document.querySelector("#hexValue");
let hexDiv = document.querySelector("#hexDiv");
let rows = document.querySelector("#rows");
let interval = 100;
let size = 25;
let boolSize = 0;

let btn = document.querySelector("#btn");
let btn2 = document.querySelector("#btn2");

let intensity = 1;
let x = 1;
let timerID;

let itemCollctn;
let number = 0;

let light = function () {
  circlesCollctn = document.querySelectorAll(":not([hidden])>.circle");
  console.log("length: ", circlesCollctn.length);
  circlesCollctn[number].style.opacity = `${intensity}`;
  if (number == 0) {
    circlesCollctn[circlesCollctn.length - 1].style.opacity = `0.5`;
  } else {
    circlesCollctn[number - 1].style.opacity = `0.5`;
  }

  if (number == circlesCollctn.length - 1) {
    number = 0;
  } else {
    number++;
  }
};

let setLights = function (e) {
  if (e.target.innerText == "start") {
    e.target.innerText = "stop";
    timerID = setInterval(light, interval);
  } else {
    e.target.innerText = "start";
    clearInterval(timerID);
  }
};

let fnSetIntvl = function (e) {
  intervalDisplay.textContent = setIntvl.value;
  interval = setIntvl.value;
};

let fnSetIntensity = function (e) {
  intensityDisplay.textContent = setIntensity.value;
  intensity = setIntensity.value;
};

let fnChangeSize = function (e) {
  if (!boolSize) {
    btnChngSize.style.backgroundColor = "red";
    boolSize = 1;
    btnChngSize.value = "DO change size";
  } else {
    btnChngSize.style.backgroundColor = "bisque";
    boolSize = 0;
    btnChngSize.value = "NO change size";
  }
};

let fnSizeRange = function (e) {
  sizeDisplay.textContent = setSizeRange.value;
  size = setSizeRange.value;
};

let fnSizeOfCircle = function (e) {
  if (e.target.classList.contains("circle") && boolSize) {
    e.target.style.width = `${2 * size}px`;
    e.target.style.height = `${2 * size}px`;
  }
};

let fnChangeColor = function (e) {
  if (btnChngClr.textContent == "change color") {
    colorPicker.style.visibility = "visible";
    btnChngClr.textContent = "hide color options";
  } else {
    colorPicker.style.visibility = "hidden";
    btnChngClr.textContent = "change color";
  }
};

let fnChooseColorCircle = function (e) {
  if (hexValue.value && e.target.classList.contains("circle")) {
    e.target.style.backgroundColor = hexValue.value;
  }
};

let fnHexDivColor = function (e) {
  hexDiv.style.backgroundColor = hexValue.value;
};

let fnRows = function (e) {
  // console.log(e.target.value);
  switch (e.target.value) {
    case '1':
      circles1.removeAttribute('hidden');
      circles2.setAttribute('hidden',true); 
      circles3.setAttribute('hidden',true); 
      circles4.setAttribute('hidden',true); 
      circles5.setAttribute('hidden',true); 
      circles6.setAttribute('hidden',true); 
      circles7.setAttribute('hidden',true); 
      console.log(circles1);
      break;
    case '2':
      circles1.removeAttribute('hidden');
      circles2.removeAttribute('hidden'); 
      circles3.setAttribute('hidden',true); 
      circles4.setAttribute('hidden',true); 
      circles5.setAttribute('hidden',true); 
      circles6.setAttribute('hidden',true); 
      circles7.setAttribute('hidden',true); 
      break;
    case '3':
      circles1.removeAttribute('hidden'); 
      circles2.removeAttribute('hidden'); 
      circles3.removeAttribute('hidden'); 
      circles4.setAttribute('hidden',true); 
      circles5.setAttribute('hidden',true); 
      circles6.setAttribute('hidden',true); 
      circles7.setAttribute('hidden',true); 
      break;
    case '4':
      circles1.removeAttribute('hidden');
      circles2.removeAttribute('hidden');
      circles3.removeAttribute('hidden');
      circles4.removeAttribute('hidden');
      circles5.setAttribute('hidden',true); 
      circles6.setAttribute('hidden',true); 
      circles7.setAttribute('hidden',true); 
      break;
    case '5':
      circles1.removeAttribute('hidden');
      circles2.removeAttribute('hidden');
      circles3.removeAttribute('hidden');
      circles4.removeAttribute('hidden');
      circles5.removeAttribute('hidden');
      circles6.setAttribute('hidden',true); 
      circles7.setAttribute('hidden',true); 
      break;
    case '6':
      circles1.removeAttribute('hidden');
      circles2.removeAttribute('hidden');
      circles3.removeAttribute('hidden');
      circles4.removeAttribute('hidden');
      circles5.removeAttribute('hidden');
      circles6.removeAttribute('hidden');
      circles7.setAttribute('hidden',true); 
      break;
    case '7':
      circles1.removeAttribute('hidden');
      circles2.removeAttribute('hidden');
      circles3.removeAttribute('hidden');
      circles4.removeAttribute('hidden');
      circles5.removeAttribute('hidden');
      circles6.removeAttribute('hidden');
      circles7.removeAttribute('hidden');
      break;
  }
};

btn.addEventListener("click", setLights);
setIntvl.addEventListener("input", fnSetIntvl);
setIntensity.addEventListener("input", fnSetIntensity);
btnChngSize.addEventListener("click", fnChangeSize);
setSizeRange.addEventListener("input", fnSizeRange);
btnChngClr.addEventListener("click", fnChangeColor);
main.addEventListener("click", fnChooseColorCircle);
main.addEventListener("click", fnSizeOfCircle);
hexValue.addEventListener("input", fnHexDivColor);
rows.addEventListener("input", fnRows);
