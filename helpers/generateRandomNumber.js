function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 1000000);
    const paddedNumber = randomNumber.toString().padStart(6, "0");

    return paddedNumber;
}

module.exports = generateRandomNumber;
