/*
  Aca intento comunicarme con el back end
*/
$(document).ready(function () {
  $("#ajaxSubmit").click(function (){
    alert("hola que hace")
    var url = 'http://localhost:3000/todo/';
    var data = `{
      "description":"t1_lala"
    }`;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-type", "application/json");

    xhr.send(data);
  });
})
