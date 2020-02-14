const elWrapper = document.getElementById("wrapper");
const elBody = document.getElementsByTagName("body")[0];

let eventNode;
let newDiv;

const array = [];
for (let i = 0; i < 12; i++) {
  array.push(i + 1);
}

for (let i = 0; i < array.length; i++) {
  const div = document.createElement("div");
  div.innerText = array[i];
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
