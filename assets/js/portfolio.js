const toggleButton = $('.toggle-button');
const	navbarLinks = $('.navLinks');


toggleButton.addEventListener('click', function() {
	navbarLinks.classList.toggle('active');
});

// $(".toggle-button").click(function(){
// 	$(".navLinks").toggleClass("active");
//   });

