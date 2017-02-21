$(function(){
    var age = parseInt(prompt("Enter your age"));
    if (age < 18){
      $('.under18').show();
    } else {
      $('.over18').show();
    }
});
