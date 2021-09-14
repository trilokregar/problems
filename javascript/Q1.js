function combinationsRecursive(str, data,
    last, index) {
    var length = str.length;

    for (var i = 0; i < length; i++) {

        data[index] = str[i];

        if (index == last) {

            // console.log("combi = ", data);
            var stringCombinations = data.join("");
            console.log("combinations = ", stringCombinations);

        } else {
            combinationsRecursive(str, data, last,
                index + 1);
        }
    }
}
// this function calls the recursive function //
function combinations(str) {
    var length = str.length;

    var data = [];

    console.log('input string is = ', str);

    // Now use recursive function to print all combinations //
    combinationsRecursive(str, data, length - 1, 0);
}
combinations("abc");