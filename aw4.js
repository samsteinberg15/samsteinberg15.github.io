$(document).ready(function(){
    /*$('#hidepicture').on('click',function(){
      $('#jeff').fadeOut(1000);
    })
    $('#showpicture').on('click',function(){
      $('#jeff').fadeIn(3000);
    })
    $('#changeColor').on('click',function(){
      $('#thingsIlike').css('background-color', 'red').css('color','blue');
      $('#firstheading').html(' Welcome to our Class');
    })*/

    $.ajax({
      url: 'https://randomuser.me/api/?results=40',
      dataType: 'json',
      success: function(data) {
        console.log(data);
        $.each(data.results, function(key,person){
          console.log(person.name.title + ' ' + person.name.first + ' ' + person.name.last);
          /*$('#users').append('<div class= "col-2">'+ person.name.title + ' ' + person.name.first + ' ' + person.name.last + '</div><img src= "'+ person.picture.large + '" class="img-fluid rounded-circle">');*/
          $('#url').append('<img src= "'+ person.picture.large + '" class="img-fluid rounded-circle">' + person.name.title + ' ' + person.name.first + ' ' + person.name.last);



        })

  }
});
});
