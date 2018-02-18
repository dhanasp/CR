const Cell=function(rowNo,colNo){
  this.cellId={r:rowNo,c:colNo};
  this.criticalMass='';
  this.noOfOrbs=0;
}


Cell.prototype={
getCriticalMass:function(totalRows,totalCols){
  if (this.isCornerCell(totalRows,totalCols)) {
    this.criticalMass=2;
  }
  if (this.isCellAtTopAndBottom(totalRows,totalCols)) {
    this.criticalMass=3;
  }
  if (this.isCellAtLeftAndRight(totalRows,totalCols)) {
    this.criticalMass=3;
  }
  if (this.isCellInMiddle(totalRows,totalCols)) {
    this.criticalMass=4;
  }
},

isCornerCell:function(rows,cols){
  rowNoAtCorner=[1,rows];
  colNoAtCorner=[1,cols];
  return  rowNoAtCorner.includes(this.cellId.r)&&colNoAtCorner.includes(this.cellId.c);
},

isCellAtTopAndBottom:function(rows,cols){
  let rowNoAtTopAndBottom=[1,rows];
  let colNoAtTopAndBottom=[];
  for (var i = 2; i < cols; i++) {
    if(i<cols){
      colNoAtTopAndBottom.push(i)
    }
  }
    return rowNoAtTopAndBottom.includes(this.cellId.r)&&colNoAtTopAndBottom.includes(this.cellId.c);
},

isCellAtLeftAndRight:function(rows,cols){
  let colNoAtLeftAndRight=[1,cols];
  let rowNoAtLeftAndRight=[];
  for (var i = 2; i < rows; i++) {
    if(i<rows){
      rowNoAtLeftAndRight.push(i)
    }
  }
  return rowNoAtLeftAndRight.includes(this.cellId.r)&&colNoAtLeftAndRight.includes(this.cellId.c);
},
isCellInMiddle:function(rows,cols){
 return !(this.isCornerCell(rows,cols)||this.isCellAtTopAndBottom(rows,cols)||this.isCellAtLeftAndRight(rows,cols))
}


}
