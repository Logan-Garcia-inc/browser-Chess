function main(){
var removeEverything = () => {
  var elements = document.body.querySelectorAll("*");
  for (var i = 0; i < elements.length; i++) {
    elements[0].remove();
  }
};
removeEverything();
function createChessBoard() {
  var chessBox = document.createElement("div");
  chessBox.id = "chessBox";
  chessBox.style = "border-style:solid; border-width:1px; display: grid; grid-template-columns: repeat(8,60px); grid-template-rows: repeat(8,60px); width: fit-content; height: fit-content;";

  for (var i = 0; i < 8; i++) {
    for (var o = 0; o < 8; o++) {
      var box = document.createElement("div");
      box.style = "border-style: solid; border-width:1px; font-size:10px;font-weight: bold; background-size:contain;";
      box.id = `${i}${o}`;
      box.textContent = `${i} ${o}`;
      chessBox.append(box);
    }
  }
  document.body.append(chessBox);
}

createChessBoard();
function update(){
	for(var i=0; i<8; i++){
  for(var o=0; o<8; o++){
  	switch(boardData[i][o]){
    case "whitePawn":
    document.getElementById(`${i}${o}`).style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_vyELWUX6w_q9obNY-e_lKr-WuRwMVkckQ&usqp=CAU')";
    break;
    case "whiteRook":
    document.getElementById(`${i}${o}`).style.backgroundImage="url('https://thumbs.dreamstime.com/b/chess-rook-icon-pieces-vector-illustration-icons-outline-style-207034087.jpg')";
    break;
    case "whiteKing":
    document.getElementById(`${i}${o}`).style.backgroundImage="url('data:image/png;base64,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')";
    break;
    case "blackPawn":
    	document.getElementById(`${i}${o}`).style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfZBMV47wHfptXTziM7-WVkqqL8zjfP-KAA&usqp=CAU')";
    break;
     case "blackRook":
    	document.getElementById(`${i}${o}`).style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXUST4eq5MM2cirS0-hGPwwXJMSrvbPHVyfg&usqp=CAU')";
    break;
    case "blackBishop":
    	document.getElementById(`${i}${o}`).style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY4e-L6H_NdOCTxGpbzc6UyHmZl3a-3U_SYw&usqp=CAU')";
    break;
     case "blackKnight":
    	document.getElementById(`${i}${o}`).style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIZi8NMdXODn9P8yXyJyAlXpTx9ioEN35fCA&usqp=CAU')";
    break;
    case "blackKing":
    	document.getElementById(`${i}${o}`).style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURCYBIl2vMg2XA3dqx4xhN8OpN_tNWwBYaw&usqp=CAU')";
    break;
    }
    }
    }
  
}
var boardData = [
  [
    "whiteRook",
    "whiteKnight",
    "whiteBishop",
    "whiteKing",
    "whiteQueen",
    "whiteBishop",
    "whiteKnight",
    "whiteRook"
  ],
  [
    "whitePawn",
  "whitePawn",
    "whitePawn",
    "whitePawn",
    "whitePawn",
    "whitePawn",
    "whitePawn",
    "whitePawn"
  ],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    
  ],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    
  ],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    
  ],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    
  ],
  [
    "blackPawn",
    "blackPawn",
    "blackPawn",
    "blackPawn",
    "blackPawn",
    "blackPawn",
    "blackPawn",
    "blackPawn"
  ],
  [
    "blackRook",
    "blackKnight",
    "blackBishop",
    "blackQueen",
    "blackKing",
    "blackBishop",
    "blackKnight",
    "blackRook"
  ]
];

update();
}
//knight rules: check if one axis is offest by 1, and that the other is offset by 2
//rook: check if only one,row or column, is changing
//pawn: check if the space ahead is open, or if there is enemy in the two corners
//bishop: check if both axis change by same number
//king: only change any value by 1 or -1
//queen: bishop + rook
