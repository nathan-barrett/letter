$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var letterNameInput = $("input#letterName").val();
    $(".letterName").text(letterNameInput);
    
    $(".hidden").show();
    event.preventDefault();
  });
});
