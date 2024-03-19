function verifyWord() {
    let userInput = document.querySelector("#texto-esquerda");
    let userResult = document.querySelector("#texto-direita");

    if (userInput.value == "oi") {
        userResult.innerHTML += "deu certo!"
    } else {
        userResult.innerHTML = ""
    }
}