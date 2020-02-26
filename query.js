
var idx = 1;
function addCard(id){
  var tweet = $('<div class="card" style = "width: 18rem; height = auto;" id = ' + idx + id +'> <img src="./resources/img/bird.jpg" class="card-img-top" alt="Took from source in zelda.com" height = "200px" width = "300px"> <button type="button" class="btn btn-primary" onclick="deleteCard(' + "'" + idx + id + "'" + ')"> Delete Card <button> </div>');
  tweet.appendTo('#' + id);
  idx++;
}
function deleteCard(id){
  console.log(id);
  document.getElementById(id).remove();

}
