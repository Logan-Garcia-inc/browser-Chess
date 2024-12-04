//function main() {
function spawnPiece(pos){
	return;
}
function updateDisplay() {
  for (var i = 0; i < 8; i++) {
    for (var o = 0; o < 8; o++) {
      if (board.data[i][o] == "") {
        document.getElementById(`${i};${o}`).style.backgroundImage = ""
      }
      if (board.data[i][o].team == "white") {
        switch (board.data[i][o].piece) {
          case "pawn":
            document.getElementById(`${i};${o}`).style.backgroundImage =
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_vyELWUX6w_q9obNY-e_lKr-WuRwMVkckQ&usqp=CAU')"
            break
          case "rook":
            document.getElementById(`${i};${o}`).style.backgroundImage =
              "url('https://thumbs.dreamstime.com/b/chess-rook-icon-pieces-vector-illustration-icons-outline-style-207034087.jpg')"
            break
          case "king":
            document.getElementById(`${i};${o}`).style.backgroundImage =
              "url('data:image/png;base64,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')"
            break;
            case "bishop":
            document.getElementById(`${i};${o}`).style.backgroundImage = "url('data:image/jpeg;base64,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')"
            break
            case "queen":
            document.getElementById(`${i};${o}`).style.backgroundImage ="url('https://cdn4.iconfinder.com/data/icons/chess-icons/200/chess_white_queen-512.png')"
            break
        }
      } else {
        switch (board.data[i][o].piece) {
          case "pawn":
            document.getElementById(`${i};${o}`).style.backgroundImage =
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfZBMV47wHfptXTziM7-WVkqqL8zjfP-KAA&usqp=CAU')"
            break
          case "rook":
            document.getElementById(`${i};${o}`).style.backgroundImage =
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXUST4eq5MM2cirS0-hGPwwXJMSrvbPHVyfg&usqp=CAU')"
            break
          case "bishop":
            document.getElementById(`${i};${o}`).style.backgroundImage =
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY4e-L6H_NdOCTxGpbzc6UyHmZl3a-3U_SYw&usqp=CAU')"
            break
          case "knight":
            document.getElementById(`${i};${o}`).style.backgroundImage =
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIZi8NMdXODn9P8yXyJyAlXpTx9ioEN35fCA&usqp=CAU')"
            break
          case "king":
            document.getElementById(`${i};${o}`).style.backgroundImage =
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURCYBIl2vMg2XA3dqx4xhN8OpN_tNWwBYaw&usqp=CAU')"
            break
            case "queen":
            document.getElementById(`${i};${o}`).style.backgroundImage ="url('data:image/png;base64,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')"
        }
      }
    }
  }
}

