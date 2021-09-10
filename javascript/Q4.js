document.getElementById('file').onchange = function() {
    var arrayOfIps = [];
    var first8bitsOfIpv4InBinary = [];

    var file = this.files[0];
    var reader = new FileReader();

    reader.onload = function(progressEvent) {
        // Entire file
        // console.log(this.result);

        // By lines
        var lines = this.result.split('\n');
        for (var line = 0; line < lines.length; line++) {
            var ipAdresses = lines[line];
            // console.log(ipAdresses);
            arrayOfIps.push(ipAdresses);
        }
        console.log("array of different IPs is = ", arrayOfIps);

        var jointString = arrayOfIps.join(".");
        console.log("string of all IPs together = ", jointString);

        var splittedIPs = jointString.split(".");
        console.log("all splitted ips = ", splittedIPs);

        for (var i = 0; i < splittedIPs.length; i += 4) {
            var requiredIPs = splittedIPs[i];
            console.log("req ips = ", requiredIPs);
            first8bitsOfIpv4InBinary.push(requiredIPs);
        }
        console.log("needed ips for classification = ", first8bitsOfIpv4InBinary);

        // ////////// converting string array to integer array THEN binary to decimal ////////////
        var firstIpv4InDecimal = [];
        for (var i = 0; i < first8bitsOfIpv4InBinary.length; i++) {
            var binary = first8bitsOfIpv4InBinary[i];

            var digit = parseInt(binary, 2);
            firstIpv4InDecimal.push(digit);
        }
        console.log("ips in decimal is = ", firstIpv4InDecimal);

        ////////// classification after values ////////
        function classification(array) {
            var classA = 0;
            var classB = 0;
            var classC = 0;
            var classD = 0;
            var classE = 0;

            for (var i = 0; i < array.length; i++) {
                var Ipv4 = array[i];

                if (Ipv4 > 0 && Ipv4 <= 127) {
                    classA += 1;
                }
                if (Ipv4 > 127 && Ipv4 <= 191) {
                    classB += 1;
                }
                if (Ipv4 > 191 && Ipv4 <= 223) {
                    classC += 1;
                }
                if (Ipv4 > 223 && Ipv4 <= 239) {
                    classD += 1;
                }
                if (Ipv4 > 239 && Ipv4 <= 255) {
                    classE += 1;
                }
            }
            console.log("A = ", classA, "\n", "B = ", classB, "\n", "C = ", classC, "\n", "D = ", classD, "\n", "E = ", classE)
        }
        classification(firstIpv4InDecimal);
    };
    reader.readAsText(file);
};