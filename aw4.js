$(document).ready(function(){
    $('#hidepicture').on('click',function(){
      $('#jeff').fadeOut(1000);
    })
    $('#showpicture').on('click',function(){
      $('#jeff').fadeIn(3000);
    })
    $('#changeColor').on('click',function(){
      $('#thingsIlike').css('background-color', 'red').css('color','blue');
      $('#firstheading').html(' Welcome to our Class');
    })
    $.ajax({
      url: 'https://randomuser.me/api/?results=20',
      dataType: 'json',
      success: function(data) {
        console.log(data);
        $.each(data.results, function(key,person) {
          console.log(person.name.title + ' ' + person.name.first + ' ' + person.name.last);
          let flag = "flag-icon flag-icon-" + (person.nat).toLowerCase()
          let individual = '<div class= "col-md-2">' +
          '<img src= "'+ person.picture.large + '" class="img-fluid rounded-circle">' + ' '  +
          "<div class='caption center-block'>" + person.name.first + ' ' + person.name.last + '</div>' + '<span class="'+ flag + '"></span>'
          if (person.gender == "male") {
            individual += "<section class=icons>" +
            "<i class='male fa fa-github'></i>" +
            "<i class='male fa fa-facebook'></i>" +
            "<i class='male fa fa-twitter'></i>" +
            "</section>"
          }
          else if (person.gender == "female") {
            individual += "<section class=icons>" +
            "<i class='female fa fa-github'></i>" +
            "<i class='female fa fa-facebook'></i>" +
            "<i class='female fa fa-twitter'></i>" +
            "</section>"
            }
            $('#users').append(individual);
        })
  }
});
});
