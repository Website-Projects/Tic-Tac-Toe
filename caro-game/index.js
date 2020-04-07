
var squares= document.querySelectorAll('.square');
var playerTurn= true;
var winner=document.querySelector('.winner-hidden');
var collectionOfArray=[];
var collectionOfArrayVertical=[];
var collectionOfArrayDiagonal=[];


function gameStartHorizontal(){
  for(var i = 0; i< 765;i++){
     var  winArray=[];
       winArray[0]=i;
       winArray[1]=i+1;
       winArray[2]=i+2;
       winArray[3]=i+3;
       winArray[4]=i+4;
       collectionOfArray.push(winArray);
      
  }};

  function gameStartVertical(){
    for(var i = 0; i< 765;i++){
        var  winArray=[];
          winArray[0]=i;
          winArray[1]=i+24;
          winArray[2]=i+24*2;
          winArray[3]=i+24*3;
          winArray[4]=i+24*4;
          collectionOfArrayVertical.push(winArray);
          
  }};

   function gameStartDiagonal(num){
     for(var i = num ; i < num + 20;  i ++){
      var winArray=[];
      winArray[0]=i;
      winArray[1]=i+25;
      winArray[2]=i+25*2;
      winArray[3]=i+25*3;
      winArray[4]=i+25*4;
      collectionOfArrayDiagonal.push(winArray);
     }};

     function gameStartDiagonalReverse(num){
      for(var i = num ; i >= 4; i++){
       var winArray=[];
       winArray[0]=i;
       winArray[1]=i+23;
       winArray[2]=i+23*2;
       winArray[3]=i+23*3;
       winArray[4]=i+23*4;
       collectionOfArrayDiagonalReverse.push(winArray);
      }};


     function runDiagonal(){
       for(var i=0; i< 765; i=i+5){
         gameStartDiagonal(i);
        }
      };

     

  function winLogic(){
       for (var i= 0; i< 765; i++){
        if (squares[collectionOfArray[i][0]].textContent.includes('X')  && squares[collectionOfArray[i][1]].textContent.includes('X')  && squares[collectionOfArray[i][2]].textContent.includes('X')  && squares[collectionOfArray[i][3]].textContent.includes('X')  && squares[collectionOfArray[i][4]].textContent.includes('X')){
            winner.classList.add('winner-show');
      }
        else if (squares[collectionOfArray[i][0]].textContent.includes('O')  && squares[collectionOfArray[i][1]].textContent.includes('O')  && squares[collectionOfArray[i][2]].textContent.includes('O')  && squares[collectionOfArray[i][3]].textContent.includes('O')  && squares[collectionOfArray[i][4]].textContent.includes('O')) {
            winner.classList.add('winner-show');
          } else if (squares[collectionOfArrayVertical[i][0]].textContent.includes('X')  && squares[collectionOfArrayVertical[i][1]].textContent.includes('X')  && squares[collectionOfArrayVertical[i][2]].textContent.includes('X')  && squares[collectionOfArrayVertical[i][3]].textContent.includes('X')  && squares[collectionOfArrayVertical[i][4]].textContent.includes('X')){
            winner.classList.add('winner-show');
          } else if (squares[collectionOfArrayVertical[i][0]].textContent.includes('O')  && squares[collectionOfArrayVertical[i][1]].textContent.includes('O')  && squares[collectionOfArrayVertical[i][2]].textContent.includes('O')  && squares[collectionOfArrayVertical[i][3]].textContent.includes('O')  && squares[collectionOfArrayVertical[i][4]].textContent.includes('O')){
            winner.classList.add('winner-show');
           } else if (squares[collectionOfArrayDiagonal[i][0]].textContent.includes('O')  && squares[collectionOfArrayDiagonal[i][1]].textContent.includes('O')  && squares[collectionOfArrayDiagonal[i][2]].textContent.includes('O')  && squares[collectionOfArrayDiagonal[i][3]].textContent.includes('O')  && squares[collectionOfArrayDiagonal[i][4]].textContent.includes('O')){
            winner.classList.add('winner-show');
          } else if (squares[collectionOfArrayDiagonal[i][0]].textContent.includes('X')  && squares[collectionOfArrayDiagonal[i][1]].textContent.includes('X')  && squares[collectionOfArrayDiagonal[i][2]].textContent.includes('X')  && squares[collectionOfArrayDiagonal[i][3]].textContent.includes('X')  && squares[collectionOfArrayDiagonal[i][4]].textContent.includes('X')){
            winner.classList.add('winner-show');
          }
  }
}





function mark(){
    squares.forEach(obj=> obj.addEventListener('click', ()=>{
            if(obj.textContent.length===0 ){
                switch(playerTurn){
                    case(true):
                    obj.textContent='X'
                    obj.style.color='red'
                    playerTurn=!playerTurn
                    winLogic();
                    
                    break;
                    case(false):
                    obj.textContent='O'
                    obj.style.color='blue'
                    playerTurn=!playerTurn
                    winLogic();
                    
                   break;
                }}}))}
 


runDiagonal();
gameStartHorizontal();
gameStartVertical();
mark();
