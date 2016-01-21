/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var board = new Board({n:n});
  var rookPlacer = function(rowIndex) {
    if (n === rowIndex) {
      return;
    } else {
      for (var i = 0; i < n; i++) {
        board.togglePiece(rowIndex, i);            // placing queen
        if (board.hasAnyRooksConflicts()) {        // checking if placed queen has conflicts
          board.togglePiece(rowIndex, i);          // removing queen if there is a conflict
          continue;                                // moving to 
        }
        rowIndex++;
      }
      rookPlacer(rowIndex);
    }
  };
  rookPlacer(0);
  return board.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  if(n === 1) {
    return n;
  } else {
    return n*countNRooksSolutions(n-1);
  }
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n:n});
  var queenCounter = 0;
  var queenPlacer = function(rowIndex) {
    if (n === rowIndex && n === queenCounter) {
      return true;
    } else {
      for (var i = 0; i < n; i++) {
        board.togglePiece(rowIndex, i);
        queenCounter++;
        // if (!board.hasAnyQueensConflicts() && n === rowIndex && n === queenCounter)
        if (board.hasAnyQueensConflicts()) {
          board.togglePiece(rowIndex, i);
          queenCounter--;
          continue;
        }
        if(!queenPlacer(rowIndex + 1)) {
          board.togglePiece(rowIndex, i);
          queenCounter--;
        } else {
          return board.rows();
        }
      }
    }
    return false;
  };
  queenPlacer(0);
  return board.rows();
};

// check if at last row n !== number of Q on board. Add queen counter
// 



// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
