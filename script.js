const bingoLetters = ['B', 'I', 'N', 'G', 'O'];
const bingoChoices = [];
const USER = {
	playerOne: 'green'
};
const WINNING_COMBOS = [[0,1,2,3,4], [5,6,7,8,9], [10,11,12,13,14], [15,16,17,18,19], [20,21,22,23,24], [0,6,12,18,24], [4,8,12,16,20], [0,5,10,15,20], [1,6,11,16,21], [2,7,12,17,22], [3,8,13,18,23], [4,9,14,19,24]];




bingoLetters.forEach((letter) => {
	for (let i = 0; i < 76; i++) {
		bingoChoices.push(`${letter}${i}`);
		// The letter B should be numbers 1 - 15, I should be numbers 16 - 30, N should be 31 - 45, G should be 46 - 60, O should be 61 - 75
	}
});
