$(document).ready(function() {
  // --- our code goes here ---
  let maxLength = 140;
$('textarea').on('change keyup paste', function() {
  let length = $(this).val().length;
  let newlength = maxLength - length;
  if(newlength < 0){
    $('#chars').text(newlength).css('color', 'red');
  } else {
  $('#chars').text(newlength);
}
});
  console.log("DOM is ready");
});

