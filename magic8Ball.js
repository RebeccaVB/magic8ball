
function myMove() {
  var elem = document.getElementById("myAnimation");
  var pos = 0;
  var id = setInterval(frame, Math.floor(Math.random() * 8) + 1);

  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = id - 'px';
      elem.style.left = id + 'px';
      elem.style.top = id - 'px';
      elem.style.left = id + 'px';
      elem.style.top = id - 'px';
      elem.style.left = id + 'px';
    }
  }
}
switch eightBall(math.floor((Math.random() * 5) + 1)); {
    case 1:
        text = "Your current romantic status will change very soon.";
        break;
    case 2:
        text = "Have you saved it?";
        break;
    case 3:
        text = "The outlook is good.";
        break;
    case 4:
        text = "Your likely to get a new president shortly.";
        break;
    case 5:
        text = "Your face."
        break;

default:
        text = "Please try again";
};
