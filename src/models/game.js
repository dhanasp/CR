const Game=function(rows,cols){
  this.playersMove=[];
  this.players=[new Player('red','Player1'),new Player('green','Player2')];
  this.board=[];
  this.rows=rows;
  this.cols=cols;
}
Game.prototype={
  getAllCellsInOneRow:function(rowNo){
    cells=[];
    for (var i = 1; i <=this.cols ; i++) {
      let cell=new Cell(rowNo,i);
      cell.getCriticalMass(this.rows,this.cols);
      cells.push(cell);
    }
    return cells;
  },

  getCellsInBoard:function(){
    for (var i = 1; i<=this.rows ; i++) {
      let allCellsInRow=this.getAllCellsInOneRow(i);
      this.board.push(allCellsInRow);
    }
  },

  decideTurn:function(){
    if (this.playersMove.length%2==0) {
      return this.players[0];
    }
    return this.players[1];
  },

  addPlayersMoves:function(cell,player){
    cell.noOfOrbs++;
    this.playersMove.push(cell);
    player.addMoves(cell);
  },

  getSelectedCellByPlayer:function(cellId){
    game.getCellsInBoard();
    console.log(cellId);
    return game.board[cellId['r']-1][cellId['c']-1];
  }

}
