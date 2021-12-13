const bingoChoices = [];

const USER = {
	playerOne: 'rgba(0, 128, 0, 0.2',
};

let currentUser;
let winning;
let makeBoard;
let board;

const bingoCard = document.querySelector('#bingo-board');
const playAgainBtn = document.querySelector('button');
const currentValue = document.querySelector('h2');
const choiceBtn = document.querySelector('.choice-btn');
const choicesList = document.querySelector('.choices-list');

playAgainBtn.addEventListener('click', render);

const generateRandomNum = () => Math.ceil(Math.random() * 75);

function handleClick(event) {
	const value = event.target;
	// console.log(value.innerText);
	if (value.getAttribute('data-square')) {
		// check if this number is inside of the bingoChoices array
		if (bingoChoices.includes(Number(value.innerText))) {
			// if so add the class picked
			value.classList.add('picked');
			// update the data attribute
			value.setAttribute('data-square', 'picked');
			// if already picked do nothing
			// find the square in the array and updated it to being picked
		}
	}
	checkWinner(value);
}

function createGameBoard() {
	let board = [];
	let usedNum = [];
	for (let i = 0; i < 5; i++) {
		let arr = [];
		let counter = 0;
		while (counter < 5) {
			let randomNum = generateRandomNum();
			if (!usedNum.includes(randomNum)) {
				usedNum.push(randomNum);
				arr.push([randomNum, 0]);
				counter++;
			}
		}
		board.push(arr);
	}
	board[2][2] = 'FREE';
	return board;
}

function render() {
	const removeUl = document.querySelector('.bingo-wrapper');
	if (removeUl) bingoCard.removeChild(removeUl);
	board = createGameBoard();
	const ul = document.createElement('ul');
	ul.classList.add('bingo-wrapper');
	if (board.length > 0) {
		board.forEach((row, index) => {
			// console.log(row, index, 'board');
			const li = document.createElement('li');
			row.forEach((square) => {
				// console.log(square, 'square');
				const div = document.createElement('div');
				div.innerText = square[0];
				div.classList.add('square', 'not-picked');
				div.setAttribute('data-square', 'not-picked');
				li.append(div);
			});
			ul.append(li);
			bingoCard.append(ul);
		});
	}
}

const a = bingoCard.length; // user board
const b = choicesList.length; // bingo list

function compareArray(filterList, items) {
	let filtered = items.filter(function (e) {
		return this.includes(e);
	}, filterList);
	return filtered.length === 5;
}

function checkWinner(value) {
	let diagnol1 = [];
	let diagnol2 = [];
	let counter = 4;
	for (let i = 0; i < board.length; i++) {
		diagnol1.push(board[i][i][0]);
		diagnol2.push(board[i][counter][0]);
		if (i === 4) {
			return 'what you want';
		}
	}
	if (
		compareArray(diagnol1, bingoChoices) ||
		compareArray(diagnol2, bingoChoices)
	) {
		return true;
	}
}

function addChoice() {
	let num;
	let add = true;
	while (add && bingoChoices.length < 75) {
		num = generateRandomNum();
		if (!bingoChoices.includes(num)) {
			bingoChoices.push(num);
			const li = document.createElement('li');
			li.textContent = num;
			choicesList.append(li);
			add = false;
		}
	}
}

function init() {
	currentUser = USER.playerOne;
	winning = false;
	render();
}
init();
bingoCard.addEventListener('click', handleClick);
choiceBtn.addEventListener('click', addChoice);
