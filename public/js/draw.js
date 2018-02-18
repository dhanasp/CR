let getColumns=function(number,rowNo){
  let cols='';
  for (var i = 1; i <= number; i++) {
    cols+=`<td id="R${rowNo}C${i}">R${rowNo}C${i}</td>`;
  }
  return cols;
}

let getColumnsAndRowsInHtml=function(rows,cols){
  rowsAndCols='';
  for (var i = 1; i <= rows; i++) {
    rowsAndCols+="<tr>"+getColumns(cols,i)+"</tr>";
  }
  return rowsAndCols;
}

let drawBoard=function(rows,cols){
  let board=document.getElementById('board');
  let table=document.createElement('table');
  table.border="1px";
  table.innerHTML=getColumnsAndRowsInHtml(rows,cols);
  board.appendChild(table);
}


let getOrbImg=function(orbColor){
  imgBasedOnColor={
    red:"img/greenOrb.png",
    green:"img/redOrb.png"
  };
  return imgBasedOnColor[orbColor];
}

let drawOrb=function(orbColor,column){
  let div=document.createElement("div");
  div.id="orb";
  let img=document.createElement('img');
  img.src=getOrbImg(orbColor);
  div.appendChild(img);
  column.appendChild(div);
}
