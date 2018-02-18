
let getPlayer=function(){
  return game.decideTurn();
}

let startGame=function(){
  drawBoard(6,9);
  game=new Game(6,9);
  window.onclick=loadGame;
}

let extractRowAndColNo=function(rowAndColNo){
  let rowNo=rowAndColNo[1];
  let colNo=rowAndColNo[3];
  extractedRowAndColNo={r:+rowNo,c:+colNo};
  return extractedRowAndColNo;
}

let getOrbInSelectedCell=function(orbColor,rowNo,colNo){
  let table=document.getElementsByTagName('table');
  column=table[0].children[0].children[rowNo-1].children[colNo-1];
  drawOrb(orbColor,column);
}

let getCellId=function(player){
  if(event.target) {
    let lastClickedCell=player.selectedCells[player.selectedCells.length-1];
    return "R"+lastClickedCell.cellId.r+"C"+lastClickedCell.cellId.c;
  }else{
    window.onclick=null;
  }
}

let loadGame=function(){
  let currentPlayer=getPlayer();
  let cellIdInHtml=event.target.innerText || getCellId(currentPlayer) ;
  let seperatedRowAndColNo=extractRowAndColNo(cellIdInHtml);
  selectedCell=game.getSelectedCellByPlayer(seperatedRowAndColNo);
  game.addPlayersMoves(selectedCell,currentPlayer);
  getOrbInSelectedCell(currentPlayer.orbColor,selectedCell.cellId.r,selectedCell.cellId.c);
}


window.onload=startGame;
