


$(document).ready(function(){
  $('form#userInput').submit(function(event){
    event.preventDefault();
    var favColor = $('#favorite-color').val();
    var favSeason = $('#favorite-season').val();
    var favBook = $('#favorite-book').val();
    var favMovie = $('#favorite-movie').val();
    var favName = $('#favorite-name').val();
    var responseArray = [favColor, favSeason, favBook, favMovie, favName]
    var toBeListed = []
    toBeListed.push(responseArray[1], responseArray[0], responseArray[2]);
    $('ul#listerized').append('<li>' + toBeListed[0] + '</li>' + '<li>' + toBeListed[1] + '</li>' + '<li>' + toBeListed[2] + '</li>')
  })
})
