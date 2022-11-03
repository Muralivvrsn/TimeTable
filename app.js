const time = document.getElementById("time");
const button = document.getElementById("btn-primary");
const dis = document.getElementById("discription");
let thisIstrue = true;
function Display() {
  if (thisIstrue) {
    time.style.visibility = "visible";
    thisIstrue = false;
  } else {
    alert("Don't Click again , It won't change");
  }
}
function disappear(){
  dis.style.display = 'none';
}
setInterval(() => {
  disappear();
}, 10000);
button.addEventListener("click", Display);
