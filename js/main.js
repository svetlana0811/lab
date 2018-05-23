$(document).ready(function() {
 
 
 $(document).delegate('.open', 'click', function(event){
            $(this).addClass('oppenned');
            event.stopPropagation();
        })
        $(document).delegate('body', 'click', function(event) {
            $('.open').removeClass('oppenned');
        })
        $(document).delegate('.cls', 'click', function(event){
            $('.open').removeClass('oppenned');
            event.stopPropagation();
        });

$('.ourSeminars').on('click', function(){
  $('.seminarDivs').addClass('gridDisplay');
  $('.seminarDivs').toggle('show');
})
$('.ourLibrary').on('click', function(){
  $('.libraryDivs').addClass('gridDisplay');
  $('.libraryDivs').toggle('show');
})
  
$('#lessonsClick').on('click', function(){
  $('.lessons').show();
  $('.contactUs').hide();
  $('.generalLanding').hide();
  
})
$('.icon').on('click', function(){
  $('.generalLanding').show();
  $('.lessons').hide();
  $('.contactUs').hide();
})

$('#contactUsClick').on('click', function(){
  $('.contactUs').show();
  $('.lessons').hide();
  $('.generalLanding').hide();
})
function validateEmail($email) {
      var emailReg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return emailReg.test( $email );
    }
    function validatePhone($phone) {
            var filter = /^(\+\d{1,3}[- ]?)?\d{10}$/;
      return filter.test( $phone );
    }

$('#registrationForme').submit(function(){
  if($('#nameInput').val() == '' ){
    $('#nameInput').css({"border":"1px solid red"});
    return false;
  }
  else if($('#age').val() == ''){
    $('#age').css({"border":"1px solid red"});
    return false;
  }
  else if($('#phone').val() == '' || validatePhone($('#phone').val()) == false){
    $('#phone').css({"border":"1px solid red"});
    return false;
  }
  else if($('#mail').val() == '' || validateEmail($('#mail').val()) == false){
    $('#mail').css({"border":"1px solid red"});
    return false;
  }
  else{
    return true;
  }
})

function keyUp(a){
    a.keyup(function(){
        a.css({"border":"1px solid"});
    })
}
keyUp($('#nameInput'));
keyUp($('#age'));
keyUp($('#phone'));
keyUp($('#mail'));


$('#contactInputsForm').submit(function(){
  if($('#fromWho').val() == '' ){
    $('#fromWho').css({"border":"1px solid red"});
    return false;
  }
  else if($('#titleForMessage').val() == ''){
    $('#titleForMessage').css({"border":"1px solid red"});
    return false;
  }
  else if($('#contactInform').val() == ''){
    $('#contactInform').css({"border":"1px solid red"});
    return false;
  }
  else if($('#textareaMessage').val() == ''){
    $('#textareaMessage').css({"border":"1px solid red"});
    return false;
  }
  else{
    return true;
  }
})
keyUp($('#fromWho'));
keyUp($('#titleForMessage'));
keyUp($('#contactInform'));
keyUp($('#textareaMessage'));

function f(a,b){
  a.hide();
    b.click(function(){
        a.toggle('show');
    });
}

    f($("#div1"),$("#togle1"));
    f($("#div2"),$("#togle2"))
    f($("#div3"),$("#togle3"))

    $('form').on('submit'  , function () {
    

      if($('#name').val() == ''){
        $('#name').css({"border-color": "red"});
        return false;
      }
      if($('#surname').val() == ''){
        $('#surname').css({"border-color": "red"});
        return false;
      }
      if($('#email').val() == ''){
        $('#email').css({"border-color": "red"});
        return false;
      }
      
      else{
        return true;
      }
    
})

    $('#name').keyup(function(){
        $('#name').css({"border":"none"});
      })
  $('#surname').keyup(function(){
        $('#surname').css({"border":"none"});
      })
  $('#email').keyup(function(){
        $('#email').css({"border":"none"});
      })

 // owl carousel start
  var owl = $('.owl-carousel');
              owl.owlCarousel({
        animateOut: 'fadeOut',
                items: 1,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 2000,
                autoplayHoverPause: true
              });
// owl carousel end
});

