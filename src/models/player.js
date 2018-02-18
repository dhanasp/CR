const Player=function(orbColor,name){
  this.orbColor=orbColor;
  this.name=name;
  this.selectedCells=[];
}

Player.prototype={
  
  addSelectedCells:function(cell){
    this.selectedCells.push(cell);
  },
  addMoves:function(selectedCell){
    this.selectedCells.push(selectedCell)
  }

}
