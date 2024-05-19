function RGBRealTime(Colour, outputID) {
    var color = document.getElementById(Colour).value;
    var r = parseInt(color.substring(1, 3), 16);
    var g = parseInt(color.substring(3, 5), 16);
    var b = parseInt(color.substring(5, 7), 16);
    document.getElementById(outputID).value = "rgb(" + r + ", " + g + ", " + b + ")";
}

function HexRealTime(Colour, outputID) {
    var color = document.getElementById(Colour).value;
    var resultRGB = color.match(/\d+/g); // Extract the RGB values
    var r = parseInt(resultRGB[0]).toString(16).padStart(2, '0');
    var g = parseInt(resultRGB[1]).toString(16).padStart(2, '0');
    var b = parseInt(resultRGB[2]).toString(16).padStart(2, '0');
    document.getElementById(outputID).value = "#" + r + g + b;
}


function combineColors() {
    // This is needed to render the colour.
    event.preventDefault();

    var color1 = document.getElementById("Colour_1").value;
    var color2 = document.getElementById("Colour_2").value;

    // Convert hex values to RGB
    var r1 = parseInt(color1.substring(1, 3), 16);
    var g1 = parseInt(color1.substring(3, 5), 16);
    var b1 = parseInt(color1.substring(5, 7), 16);

    var r2 = parseInt(color2.substring(1, 3), 16);
    var g2 = parseInt(color2.substring(3, 5), 16);
    var b2 = parseInt(color2.substring(5, 7), 16);

    // Calculate average RGB values
    var avgR = Math.round((r1 + r2) / 2);
    var avgG = Math.round((g1 + g2) / 2);
    var avgB = Math.round((b1 + b2) / 2);

    // Convert average RGB values back to hex
    var combinedColor = "#" + componentToHex(avgR) + componentToHex(avgG) + componentToHex(avgB);

    // Display combined color
    document.getElementById("id_Combine_Colour").style.backgroundColor = combinedColor;
    document.getElementById("Colour_mixed").value = combinedColor;
    document.getElementById("Colour_mixed_RGB").value = "rgb(" + avgR + ", " + avgG + ", " + avgB + ")";
}

// Helper function to convert RGB component to hex
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function showMixingColour(inputID, outputID) {
    document.getElementById(outputID).style.backgroundColor = document.getElementById(inputID).value;
}