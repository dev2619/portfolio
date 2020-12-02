$(document).ready(() => {
	// para realizar scrool del menu a los elementos de la pagina
	var profile = $('#profile').offset().top;
	var projects = $('#projects').offset().top;
	var contact = $('#contact').offset().top;

	$('#btn-profile').on('click', function (e) {
		e.preventDefault();
		$('html,body').animate(
			{
				scrollTop: profile - 1,
			},
			600
		);
	});
	$('#btn-projects').on('click', (e) => {
		e.preventDefault();
		$('html,body').animate(
			{
				scrollTop: projects - 1,
			},
			600
		);
	});
	$('#btn-contact').on('click', (e) => {
		e.preventDefault();
		$('html,body').animate(
			{
				scrollTop: contact - 1,
			},
			600
		);
	});
});
