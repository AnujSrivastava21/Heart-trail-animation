const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const x= event.offsetX;
  const y=event.offsetY;
  const span = document.createElement('span');
  bodyEl.appendChild(span);
  span.style.left=x + "px";
  span.style.top=y + "px";
  const size= Math.random()*100;
  span.style.width=size + "px"
  span.style.height=size + "px"
  setTimeout(() => {
    span.remove()
  }, 3000);
});