class Piece {
pawn(){
          let result = []
          let offset
          let y = this.pos[0]
          let x = this.pos[1]
          if (this.team == "white") {
            offset = 1
          } else {
            offset = -1
          }
          if (board.data[y + 1 * offset][x - 1]) {
            if (board.data[y + 1 * offset][x - 1].team != this.team) {
              result.push([y + 1 * offset, x - 1])
            }
          }
          if (board.data[y + 1 * offset][x + 1]) {
            if (board.data[y + 1 * offset][x + 1].team != this.team) {
              result.push([y + 1 * offset, x + 1])
            }
          }

          if (board.data[y + 1 * offset][x] == "") {
            result.push([y + 1 * offset, x])
          } else {
            return result
          }

          if (board.data[y + 2 * offset][x] == "" && this.firstTurn) {
            result.push([y + 2 * offset, x])
          }
          return result
        }
        rook(){
          let result = []
          let y = this.pos[0]
          let x = this.pos[1]
          let i = -1
          while (y + i >= 0 && y + i < 8 && board.data[y + i][x] == "") {
            result.push([y + i, x])
            i--
          }
          if (y+i>=0 && y+i<8){if (board.data[y + i][x]) {
            if (board.data[y + i][x].team != this.team) {
              result.push([y + i, x])
            }}
          }i=-1
          while (x + i >= 0 && x + i < 8 && board.data[y ][x+ i] == "") {
            result.push([y, x+ i])
            i--
          }
          if (x+i>=0 && x+i<8){if (board.data[y ][x+ i]) {
            if (board.data[y ][x+ i].team != this.team) {
              result.push([y, x+ i])
            }}
          }
          i = 1
           while (y + i >= 0 && y + i < 8 && board.data[y + i][x] == "") {
            result.push([y + i, x])
            i++
          }
          if (y+i>=0 && y+i<8){if (board.data[y + i][x]) {
            if (board.data[y + i][x].team != this.team) {
              result.push([y + i, x])
            }}
          }i=1
          while (x + i >= 0 && x + i < 8 && board.data[y ][x+ i] == "") {
            result.push([y, x+ i])
            i++
          }
          if (x+i>=0 && x+i<8){if (board.data[y ][x+ i]) {
            if (board.data[y ][x+ i].team != this.team) {
              result.push([y, x+ i])
            }}
          }
          
          return result
        }
        bishop(){
          let result = []
          let y = this.pos[0]
          let x = this.pos[1]
          let i = -1
          let o=-1
          while (y + i >= 0 && y + i < 8 &&  x+i>=0 && x+i<8 &&board.data[y + i][x+o] == "") {
            result.push([y + i, x+o])
            i--
            o--
          }
          if (y+i>=0 && y+i<8 && x+i>=0 && x+i<8){if (board.data[y + i][x+o]) {
            if (board.data[y + i][x+o].team != this.team) {
              result.push([y + i, x+o])
            }}
          }
          i=-1
          o=1
          while (x+o>=0 && x+o<8 && y+i>=0 && y+i<8 && board.data[y+i ][x+ o] == "") {
            result.push([y+i, x+ o])
            i--
            o++
          }
          if (y+i>=0 && y+i<8 && x+o>=0 && x+o<8 ){if (board.data[y +i][x+ o]) {
            if (board.data[y +i][x+ o].team != this.team) {
              result.push([y+i, x+ o])
            }}
          }
          i = 1
          o=1
           while (y + i >= 0 && y + i < 8 && x+o>=0 && x+o<8 && board.data[y + i][x+o] == "") {
            result.push([y + i, x+o])
            i++
            o++
          }
          if (y+i>=0 && y+i<8 && x+o>=0 && x+o<8){if (board.data[y + i][x+o]) {
            if (board.data[y + i][x+o].team != this.team) {
              result.push([y + i, x+o])
            }}
          }
          i=1
          o=-1
          while (x + o >= 0 && x + o < 8 && y+i>=0 && y+i<8 && board.data[y+i ][x+ o] == "") {
            result.push([y+i, x+ o])
            i++
            o--
          }
          if (y+i>=0 && y+i<8 && x+o>=0 && x+o<8){if (board.data[y +i][x+ o]) {
            if (board.data[y +i][x+ o].team != this.team) {
              result.push([y+i, x+ o])
            }}
          }
          
          return result
        }
        queen(){
        let result=this.rook()
        result+=this.bishop()
        return result
        }
  constructor(piece, team, pos = [NaN, NaN]) {
    this.team = team
    this.piece = piece
    this.firstTurn = true
    this.pos = pos
    this.turnPlayed = () => {
    this.firstTurn = false
  }
    switch (piece) {
      case "pawn":
        this.validTurns = this.pawn
        this.turnPlayed = () => {
    this.firstTurn = false
    let offset
    if (this.team=="white"){
    	offset=0
    } else{
     offset=7
    }
    if (this.pos[0]==7-offset){
   spawnPiece(this.pos);
    updateDisplay();
    }
  }
        break
      case "rook":
        this.validTurns =  this.rook;
        break
        case "bishop":
        this.validTurns=this.bishop
        break
        case "queen":
        this.validTurns=this.queen;
      default:
        break
    }
  }
  
}
class Board {
  turn = true
  constructor() {
    this.data = [
      [
        new Piece("rook", "white"),
        new Piece("knight", "white"),
        new Piece("bishop", "white"),
        new Piece("king", "white"),
        new Piece("queen", "white"),
        new Piece("bishop", "white"),
        new Piece("knight", "white"),
        new Piece("rook", "white"),
      ],
      [
        new Piece("pawn", "white"),
        new Piece("pawn", "white"),
        new Piece("pawn", "white"),
        new Piece("pawn", "white"),
        new Piece("pawn", "white"),
        new Piece("pawn", "white"),
        new Piece("pawn", "white"),
        new Piece("pawn", "white"),
      ],
      Array(8).fill(""),
      Array(8).fill(""),
      Array(8).fill(""),
      Array(8).fill(""),
      [
        new Piece("pawn", "black"),
        new Piece("pawn", "black"),
        new Piece("pawn", "black"),
        new Piece("pawn", "black"),
        new Piece("pawn", "black"),
        new Piece("pawn", "black"),
        new Piece("pawn", "black"),
        new Piece("pawn", "black"),
      ],
      [
        new Piece("rook", "black"),
        new Piece("knight", "black"),
        new Piece("bishop", "black"),
        new Piece("queen", "black"),
        new Piece("king", "black"),
        new Piece("bishop", "black"),
        new Piece("knight", "black"),
        new Piece("rook", "black"),
      ],
    ]
    for (let i = 0; i < this.data.length; i++) {
      for (let o = 0; o < this.data[i].length; o++) {
        if (this.data[i][o]) {
          this.data[i][o].pos = [i, o]
        }
      }
    }
  }
  move = (piece, pos) => {
    this.data[pos[0]][pos[1]] = piece
    this.data[piece.pos[0]][piece.pos[1]] = ""
    piece.pos = pos
    piece.turnPlayed()
    let result = ""
    /*logs the board*/ for (let i = 0; i < this.data.length; i++) {
      for (let o = 0; o < this.data[i].length; o++) {
        result += board.data[i][o] ? "1" : "0"
      }
      result += "\n"
    }
    console.log(result)
  }
}

