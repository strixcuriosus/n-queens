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
      if (i === j) board.togglePiece(i, j);
    }
  }

  return board.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
  var matrix =  findNRooksSolution(n);

  var permutator = function (input) {
    var set =[];

    var permute = function (arr, data) {
      var cur, memo = data || [];

      for (var i = 0; i < arr.length; i++) {
        cur = arr.splice(i, 1)[0];
        if (arr.length === 0) {
          set.push(memo.concat([cur]));
        }
        permute(arr.slice(), memo.concat([cur]));
        arr.splice(i, 0, cur);
      }
      return set;
    };
    return permute(input);
  };
  return permutator(matrix).length;
};

  // var solutionCount = undefined; //fixme

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
  //   }
  //   if (pieceCount >= n) {
  //     results[JSON.stringify(board.rows())] = board.rows();
  //     return;
  //   // } else if (pieceCount > n) {
  //   //   return;
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
  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // return solutionCount;


//////////////////////////////////
/// buggy first attempt at n-rooks problem:

window.AllRooksSolutions = function (n) {
  var matrix =  findNRooksSolution(n);

  var permutator = function (input) {
    var set =[];

    var permute = function (arr, data) {
      var cur, memo = data || [];

      for (var i = 0; i < arr.length; i++) {
        cur = arr.splice(i, 1)[0];
        if (arr.length === 0) {
          set.push(memo.concat([cur]));
        }
        permute(arr.slice(), memo.concat([cur]));
        arr.splice(i, 0, cur);
      }
      return set;
    };
    return permute(input);
  };
  return permutator(matrix);
};





// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {



  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  var solutionSet =  AllRooksSolutions(n);

  var hasNoDiagConflict = function (matrix) {
    var flag = true;
    var coords = [];
    for (var i = 0; i < n; i++){
      for (var j = 0; j < n; j++) {
        if (matrix[i][j]) coords.push([i,j]);
      }
    }
    coords.forEach(function (p1, i) {
      coords.forEach(function (p2, j) {
        if (i !== j) {
          //var slope = p1[1] - p2[1] / p1[0] - p2[0];
          if (Math.abs(p1[1] - p2[1]) === Math.abs(p1[0] - p2[0])) {
            flag = false;
          }
        }

      });
    });
    return flag;
  };
  return solutionSet.filter(hasNoDiagConflict).length;
};
