var mat1 = [
    [1, 2],
    [3, 4]
];

var mat2 = [
    [1, 2],
    [3, 4]
];


function copy(arr) {
    var matcopy = [];

    for (var i = 0; i < arr.length; i++) {
        var elem = arr[i];
        var firstArr = [];

        for (var j = 0; j < elem.length; j++) {
            var newElem = arr[i][j];
            firstArr.push(newElem);
        }
        matcopy.push(firstArr);
    }
    return matcopy;

}
var a = copy(mat1);
// var b = copy(mat2);
console.log("copy of 'mat1' is = ", a);
// console.log("copy of 'mat2' is = ", b);



// row reverse //
function rowReverse(matrix) {

    // console.log("original matrix is = ", [...matrix]);

    for (i = 0; i < matrix.length / 2; i++) {
        var rowElem = matrix[i];
        var temp = rowElem;

        matrix[i] = matrix[matrix.length - 1 - i];
        matrix[matrix.length - 1 - i] = temp;
    }
    console.log("row reverse of matrix is = ", matrix);
}
rowReverse([...a]);


// column reverse //
function colnReverse(matrix) {

    // console.log("original matrix is = ", [...matrix]);

    for (var i = 0; i < matrix.length; i++) {
        var rowElem = matrix[i];
        for (var j = 0; j < rowElem.length / 2; j++) {
            var colnElem = rowElem[j];
            var temp = colnElem;

            // console.log(temp);

            rowElem[j] = rowElem[rowElem.length - 1 - j];
            rowElem[rowElem.length - 1 - j] = temp;
        }
    }
    console.log("column reverse of matrix is = ", matrix);
}
colnReverse(mat2);