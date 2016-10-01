$(function(){
	if($('#fileName')){
		var pic = Cookies.get('picture');

		$('#fileName').attr('href', '../images/' + pic);
		console.log(pic);
	}
})