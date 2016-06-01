
$(document).ready(function() {

    $( "#accordion" ).accordion();

console.log('started');

});





/*

$(document).ready(function(){

  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

})




$(document).ready(function() {


function logMyData() {
  console.log("My data is: ", myData);
}

var myData;

$.get('http://api.icndb.com/jokes/random', {
  q: 'kick'
}).done(function(data) {
  console.log('done!');
  console.log(data);
}).fail(function(data) {
  console.log('failed!');
  console.log(data);
})
  myData = data;
  logMyData();
);


}

$.ajaxSetup({
  headers: {
    "Access-Control-Allow-Origin": true
  }
});
*/
