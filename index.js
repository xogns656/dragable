const elWrapper = document.getElementById("wrapper");
const elBody = document.getElementsByTagName("body")[0];
const COLORS = [
  "#e21400",
  "#91580f",
  "#f8a700",
  "#f78b00",
  "#58dc00",
  "#287b00",
  "#a8f07a",
  "#4ae8c4",
  "#3b88eb",
  "#3824aa",
  "#a700ff",
  "#d300e7"
];

let eventNode;
let newDiv;

const array = [];
for (let i = 0; i < 100; i++) {
  array.push(i + 1);
}

for (let i = 0; i < array.length; i++) {
  const div = document.createElement("div");
  div.style.backgroundColor = COLORS[i % COLORS.length];
  div.setAttribute("class", "content");
  div.setAttribute("id", "content" + (i + 1));
  div.setAttribute("draggable", "true");
  elWrapper.appendChild(div);
}

elWrapper.addEventListener("dragstart", dragStart);
elWrapper.addEventListener("dragend", dragEnd);
elWrapper.addEventListener("dragover", dragOver);

function dragStart(e) {
  eventNode = e.target;
  const elSeletedNode = document.getElementById(e.target.id);
  elSeletedNode.classList.add("moved");
}

function dragEnd(e) {
  e.preventDefault();
  const elSeletedNode = document.getElementById(eventNode.id);
  elSeletedNode.classList.remove("moved");
}

function dragOver(e) {
  e.preventDefault();
  if (e.target.id !== "wrapper") {
    const elDrag = document.getElementById(e.target.id);
    if (e.offsetX < elDrag.offsetWidth / 2) {
      elDrag.before(eventNode);
    } else {
      elDrag.after(eventNode);
    }
  }
}
