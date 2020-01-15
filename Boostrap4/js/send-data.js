/*
  Aca intento comunicarme con el back end
*/
$(document).ready(function () {
  $("#ajaxSubmit").click(function (){
    alert("hola que hace")
    $.ajax({
      // dataType: "jsonp",
      data: '{ "description":"John" }',
      type: 'POST',
      jsonpCallback: 'callback', // this is not relevant to the POST anymore
      success: function (data) {
        var ret = jQuery.parseJSON(data);
        $('#lblResponse').html(ret.msg);
        console.log('Success: ')
      },
      error: function (xhr, status, error) {
        console.log('Error: ' + error.message);
        $('#lblResponse').html('Error connecting to the server.');
      },
    });
    var url = 'http://localhost:3000/todo/',
    var data = {"description":"John"};
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-type", data);

    xhr.send(params);
  });
})
