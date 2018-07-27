
const thumbnails = document.querySelectorAll('.thumbnail');
const popup = document.querySelector('.pop-up');
const bigImage = document.querySelector('#big-img');
const imgCaption = document.querySelector('.caption');
const arrows = document.querySelectorAll('.arrow');
const searchBar = document.querySelector('#search-bar');

thumbnails.forEach( thumb => thumb.addEventListener('click', openPopup));
arrows.forEach( arrow => arrow.addEventListener('click', () => changeImage(arrow)));
popup.addEventListener('click', closePopup);
searchBar.addEventListener('input', searchImage);

// let isPopOpen = false;

function openPopup(e) {
	// isPopOpen = true;
	const imgNumber = e.target.dataset.img;

	bigImage.src = `images/photos/${imgNumber}.jpg`;
	bigImage.dataset.img = imgNumber;
	bigImage.alt = e.target.alt;
	imgCaption.textContent = imageCaptions[imgNumber];
	popup.style.display = 'block';

	if (imgNumber == '01') {
		arrows[0].style.visibility = 'hidden';
	} else {
		arrows[0].style.visibility = 'visible';
	}

	if (imgNumber == '12') {
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
		bigImage.dataset.img = '';
		// isPopOpen = false;
		window.removeEventListener('keydown', changeImage);
		window.removeEventListener('keydown', closePopup);
	}
}

function changeImage(button) {
	button.preventDefault();
	const arrow = button.id;
	const key = button.keyCode;
	let image = +bigImage.dataset.img;

	if (arrow === 'forw' || key == 39 && image < 12) {
		image++;
	} else if (arrow === 'back' || key == 37 && image > 1) {
		image--;
	}

	let newImage = image < 10 ? `0${image}` : image;
	bigImage.src = `images/photos/${newImage}.jpg`;
	bigImage.dataset.img = newImage;
	const imageData = document.querySelector(`img[data-img="${newImage}"]`);
	bigImage.alt = imageData.alt;
	imgCaption.textContent = imageCaptions[newImage];

	if (newImage == '01') {
		arrows[0].style.visibility = 'hidden';
	} else {
		arrows[0].style.visibility = 'visible';
	}

	if (newImage == '12') {
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