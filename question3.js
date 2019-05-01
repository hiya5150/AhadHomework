var Sudoku = /** @class */ (function () {
    function Sudoku(matrix) {
        this.matrix = matrix;
    }
    // Return the value at the specified (row, column)
    Sudoku.prototype.markAt = function (row, col) {
        return this.matrix[row][col];
    };
    // Display the contents of the board
    Sudoku.prototype.print = function () {
        for (var row = 0; row < 9; ++row) {
            var rowString = "";
            for (var col = 0; col < 9; ++col) {
                var mark = this.markAt(row, col);
                if (1 <= mark && mark <= 9) {
                    rowString = rowString + mark;
                }
                else {
                    rowString = rowString + ".";
                }
            }
        }
        document.write(rowString);
    };
    return Sudoku;
}());
