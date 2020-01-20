$(document).ready(function () {
  $("#ajaxSubmit").click(function post(){
    $.ajax({
      url: 'http://localhost:3000/todo/',
      type: 'POST',
      data: {"description": $("#Add_TODO").val()},
      dataType: 'json'
    })
  });
})

function addTodo(){
  var element = document.getElementById("TODOs");
  var description = $("#Add_TODO").val();

  $.ajax({
    url: 'http://localhost:3000/todo/',
    type: 'GET',
    dataType: 'json'
  })
  .then(function (response){
    var len = response.length + 1;
    
    element.insertAdjacentHTML(
      'afterbegin',
      '<button id="btn_block' + len + '" onclick="deleteTodo(' + len + ')" class="btn btn-outline-primary col-md-2">Delete</button>'
    );
    element.insertAdjacentHTML(
      "afterbegin", 
      '<div id="des_block' + len + '" class="col-4 col-md-8">'  + description +  '</div>'
    );
    element.insertAdjacentHTML(
      "afterbegin",
      '<div id="spc_block' + len + '" class="w-100 py-1"></div>'
    );
  })
}

function deleteTodo(id){
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

function addTodos(){
  $.ajax({
    url: 'http://localhost:3000/todo/',
    type: 'GET',
    dataType: 'json',
    success: function (response) {
      console.log(response)
    }
  })
  .then(function (response){

    var element = document.getElementById("TODOs");

    response.forEach(todo => {
      element.insertAdjacentHTML(
        'afterbegin',
        '<button id="btn_block' + todo.id + '" onclick="deleteTodo(' + todo.id + ')" class="btn btn-outline-primary col-md-2">Delete</button>'
      );
      element.insertAdjacentHTML(
        "afterbegin", 
        '<div id="des_block'+ todo.id + '" class="col-4 col-md-8">' + todo.description + '</div>'
      );
      element.insertAdjacentHTML(
        "afterbegin",
        '<div id="spc_block' + todo.id + '" class="w-100 py-1"></div>'
      );
    });
  })
}
