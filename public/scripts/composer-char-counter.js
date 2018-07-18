$(document).ready(function() {
  const maxLength = 140;
  $('textarea').on('input change paste keyup', function() {
    const counter = $(this).siblings('.counter');
    const length = $(this).val().length;
    const newlength = maxLength - length;
    const errorClass = 'over-limit';
    counter.text(newlength);
    if (newlength < 0) {
      counter.addClass(errorClass);
    } else {
      counter.removeClass(errorClass);
    }
  });
  console.log("DOM is ready");
});