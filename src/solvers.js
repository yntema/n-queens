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
  var results = [];
  // Initialize count variable as 0
  var counter = 0;
  // Call recursive function which takes parameter rowIndex
  var rookPlacer = function(rowIndex) {
  // If base case (n is equal to count)
    if (n === counter) {
    // Return solution
      console.log(results);
      return results; //figure out what solution variable is
    } else {
    // Else trigger recursive case (count is less than n)
      // Loop through row
      for (var i = 0; i < n; i++) {
        // If hasAnyRooksConflicts is false
        if (!board.hasAnyRooksConflicts()) {
          // Place rook with togglePiece
          board.togglePiece(rowIndex, i);
          // Increment counter
          results.push(board.attributes[counter]);
          counter++;
          // Call recursive function with incremented rowIndex
          rookPlacer(rowIndex + 1);
        }
      }
    }
  };
  rookPlacer(0);
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
