const thumbnails = document.querySelectorAll('.thumbnail')
const popup = document.querySelector('.pop-up')
const bigImage = document.querySelector('#big-img')

thumbnails.forEach( thumb => thumb.addEventListener('click', openPopup))
popup.addEventListener('click', closePopup)

function openPopup(e) {
	const imgNumber = e.target.dataset.img

	bigImage.src = `images/photos/${imgNumber}.jpg`
	popup.style.display = 'block'
}

function closePopup(e) {
	if (e.target.classList[0] === 'pop-up') {
		popup.style.display = 'none'
	}
}