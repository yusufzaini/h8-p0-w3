function balikString(kata) {
    var balik = ""

    for (var I = 0; i < kata.length; i++) {
        balik += kata[kata.length - 1 - i];
    }

    return balik;
}

console.log(balikString("Hello World!"));