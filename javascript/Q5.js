function distanceFromDirections(str) {
    var totalDistance = 0;
    var directionsWithValue = {
        N: 1,
        E: 1,
        W: 1,
        S: 1
    }

    for (var i = 0; i < str.length; i++) {
        var elem = str[i];
        if (elem === "N" || elem === "E" || elem === "W" || elem === "S") {

            totalDistance += directionsWithValue[elem];
        }
    }
    console.log("Total Distance = ", totalDistance);
}
distanceFromDirections("NNNNEEENE");
distanceFromDirections("NEWS");