if($('#instaPic')){
	var pic = Cookies.get('picture');

	$('#instaPic').html('<img style="height: 450px;" src="../images/' + pic + '" />');
}