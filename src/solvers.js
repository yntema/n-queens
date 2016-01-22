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
        board.togglePiece(rowIndex, i);
        board.hasAnyRooksConflicts() ? board.togglePiece(rowIndex, i) : rowIndex++;
      }
      rookPlacer(rowIndex);
    }
  };
  rookPlacer(0);
  return board.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  return n === 1 ? n : n * countNRooksSolutions(n - 1);
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n:n});
  var queenPlacer = function(rowIndex) {
    if (n === rowIndex) {
      return true;
    } else {
      for (var i = 0; i < n; i++) {
        board.togglePiece(rowIndex, i);
        if (board.hasAnyQueensConflicts()) {
          board.togglePiece(rowIndex, i);
        } else if (!queenPlacer(rowIndex + 1)) {
          board.togglePiece(rowIndex, i);
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


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCounter = 0;
  var board = new Board({n:n});
  var queenPlacer = function(rowIndex) {
    if (n === rowIndex) {
      return true;
    } else {
      for (var i = 0; i < n; i++) {
        board.togglePiece(rowIndex, i);
        if (board.hasAnyQueensConflicts()) {
          board.togglePiece(rowIndex, i);
        } else if (!queenPlacer(rowIndex + 1)) {
          board.togglePiece(rowIndex, i);
        } else {
          solutionCounter++;
          board.togglePiece(rowIndex, i);
        }
      }
    }
    return false;
  };
  queenPlacer(0);
  return n === 0 ? 1 : solutionCounter;
};