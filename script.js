const bingoLetters = ['B', 'I', 'N', 'G', 'O'];
const bingoChoices = [];

bingoLetters.forEach((letter) => {
	for (let i = 0; i < 100; i++) {
		bingoChoices.push(`${letter}${i}`);
	}
});
