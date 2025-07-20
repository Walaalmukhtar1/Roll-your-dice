function roll() {
    const rollImages = document.getElementById("rollImages");
    const skipped = document.getElementById("skipped");
    rollImages.innerHTML = "";
    skipped.textContent = "";
    let rollCount = 0;
    let value;

    do {
        value = Math.floor(Math.random() * 6) + 1;
        rollImages.innerHTML += `<img src="Dice_images/${value}.png" alt="Dice ${value}">`;
        rollCount++;
    } while (value === 6 && rollCount < 3);

    if (rollCount === 3 && value === 6) {
        skipped.textContent = "Three 6s in a row, your turn is skipped!";
    }
}

