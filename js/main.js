
// DOM elements
const thumbnails = document.querySelectorAll('.thumbnail');
const popup = document.querySelector('.pop-up');
const bigImage = document.querySelector('#big-img');
const imgCaption = document.querySelector('.caption');
const arrows = document.querySelectorAll('.arrow');
const searchBar = document.querySelector('#search-bar');

// Event listeners
thumbnails.forEach( thumb => thumb.addEventListener('click', openPopup));
arrows.forEach( arrow => arrow.addEventListener('click', () => changeImage(arrow)));
popup.addEventListener('click', closePopup);
searchBar.addEventListener('input', searchImage);
window.addEventListener('toucstart', handleTouchEvents);

// Global variables


// Functions
function openPopup(e) {
	// isPopOpen = true;
	const imgOrder = e.target.dataset.order;
	const imgFile = imgData[imgOrder].number;
	const imgText = imgData[imgOrder].text;
	const imgAlt = imgData[imgOrder].alt;

	bigImage.src = `images/photos/${imgFile}.jpg`;
	bigImage.dataset.order = imgOrder;
	bigImage.alt = imgAlt;
	imgCaption.textContent = imgText;
	popup.style.display = 'block';

	if (imgOrder == 0) {
		arrows[0].style.visibility = 'hidden';
	} else {
		arrows[0].style.visibility = 'visible';
	}

	if (imgOrder == '11') {
		arrows[1].style.visibility = 'hidden';
	} else {
		arrows[1].style.visibility = 'visible';
	}

	window.addEventListener('keydown', changeImage);
	window.addEventListener('keydown', closePopup);
}

function closePopup(e) {
	if (e.target.classList[0] === 'pop-up' || e.keyCode == 27) {
		popup.style.display = 'none';
		bigImage.alt = '';
		bigImage.src = '#';
		bigImage.dataset.order = '';
		// isPopOpen = false;
		window.removeEventListener('keydown', changeImage);
		window.removeEventListener('keydown', closePopup);
	}
}

function changeImage(input) {
	// input options
	const arrow = input.id;
	const key = input.keyCode;
	// img Data
	let imgOrder = bigImage.dataset.order;

	if (key == 39 || key == 37) {
		input.preventDefault();
	}
	if (arrow === 'forw' || key == 39 && imgOrder < 11) {
		imgOrder++;
	} else if (arrow === 'back' || key == 37 && imgOrder > 0) {
		imgOrder--;
	}

	// Updating img attributes
	bigImage.src = `images/photos/${imgData[imgOrder].number}.jpg`;
	bigImage.dataset.order = imgOrder;
	bigImage.alt = imgData[imgOrder].alt;
	imgCaption.textContent = imgData[imgOrder].text;

	// Arrow behavior
	if (imgOrder == 0) {
		arrows[0].style.visibility = 'hidden';
	} else {
		arrows[0].style.visibility = 'visible';
	}
	if (imgOrder == 11) {
		arrows[1].style.visibility = 'hidden';
	} else {
		arrows[1].style.visibility = 'visible';
	}
}

function searchImage(e) {
	const searchTerm = e.target.value;
	const thumbArray = [];
	thumbnails.forEach( thumb => thumbArray.push(thumb));

	if (searchTerm !== '') {
		const notFound = thumbArray.filter( thumb => !thumb.alt.toLowerCase().includes(searchTerm));
		notFound.map( thumb => thumb.classList.add('hidden'));

		const found = thumbArray.filter( thumb => thumb.alt.toLowerCase().includes(searchTerm));
		found.map( thumb => thumb.classList.remove('hidden'));

	} else {
		thumbArray.map( thumb => thumb.classList.remove('hidden'));
	}
}

function handleTouchEvents(e) {
	console.log(e.touches);
	lastTouch = new Date.now();
}