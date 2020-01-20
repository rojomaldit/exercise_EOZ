$(document).ready(function () {
  $("#ajaxSubmit").click(function (){
    $.ajax({
      url: 'http://localhost:3000/todo/',
      type: 'POST',
      data: {"description": $("#Add_TODO").val()},
      dataType: 'json'
    })
    .then(addTodo())
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
    insertHTML(response.length + 1, description);
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
    dataType: 'json'
  })
  .then(function (response){
    response.forEach(todo => {
      insertHTML(todo.id, todo.description)
    });
  })
}

function insertHTML(id, description){
  var element = document.getElementById("TODOs");
  element.insertAdjacentHTML(
    'afterbegin',
    '<button id="btn_block' + id + '" onclick="deleteTodo(' + id + ')" class="btn btn-outline-primary col-md-2">Delete</button>'
  );
  element.insertAdjacentHTML(
    "afterbegin", 
    '<div id="des_block'+ id + '" class="col-4 col-md-8">' + description + '</div>'
  );
  element.insertAdjacentHTML(
    "afterbegin",
    '<div id="spc_block' + id + '" class="w-100 py-1"></div>'
  );
}