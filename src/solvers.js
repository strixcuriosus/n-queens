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
  var solution;
  var board = new Board({'n':n});
  for (var i = 0; i < n; i++){
    for (var j = 0; j < n; j++) {
      board.togglePiece(i, j);
      if (board.hasAnyRowConflicts || board.hasAnyColConflicts){
        board.togglePiece(i,j);
      }
    }
  }

  return board.rows();


  // var results = {};

  // var countPieces = function(board) {
  //   var n = board.rows().length;
  //   var counter = 0;
  //   var matrix = board.rows();
  //   for (var i = 0; i < n; i++) {
  //     for (var j = 0 ; j < n; j++){
  //       counter += matrix[i][j];
  //     }
  //   }
  //   return counter;
  // };

  // var  addPiece = function (board) {
  //   var pieceCount = countPieces(board);
  //   console.log('piececount: ' + pieceCount);
  //   if (board.hasAnyRowConflicts() || board.hasAnyColConflicts()){
  //     return;
  //   } else if (pieceCount === n) {

  //     results[JSON.stringify(board.rows())] = board.rows();
  //     return;
  //   } else if (pieceCount > n) {
  //     return;
  //   }
  //   for (var i = 0; i < n; i++){
  //     for (var j = 0; j < n; j++){
  //       if (board.get(i)[j]  === 0) {
  //         var copy = board.rows().slice(0);
  //         copy[i][j] = 1;
  //         addPiece(new Board(copy));

  //       }
  //     }
  //   }
  // };

  // addPiece(new Board({'n': n}));
  // // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return results;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
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
