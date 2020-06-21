function calc () {
    var first, second;
    first = document.getElementById("first").value;
    second = document.getElementById("second").value;
    if (first < second) {
        document.write("First is smaller than Second");
    } else if (first == second) {
        document.write("First is equal to Second");
    } else {
        document.write("First is bigger than Second");
    }
}
