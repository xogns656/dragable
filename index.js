const elWrapper = document.getElementById("wrapper");

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
  elSeletedNode.style.backgroundColor = "black";
  elSeletedNode.style.color = "white";
  elSeletedNode.style.opacity = 0.8;
}

function dragEnd() {
  const elSeletedNode = document.getElementById(eventNode.id);
  elSeletedNode.style.backgroundColor = "white";
  elSeletedNode.style.color = "black";
  elSeletedNode.style.opacity = 1;
}

function dragOver(e) {
  if (e.target.id !== "wrapper") {
    const elDrag = document.getElementById(e.target.id);
    elDrag.before(eventNode);
  }
}
