const Game=function(id){
  this.id=id;
  this.playersMove=[];
  this.players=[];
  this.board=[];
  this.rows=6;
  this.cols=9;
}
Game.prototype={
  addPlayer:function(playerName){
    let color=this.color;
    let player=new Player(color,playerName);
    this.players.push(player);
  }
  // getAllCellsInOneRow:function(rowNo){
  //   cells=[];
  //   for (var i = 1; i <=this.cols ; i++) {
  //     let cell=new Cell(rowNo,i);
  //     cell.getCriticalMass(this.rows,this.cols);
  //     cells.push(cell);
  //   }
  //   return cells;
  // },

  // getCellsInBoard:function(){
  //   for (var i = 1; i<=this.rows ; i++) {
  //     let allCellsInRow=this.getAllCellsInOneRow(i);
  //     this.board.push(allCellsInRow);
  //   }
  // },

  // decideTurn:function(){
  //   if (this.playersMove.length%2==0) {
  //     return this.players[0];
  //   }
  //   return this.players[1];
  // },

  // addPlayersMoves:function(cell,player){
  //   cell.noOfOrbs++;
  //   this.playersMove.push(cell);
  //   player.addMoves(cell);
  // },

  // getSelectedCellByPlayer:function(cellId){
  //   game.getCellsInBoard();
  //   console.log(cellId);
  //   return game.board[cellId['r']-1][cellId['c']-1];
  // }

}
