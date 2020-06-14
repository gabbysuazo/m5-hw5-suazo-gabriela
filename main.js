var boxes = document.getElementsByClassName('box');

function boxHighlight () {
  for (i = 0; i < boxes.length; i++){
    boxes[i].style.backgroundColor = "lightpink";
  }
}

for (i = 0; i < boxes.length; i++){
  boxes[i].addEventListener('mouseenter', boxHighlight);
}
