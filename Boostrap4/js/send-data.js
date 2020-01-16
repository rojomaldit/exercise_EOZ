$(document).ready(function () {
  $("#ajaxSubmit").click(function (){
    $.ajax({
      url: 'http://localhost:3000/todo/',
      type: 'POST',
      data: {"description": $("#Add_TODO").val()},
      dataType: 'json'
    });
    $.ajax({
      url: 'http://localhost:3000/todo/',
      type: 'GET',
      dataType: 'json',
      success: function (response) {

        var length = response.length
        var id = response[length-1].id
        var e = response[length-1].description
        var element = document.getElementById("TODOs");

        element.insertAdjacentHTML(
          'afterbegin',
          '<button id="todo_block_btn" onclick="ajaxDelete('+ id +')" class="btn btn-outline-primary col-md-2">Delete</button>'
        );
        element.insertAdjacentHTML(
          "afterbegin", 
          '<div id="todo_block_des" class="col-4 col-md-8">' + e + '</div>'
        );
        element.insertAdjacentHTML(
          "afterbegin",
          '<div id="todo_block_spc" class="w-100 py-1"></div>'
        );
      }
    });
  });
})

//onclick="axajDelete(' + id + ')"

function ajaxDelete(id){
    console.log("asd")
    $.ajax({
      url: 'http://localhost:3000/todo/' + id + '/',
      type: 'DELETE',
      dataType: 'json',
      success: function (response) {
        console.log(response)
      }
    });
    var btn = document.getElementById("todo_block_btn");
    var div_des = document.getElementById("todo_block_des");
    var div_spc = document.getElementById("todo_block_spc");

    console.log(btn, div_des, div_spc)
    btn.remove()
    div_des.remove()
    div_spc.remove()

    
}