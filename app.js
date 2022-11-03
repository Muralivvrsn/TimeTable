const time = document.getElementById("time");
const button1 = document.getElementById("btn-primary");
const dis = document.getElementById("discription");
const dis1 = document.getElementById("discription1");
let thisIstrue = true;
function Display() {
  if (thisIstrue) {
    time.style.visibility = "visible";
    thisIstrue = false;
  } else {
    alert("Don't Click again , It won't change");
  }
}
function disappear() {
  dis.style.display = "none";
  dis1.style.display = "block";
  complete.style.display ='block';
}
setInterval(() => {
  disappear();
}, 10000);
button1.addEventListener("click", Display);
