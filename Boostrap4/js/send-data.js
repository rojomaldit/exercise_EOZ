$(document).ready(function () {
  $("#ajaxSubmit").click(function (){
      $.ajax({
        url: 'http://localhost:3000/todo/',
        type: 'POST',
        data: {"description": $("#Add_TODO").val()},
        dataType: 'json',
    });
  });

  $("#ajaxSubmit").click(function (){
    $.ajax({
      url: 'http://localhost:3000/todo/',
      type: 'GET',
      dataType: 'json',
      success: function (response) {

        length = response.length
        id = response[length-1].id
        e = response[length-1].description

        var h = document.getElementById("TODOs");
        h.insertAdjacentHTML(
          "afterbegin",
          '<button type="button" class="btn btn-outline-primary col-md-2" id="' + id + '">Delete</button>'
        );
        h.insertAdjacentHTML(
          "afterbegin", 
          '<div class="col-4 col-md-8" id="row_todo">' + e + '</div>'
        );
        h.insertAdjacentHTML(
          "afterbegin",
          '<div class="w-100 py-1"></div>'
        );
      }
    });
  });
})