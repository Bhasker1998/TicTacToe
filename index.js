// it is the main function which have the logic behind the tic tac toe
//                                   | 0 | 1 | 2 |
//                                   | 3 | 4 | 5 |
//                                   | 6 | 7 | 8 |

function winner() {
  var box = document.querySelectorAll('.inner');
  if (box[0].innerHTML !== "" && box[0].innerHTML === box[1].innerHTML && box[0].innerHTML === box[2].innerHTML) {
    setcolor(box[0], box[1], box[2]);
    return 1;
  } else if (box[3].innerHTML !== "" && box[3].innerHTML === box[4].innerHTML && box[3].innerHTML === box[5].innerHTML) {
    setcolor(box[3], box[4], box[5]);
    return 1;
  } else if (box[6].innerHTML !== "" && box[6].innerHTML === box[7].innerHTML && box[6].innerHTML === box[8].innerHTML) {
    setcolor(box[6], box[7], box[8]);
    return 1;
  } else if (box[2].innerHTML !== "" && box[2].innerHTML === box[4].innerHTML && box[2].innerHTML === box[6].innerHTML) {
    setcolor(box[2], box[4], box[6]);
    return 1;
  } else if (box[0].innerHTML !== "" && box[0].innerHTML === box[3].innerHTML && box[0].innerHTML === box[6].innerHTML) {
    setcolor(box[0], box[3], box[6]);
    return 1;
  } else if (box[1].innerHTML !== "" && box[1].innerHTML === box[4].innerHTML && box[1].innerHTML === box[7].innerHTML) {
    setcolor(box[1], box[4], box[7]);
    return 1;
  } else if (box[2].innerHTML !== "" && box[2].innerHTML === box[5].innerHTML && box[2].innerHTML === box[8].innerHTML) {
    setcolor(box[2], box[5], box[8]);
    return 1;
  } else if (box[0].innerHTML !== "" && box[0].innerHTML === box[4].innerHTML && box[0].innerHTML === box[8].innerHTML) {
    setcolor(box[0], box[4], box[8]);
    return 1;
  } else
    return 0;
}

// setcolor function is used to change the color of background when match is completed

function setcolor(b1, b2, b3) {
  b1.style.backgroundColor = "red";
  b2.style.backgroundColor = "red";
  b3.style.backgroundColor = "red";
}

// global variables used in program

var scorex = 0,scorez = 0,count = 0,flag=0;


// adding the EventListener to all the boxes using for loop

const play = ()=>{
  for (let i = 0; i < document.querySelectorAll('.inner').length; i++) {
    document.querySelectorAll('.inner')[i].addEventListener("click", click);
  }
}

// this fuction respond to click wether to put "x" or "0" in boxes

function click() {
  if (this.innerHTML !== "X" && this.innerHTML !== "0") {
    if (count % 2 == 0) {
      this.innerHTML = "X";
      if (winner()) {
        removeevent()
        flag = 1;
        scorex++;
        document.querySelector('.winner').innerHTML = "winner is x";
        document.querySelectorAll('.count')[0].innerHTML = scorex;
      }
      count++;
    }
    else {
      this.innerHTML = "0";
      if (winner()) {
        removeevent()
        flag = 1;
        scorez++;
        document.querySelectorAll('.count')[1].innerHTML = scorez;
        document.querySelector('.winner').innerHTML = "winner is 0";
      }
      count++;
    }
  }
  if (count===9&&!winner()){
    document.querySelector('.winner').innerHTML = "Draw";
    console.log("DRAW")
  }  
}




// play again function remove all the content from the boxes

document.querySelector('.btn').addEventListener("click", replay);
function replay() {
  play()
  for (let i = 0; i < 9; i++) {
    document.querySelectorAll('.inner')[i].innerHTML = "";
    document.querySelectorAll('.inner')[i].style.backgroundColor = "";
  }
  document.querySelector('.winner').innerHTML = "";
  count = 0;
}


// reset function will reset the score to 0


document.querySelector('.reset').addEventListener("click", function() {
  document.querySelectorAll('.count')[0].innerHTML = "0";
  document.querySelectorAll('.count')[1].innerHTML = "0";
  scorex = 0;
  scorez = 0;
})


if(scorex>scorez)
{
  document.querySelectorAll('.img')[0].style.display="block";
  document.querySelectorAll('.img')[1].style.display="none";
}
if(scorex<scorez)
{
  document.querySelectorAll('.img')[0].style.display="none";
  document.querySelectorAll('.img')[1].style.display="block";
}


const removeevent = ()=>{
  for(let i=0;i<document.querySelectorAll('.inner').length;i++){
       document.querySelectorAll('.inner')[i].removeEventListener("click",click);
  }
}

play()