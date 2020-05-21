$(document).ready(function(){
  popup
  ("I am popup")
  console.log("Hello World");

  var x = '10';
  var y = '5';
  console.log(x+y);
  /*
  var firstName = 'Sam';
  var lastName = 'Steinberg';
  console.log('Hello ' + firstName + ' ' + lastName);
  firstName = 'Tom';
  console.log('Hello ' + firstName);
  var is_an_excellent_teacher = true
  if(is_an_excellent_teacher == true){
    var firstName = 'Sam';
  }else{
    var firstName = 'Tom';
  }
  console.log('Hello ' + firstName + ' ' + lastName + ' you are an excellent teacher');*/
  /*var foods = ['pizza','pasta','chocolate','apples','grapes'];
  console.log(foods.length);
  console.log(foods[0]);
  for(var i = 0; i < foods.length; i = i + 1){
    console.log(foods[i]);
    $('#thingsIlike').append('<li>' + foods[i] + '</li>');
  }

  /*$.each(foods,function(key,value){
    console.log(key + ' : ' + value);
  })

  /* $('#jeff').mouseleave(function(){
    console.log('mouse has left Jeff McNeil');
    $(this).show();
  })*/
  /*  $('#hidepicture').on('click',function(){
      $('#jeff').fadeOut(1000);
    })
    $('#showpicture').on('click',function(){
      $('#jeff').fadeIn(3000);
    })
    $('#changeColor').on('click',function(){
      $('#thingsIlike').css('background-color', 'red').css('color','blue');
      $('#firstheading').html(' Welcome to our Class');
    })*

    $.ajax({
      url: 'https://randomuser.me/api/?results=50',
      dataType: 'json',
      success: function(data) {
        console.log(data);
        $.each(data.results, function(key,person){
          console.log(person.name.title + ' ' + person.name.first + ' ' + person.name.last);
          $('#users').append('<div class= "col-md-2">'+ person.name.title + ' ' + person.name.first + ' ' + person.name.last +'</div>');
        })*/
  }
});
});
