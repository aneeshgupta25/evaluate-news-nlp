function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou",
        "Aneesh"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, BUDDY!")
    }
}

export { checkForName }
