/*
// first example
$('#button').click(function(){
	// alert('hellow');
	$('#button_feedback').html('Button has been clicked.');
	// $('#button_feedback').toggle(1000);
});
*/

// second example
$('input:button').click(function(){
	$('#button_feedback').html('Button has been clicked.');
});