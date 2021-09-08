function divisible(start, end) {
    var div3or5 = [];
    var div3and5 = [];
    var div3 = [];
    var div5 = [];

    for (var i = start; i <= end; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            // push to the array//
            div3or5.push(i);
        }
        if (i % 3 == 0 && i % 5 == 0) {
            div3and5.push(i);
        }
        if (i % 3 == 0) {
            div3.push(i);
        }
        if (i % 5 == 0) {
            div5.push(i);
        }
    }
    console.log(div3or5, "\n", div3and5, "\n", div3, "\n", div5);
}
divisible(1, 10);
divisible(3, 25);