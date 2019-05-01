//need to create solutionOfSudoku.txt file. also check line 12
draw_solution();

function draw_solution(): void{
    let xmlReq = new XMLHttpRequest();
    xmlReq.open("GET", "solutionOfSudoku.txt", true);

    xmlReq.onload = function(){
        if(xmlReq.status == 200){
            let solution: string = xmlReq.responseText;

            var sudoku2DArray: Array<number> = solution.split("\r\n").map(function(el){ return el.split(" ");});
            // console.log(sudoku2DArray);

            let sudokuPicture: string = getDrawn2dArray(sudoku2DArray);
            document.getElementById('sudoku_solution').innerHTML = sudokuPicture;

            let solutionResult = checkSolution(sudoku2DArray);

            if (solutionResult) {
                document.getElementById('result').innerHTML = "Solution is valid";
            } else {
                document.getElementById('result').innerHTML = "Solution is not valid";
            }
        }
    }

    xmlReq.onerror = function() {
        console.log("Error: Request cannot be completed.");
    }

    xmlReq.send();
}

function getDrawn2dArray (array2d): string {
    let sudokuPicture: string = "";
    for (let i = 0; i < 9; i++ ){
        if ( i % 3 == 0 && i !=0){
            sudokuPicture += "---------------------- <br>";
        }
        for (let j = 0; j < 9; j++ ){
            if ( j % 3 == 0 && j !=0){
                sudokuPicture += " | ";
            }
            sudokuPicture += array2d[i][j] + " ";
        }
        sudokuPicture += '<br>'
    }
    return sudokuPicture;
}

function checkSolution(sudoku2DArray): boolean {
    // check for correct numbers
    for (let i = 0; i < 9; i++ ){
        for (let j = 0; j < 9; j++ ){
            if (sudoku2DArray[i][j] < 1 || sudoku2DArray[i][j] > 9 ) {
                console.log(`Incorrect number. line ${i+1} `);
                return false;
            }
        }
    }
    console.log('Correct numbers - passed.');

    // check horisontal lines
    for (let i = 0; i < 9; i++ ){
        let rowArray: Array <number> = [];
        for (let j = 0; j < 9; j++ ){
            if (rowArray.includes(sudoku2DArray[i][j])){
                console.log(`horisontal line ${i+1} failed`);
                return false;
            } else {
                rowArray.push(sudoku2DArray[i][j]);
            }
        }
    }
    console.log('Hor lines - passed.');

    // check vertical lines
    for (let i = 0; i < 9; i++ ){
        let colArray: Array <number> = [];
        for (let j = 0; j < 9; j++ ){
            if (colArray.includes(sudoku2DArray[j][i])){
                console.log(`vertical line ${j+1} failed`);
                return false;
            } else {
                colArray.push(sudoku2DArray[j][i]);
            }
        }
    }
    console.log('Vertical lines - passed.');

    // create quadrants

    let quadArray: Array <number> = [];
    for (let l = 0; l < 9; l++) {
        let tempArr = new Array();
        quadArray.push(tempArr);
    }
    // console.log(quadArray);

    // check quadrants
    for (let i = 0; i < 9; i++ ){
        for (let j = 0; j < 9; j++ ){
            let arrayNumber: number = Math.floor(i/3)*3 + Math.floor(j/3);

            if (quadArray[arrayNumber].includes(sudoku2DArray[i][j])){
                console.log(`quadrant ${arrayNumber+1} failed. Line ${i+1} col ${j+1}`);
                return false;
            } else {
                quadArray[arrayNumber].push(sudoku2DArray[i][j]);
            }
        }
    }
    console.log('quadrants - passed.');

    for (let k = 0; k < 9; k++ ){
        console.log(quadArray[k]);
    }

    return true;
}
