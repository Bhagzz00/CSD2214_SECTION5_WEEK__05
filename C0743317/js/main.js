// Your code here!
function myFunction(a, b) {
    //var a = 5;
    //var b = 6;
    return a + b; //function returns the product of p1 and p2
}
function arrays() {
    var pens;
    pens = ["red", "blue", "orange", "blue", "green"];
    marker = pens;
    console.log(marker);
    console.log(marker[0]);

    for (i = 0; i < marker.length; i++) {
        alert(marker[i]);
    }
    alert("Length of array is:" + marker.length);
}

