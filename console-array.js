var rows = 5;
var columns = 5;

var board = [];

for(var i = 0;i<rows;i++) {
    if(!board[i]) {
           board[i] = [];
    }
    for (var j = 0;j<columns;j++) {
        board[i][j]= "X";
    }

}
console.log(board);

