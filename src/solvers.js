/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

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
      var current, memo = data || [];

      for (var i = 0; i < arr.length; i++) {
        current = arr.splice(i, 1)[0];
        if (arr.length === 0) {
          set.push(memo.concat([current]));
        }
        permute(arr.slice(), memo.concat([current]));
        arr.splice(i, 0, current);
      }
      return set;
    };
    return permute(input);
  };
  return permutator(matrix).length;
};

window.getAllRooksSolutions = function (n) {
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

window.findNQueensSolution = function(n) {
  if (n === 0) {
    return [];
  } else if(n === 1) {
    return [1];
  } else if (n === 2 || n === 3){
    var ans = new Board({'n':n});
    return ans.rows();
  } else {
    var possibleSolutionSet =  getAllRooksSolutions(n);
    return _.reduce(possibleSolutionSet, function(memo, matrix){
      if( memo === 0 ){
        var currentBoard = new Board(matrix);
        if (! currentBoard.hasAnyQueensConflicts() ){
          return matrix;
        } else {
          return 0;
        }
      } else {
        return memo;
      }
    }, 0);
  }
};

window.countNQueensSolutions = function(n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  var solutionSet =  getAllRooksSolutions(n);

  var hasNoDiagConflict = function (matrix) {
    var coords = [];
    for (var i = 0; i < n; i++){
      for (var j = 0; j < n; j++) {
        if (matrix[i][j]) coords.push([i,j]);
      }
    }
    for (var k = 0; k < coords.length; k++){
      for (var l = 0; l < coords.length; l++){
        if (k !== l) {
          //var slope = p1[1] - p2[1] / p1[0] - p2[0];
          if (Math.abs(coords[k][1] - coords[l][1]) === Math.abs(coords[k][0] - coords[l][0])) {
            return false;
          }
        }
      }
    }
    return true;
  };
  return solutionSet.filter(hasNoDiagConflict).length;
};
