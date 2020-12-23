/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let col = [];
  let row = [];
  let boxes = [];
  for (let i = 0; i < 9; i++) {
    col[i] = [];
    row[i] = [];
    boxes[i] = [];
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const value = board[i][j];
      if (value != ".") {
        if (!row[i].includes(value)) {
          row[i].push(value);
        } else {
          return false;
        }
        if (!col[j].includes(value)) {
          col[j].push(value);
        } else {
          return false;
        }
        //box:
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (!boxes[boxIndex].includes(value)) {
          boxes[boxIndex].push(value);
        } else {
          return false;
        }
      }
    }
  }
  return true;
};
