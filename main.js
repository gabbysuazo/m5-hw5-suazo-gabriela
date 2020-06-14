// Highlight all boxes on hover

var boxes = document.getElementsByClassName('box');

function boxHighlight() {
  for (i = 0; i < boxes.length; i++){
    boxes[i].style.backgroundColor = "lightpink";
  }
}

for (i = 0; i < boxes.length; i++){
  boxes[i].addEventListener('mouseenter', boxHighlight);
}

// Apend DOM node

// Box one message
var messageOne = document.createElement("P");
var a = document.createTextNode("Oooh - so close, but no cigar");
messageOne.appendChild(a);

function boxClickOne() {
  document.getElementById("container").appendChild(messageOne)
}

boxes[0].addEventListener("click", boxClickOne);

// Box two message
var messageTwo = document.createElement("P");
var b = document.createTextNode("DING DING DING - We have a winner");
messageTwo.appendChild(b);

function boxClickTwo() {
  document.getElementById("container").appendChild(messageTwo)
}

boxes[1].addEventListener("click", boxClickTwo);

// Box three message
var messageThree = document.createElement("P");
var c = document.createTextNode("Oops, butter luck next time");
messageThree.appendChild(c);

function boxClickThree() {
  document.getElementById("container").appendChild(messageThree)
}

boxes[2].addEventListener("click", boxClickThree);