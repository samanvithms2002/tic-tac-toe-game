var info = document.getElementById('info');
var cells = document.querySelectorAll('.row > div');
var winstate = document.getElementById('winstate');
var resetbtn = document.getElementById('resetbtn');
var alpha = 'X';
var beta = 'O';
var click = 0;
var counter = 1;
/*this tells us about the clicking of the cells and interchanges X and O choice and tells us about which player's turn*/
for (let i = 0; i < cells.length; i++) {
	cells[i].addEventListener('click', function() {
		if (click == 0 && cells[i].innerHTML === '') {
			cells[i].innerHTML = 'X';
			click = 1;
			counter++;
			info.innerHTML = "It's Player2 Turn";
		} else if (click == 1 && cells[i].innerHTML === '') {
			cells[i].innerHTML = 'O';
			click = 0;
			info.textContent = "It's Player1 Turn";
			counter++;
		}
		if (CheckWinStatus(alpha) || CheckWinStatus(beta)) {
			setTimeout(reset, 2000);
		}
		if (CheckWinStatus(alpha) == 0 && CheckWinStatus(beta) == 0) {
			winstate.textContent = 'Match Is A Draw';
			info.textContent = '';
			setTimeout(reset, 2000);
		}
	});
}
/*this function checks the winning combinations and return us whether the playes has won or not*/
function CheckWinStatus(text) {
	let top1 = cells[0].innerHTML;
	let top2 = cells[1].innerHTML;
	let top3 = cells[2].innerHTML;
	let middle1 = cells[3].innerHTML;
	let middle2 = cells[4].innerHTML;
	let middle3 = cells[5].innerHTML;
	let bottom1 = cells[6].innerHTML;
	let bottom2 = cells[7].innerHTML;
	let bottom3 = cells[8].innerHTML;
	if (top1 == text && top2 == text && top3 == text) {
		winstate.textContent = text + ' Is The Winner';
		info.textContent = '';
		cells[0].classList.add('great');
		cells[1].classList.add('great');
		cells[2].classList.add('great');
		return 1;
	} else if (middle1 == text && middle2 == text && middle3 == text) {
		winstate.textContent = text + ' Is The Winner';
		info.textContent = '';
		cells[3].classList.add('great');
		cells[4].classList.add('great');
		cells[5].classList.add('great');
		return 1;
	} else if (bottom1 == text && bottom2 == text && bottom3 == text) {
		winstate.textContent = text + ' Is The Winner';
		info.textContent = '';
		cells[6].classList.add('great');
		cells[7].classList.add('great');
		cells[8].classList.add('great');
		return 1;
	} else if (top1 == text && middle1 == text && bottom1 == text) {
		winstate.textContent = text + ' Is The Winner';
		info.textContent = '';
		cells[0].classList.add('great');
		cells[3].classList.add('great');
		cells[6].classList.add('great');
		return 1;
	} else if (top2 == text && middle2 == text && bottom2 == text) {
		winstate.textContent = text + ' Is The Winner';
		info.textContent = '';
		cells[1].classList.add('great');
		cells[4].classList.add('great');
		cells[7].classList.add('great');
		return 1;
	} else if (top3 == text && middle3 == text && bottom3 == text) {
		winstate.textContent = text + ' Is The Winner';
		info.textContent = '';
		cells[2].classList.add('great');
		cells[5].classList.add('great');
		cells[8].classList.add('great');
		return 1;
	} else if (top1 == text && middle2 == text && bottom3 == text) {
		winstate.textContent = text + ' Is The Winner';
		info.textContent = '';
		cells[0].classList.add('great');
		cells[4].classList.add('great');
		cells[8].classList.add('great');
		return 1;
	} else if (top3 == text && middle2 == text && bottom1 == text) {
		winstate.textContent = text + ' Is The Winner';
		info.textContent = '';
		cells[2].classList.add('great');
		cells[4].classList.add('great');
		cells[6].classList.add('great');
		return 1;
	} else {
		if (counter == 9) {
			return 0;
		}
	}
}
/*this function resets the whole game after the game is over */
resetbtn.addEventListener('click', reset);
function reset() {
	for (var i = 0; i < 9; i++) {
		cells[i].textContent = '';
		info.textContent = "It's Player1 Turn";
		winstate.textContent = '';
		counter = 1;
		click = 0;
		cells[i].classList.add('back');
	}
}
