const bingoLetters = ['B', 'I', 'N', 'G', 'O'];
const bingoChoices = [];

bingoLetters.forEach((letter) => {
	for (let i = 0; i < 76; i++) {
		bingoChoices.push(`${letter}${i}`);
		// The letter B should be numbers 1 - 15, I should be numbers 16 - 30, N should be 31 - 45, G should be 46 - 60, O should be 61 - 75
	}
});
