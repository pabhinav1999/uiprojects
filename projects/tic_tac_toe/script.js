const turnMusic = new Audio('./ting.mp3');
const gameOverMusic = new Audio('gameover.mp3');
const randMusic = new Audio('music.mp3');
let turn = 'X';
let boxTexts = Array.from(document.getElementsByClassName('box-info'));
const changeTurn = () => {
    return turn === 'X' ? '0' :'X'  ;
}

const checkWin = () => {
  const wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  let boxText = document.getElementsByClassName('box-info');
  
  wins.forEach((element)=>{
     if((boxText[element[0]].innerText && boxText[element[1]].innerText && boxText[element[2]].innerText)&&(boxText[element[1]].innerText === boxText[element[0]].innerText&& boxText[element[1]].innerText === boxText[element[0]].innerText )){
        document.querySelector('.turn').innerText = 'Player with turn '+ turn +'wins';
        gameOverMusic.play();
        setTimeout(()=>{
            reset();
         },10000);
        // reset();
        // console.log('game is finished');
        // reset();
       
     }

  })
}

const reset = () => {
   boxTexts.forEach((ele)=>{
        ele.innerText = '';
    })
}

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((element)=>{
    element.addEventListener('click',()=>{
        let boxText = element.querySelector('.box-info');
        if(boxText.innerText === ''){
             boxText.innerText = turn ;
             turnMusic.play();
             checkWin();             
             turn = changeTurn();
             document.querySelector('.turn').innerText = 'Player with turn '+ turn;
        }
    })
    
})
