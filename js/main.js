const captions = {
	'01': 'I love hay bales. Took this snap on a drive through the countryside past some straw fields.',
	'02': 'The lake was so calm today. We had a great view of the snow on the mountains from here.',
	'03': 'I hiked to the top of the mountain and got this picture of the canyon and trees below.',
	'04': 'It was amazing to see an iceberg up close, it was so cold but didn’t snow today.',
	'05': 'The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.',
	'06': 'Fall is coming, I love when the leaves on the trees start to change color.',
	'07': 'I drove past this plantation yesterday, everything is so green!',
	'08': 'My summer vacation to the Oregon Coast. I love the sandy dunes!',
	'09': 'We enjoyed a quiet stroll down this countryside lane.',
	'10': 'Sunset at the coast! The sky turned a lovely shade of orange.',
	'11': 'I did a tour of a cave today and the view of the landscape below was breathtaking.',
	'12': 'I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.',
}

const thumbnails = document.querySelectorAll('.thumbnail')
const popup = document.querySelector('.pop-up')
const bigImage = document.querySelector('#big-img')
const imgCaption = document.querySelector('.caption')

thumbnails.forEach( thumb => thumb.addEventListener('click', openPopup))
popup.addEventListener('click', closePopup)

function openPopup(e) {
	const imgNumber = e.target.dataset.img

	bigImage.src = `images/photos/${imgNumber}.jpg`
	imgCaption.textContent = captions[imgNumber]
	popup.style.display = 'block'
}

function closePopup(e) {
	if (e.target.classList[0] === 'pop-up') {
		popup.style.display = 'none'
	}
}