$(document).ready(function () {
  $("#ajaxSubmit").click(function post(){
    $.ajax({
      url: 'http://localhost:3000/todo/',
      type: 'POST',
      data: {"description": $("#Add_TODO").val()},
      dataType: 'json'
    })
    .then(
      $.ajax({
        url: 'http://localhost:3000/todo/',
        type: 'GET',
        dataType: 'json',
        success: function (response) {
          console.log(response)
        }
      })
      .then(function (response){
        var length = response.length
        var id = response[length-1].id
        var e = response[length-1].description
        var element = document.getElementById("TODOs");
    
        element.insertAdjacentHTML(
          'afterbegin',
          '<button id="btn_block'+id+'" onclick="ajaxDelete('+ id +')" class="btn btn-outline-primary col-md-2">Delete</button>'
        );
        element.insertAdjacentHTML(
          "afterbegin", 
          '<div id="des_block'+id+'" class="col-4 col-md-8">' + e + '</div>'
        );
        element.insertAdjacentHTML(
          "afterbegin",
          '<div id="spc_block'+id+'" class="w-100 py-1"></div>'
        );
      })
    )
  });
})

function ajaxDelete(id){
  $.ajax({
    url: 'http://localhost:3000/todo/' + id + '/',
    type: 'DELETE',
    dataType: 'json',
    success: function (response) {
      console.log(response)
    }
  });
  var btn = document.getElementById("btn_block"+id);
  var des = document.getElementById("des_block"+id);
  var spc = document.getElementById("spc_block"+id);

  btn.remove()
  des.remove()
  spc.remove()
}