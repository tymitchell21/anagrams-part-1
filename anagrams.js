function findButton () {
    document.getElementById("ans").innerHTML = ''

    const typedText = document.getElementById("input").value;
    let alphaText = alphabetize(typedText)
    let any = true

    words.forEach (word => {
        let alphaWord = alphabetize(word)

        if (alphaText === alphaWord && typedText!=word) {
            display (`${word} `)
            any = false
        }
    })
    if (any) display(`${typedText} doesn't have any anagrams`)
}

// function that changes 
function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

function display (value) {
    // creates p element and adds x to it 
    var newElement = document.createElement("span");
    var newText = document.createTextNode(value);
    newElement.appendChild(newText);
    // adds p element to ans div
    var destination = document.getElementById("ans");
    destination.appendChild(newElement);
}

document.getElementById("findButton").addEventListener('click', findButton)