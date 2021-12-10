const bingoLetters = ['B', 'I', 'N', 'G', 'O'];

const bingoChoices = [];

const USER = {
	playerOne: 'green',
};

const WINNING_COMBOS = [
	[0, 1, 2, 3, 4],
	[5, 6, 7, 8, 9],
	[10, 11, 12, 13, 14],
	[15, 16, 17, 18, 19],
	[20, 21, 22, 23, 24],
	[0, 6, 12, 18, 24],
	[4, 8, 12, 16, 20],
	[0, 5, 10, 15, 20],
	[1, 6, 11, 16, 21],
	[2, 7, 12, 17, 22],
	[3, 8, 13, 18, 23],
	[4, 9, 14, 19, 24],
];

let currentUser;
let winning;
let ticMarks;
let makeBoard;

const bingoCard = document.querySelector('#bingo-board');
const playAgainBtn = document.querySelector('button');
const currentValue = document.querySelector('h2');

bingoCard.addEventListener('click', handleClick);
playAgainBtn.addEventListener('click', init);

bingoLetters.forEach((letter) => {
	for (let i = 0; i < 75; i++) {
		if (i <= 15) {
			bingoChoices.push(`${letter}${i}`)
		} if (i <= 30) {
			bingoChoices.push(`${letter}${i}`)
		} if (i <= 45) {
			bingoChoices.push(`${letter}${i}`)
		} else if (i <= 60) {
			bingoChoices.push(`${letter}${i}`)
		} else (i <= 75) 
			bingoChoices.push(`${letter}${i}`)
		};
		// bingoChoices.push(`${letter}${i}`);
		// The letter B should be numbers 1 - 15, I should be numbers 16 - 30, N should be 31 - 45, G should be 46 - 60, O should be 61 - 75
});

function init() {
	currentUser = USER.playerOne;
	winning = false;
	makeBoard = new Array(25).fill(bingoLetters);
	ticMarks = new Array(25).fill(null);
	create();
};

init();

function handleClick(event) {
	const squareIndex = event.target.id;
	if (ticMarks[squareIndex]) return;
	if (winning) return;
	ticMarks[squareIndex] = currentUser;
	checkWinner();
	create();
};

function create(){
	for (let i = 0; i <ticMarks.length; i++){
		const square = document.getElementById(i);
		square.style.backgroundColor = ticMarks[i];
	};

};

function checkWinner() {
	for (let i = 0; i < WINNING_COMBOS.length; i++){
		const squareOne = ticMarks[WINNING_COMBOS[i][0]];
		const squareTwo = ticMarks[WINNING_COMBOS[i][1]];
		const squareThree = ticMarks[WINNING_COMBOS[i][2]]
		const squareFour = ticMarks[WINNING_COMBOS[i][3]];
		const squareFive = ticMarks[WINNING_COMBOS[i][4]];

		if (squareOne && squareOne === squareTwo && squareTwo === squareThree && squareThree === squareFour && squareFour === squareFive){
			winning = squareOne;
		};
	};
};
