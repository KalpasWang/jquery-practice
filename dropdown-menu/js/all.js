$(document).ready(function() {
  $('.dropdown > a').click(function(event) {
    event.preventDefault();
    $('a .fas').toggleClass('active');
    $('.dropdown-menu').toggle();
  });

  $('body').on("click", function(event){
    var $trigger = $(".dropdown");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".dropdown-menu").hide();
        $('a .fas').removeClass('active');
    }            
  });
});