var removeEverything = () => {
  var elements = document.body.querySelectorAll("*")
  for (var i = 0; i < elements.length; i++) {
    elements[0].remove()
  }
}

var selectedPiece = ""
function selectPiece(element) {
  var pos = element.id.split(";")
  pos[0] = Number(pos[0])
  pos[1] = Number(pos[1])
  var piece = board.data[pos[0]][pos[1]]
  if (selectedPiece) {
    if (selectedPiece == piece) {
      for (let i of selectedPiece.validTurns(pos)) {
        document.getElementById(`${i[0]};${i[1]}`).style.backgroundColor = ""
      }
      selectedPiece = ""
    } else {
      if (
        selectedPiece
          .validTurns()
          .some((r) => JSON.stringify(r) == JSON.stringify(pos))
      ) {
        for (let i of selectedPiece.validTurns(pos)) {
          document.getElementById(`${i[0]};${i[1]}`).style.backgroundColor = ""
        }
        board.move(selectedPiece, pos)
        selectedPiece = ""
      }
    }
  } else {
    for (let i of piece.validTurns(pos)) {
      console.log(i)
      document.getElementById(`${i[0]};${i[1]}`).style.backgroundColor =
        "yellow"
      selectedPiece = piece
    }
  }
  updateDisplay()
}

function createChessBoard() {
  let chessBox = document.createElement("div")
  chessBox.id = "chessBox"
  chessBox.style = `border-style:solid; border-width:1px; display: grid; grid-template-columns: repeat(${8},60px); grid-template-rows: repeat(${8},60px); width: fit-content; height: fit-content;`
  document.body.appendChild(chessBox)

  for (var i = 0; i < 8; i++) {
    for (var o = 0; o < 8; o++) {
      let box = document.createElement("div")
      box.addEventListener("click", (e) => {
        console.log("click")
        selectPiece(e.target)
      })
      box.style =
        "border-style: solid; border-width:1px; font-size:10px;font-weight: bold; background-size:contain;background-repeat:no-repeat;background-blend-mode: multiply;"
      box.id = `${i};${o}`
      box.textContent = `${i};${o}`
      chessBox.append(box)
    }
  }
}
removeEverything()

board = new Board()
board.data[3][3] = new Piece("bishop", "white", [3, 3])
createChessBoard()
updateDisplay()
//}
//main()
//knight rules: check if one axis is offest by 1, and that the other is offset by 2
//rook: check if only one,row or column, is changing
//pawn: check if the space ahead is open, or if there is enemy in the two corners
//bishop: check if both axis change by same number
//king: only change any value by 1 or -1
//queen: bishop + rook
