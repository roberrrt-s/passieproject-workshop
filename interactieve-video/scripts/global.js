var video = document.querySelector('#video');

video.addEventListener('ended', onVideoEnded);

function onVideoEnded(e) {
	console.log('Video has ended');
	var body = document.querySelector('body');
	body.classList.add('has-visible-buttons');
}