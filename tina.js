const header = document.getElementById('header')
window.addEventListener('scroll', function () {
	if (window.scrollY > 0) {
		// if (!header.classList.includes('fixed'))
			header.classList.add('fixed');
	} else {
		header.classList.remove('fixed');
	}
});
