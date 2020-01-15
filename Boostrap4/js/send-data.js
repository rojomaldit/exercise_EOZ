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
        e = response[length-1].description
        var h = document.getElementById("TODOs");
        h.insertAdjacentHTML("afterbegin", '<div class="col-4" id="row_todo">' + e + '</div>');
        h.insertAdjacentHTML("afterbegin", '<div class="w-100 py-1"></div>');
        
      }
    });
  });
})
