"use strict";

const inputTodo = document.getElementById("inputTodo");
const todoLists = document.getElementById("todoLists");
const addBtn = document.getElementById("addBtn");

// デフォルト値で1を設定
let currentNum = 1;
// todoを保存する箱
let todos = [];

addBtn.addEventListener("click", () => {
  if (inputTodo.value === "") {
    return;
  }

  // 先ほど用意したタスクを保存する箱に保存
  todos.push({
    id: currentNum,
    title: inputTodo.value
  });

  createListView();
  inputTodo.value = "";
  currentNum++;
});

const createListView = () => {
  // タスクを描画するときにtbodyの中に子要素が一つでもあれば一つになるまで削除する
  while (todoLists.firstChild) {
    todoLists.removeChild(todoLists.firstChild);
  }

  todos.forEach((todo) => {
    // // tr要素の生成
    let todoItem = document.createElement("tr");
    // todoのIDを表示するthの生成
    const todoId = document.createElement("th");
    // todoのタイトルを表示するthの生成
    const todoTitle = document.createElement("th");
    // 削除ボタンを表示するthの生成
    const todoDelete = document.createElement("th");
    // 削除ボタンの生成
    const deleteBtn = document.createElement("button");

    todoId.textContent = todo.id;
    todoTitle.textContent = todo.title;
    deleteBtn.textContent = "削除";
    deleteBtn.classList.add("btn", "btn-secondary");
    todoDelete.appendChild(deleteBtn);

    todoItem.appendChild(todoId);
    todoItem.appendChild(todoTitle);
    todoItem.appendChild(todoDelete);
    todoLists.appendChild(todoItem);
  });
};

$('.rowins').click(function() {
    let $row = $(this).closest("tr");
    let $newRow = $row.clone(true);
    $newRow.insertAfter($row);
   });


   $(function() {
    //行追加
    $('#rowAdd').on('click', function() {
      $('table').append('<tr>' +  + '</tr>');
      for( var i = 0; i < $('table tr:first td').length; i++) {
        if( i != 0 ) {
          $('table tr:last').append('<td><input type="number" name="data_value' + (i + 1) + '" /></td>');
        } else {
          $('table tr:last').append('<td><input type="text" name="data_value' + (i + 1) + '" /></td>');
        }
      }
    });
   
    //行削除
    $('#rowRemove').on('click', function() {
      if( $('table tr').length > 3) {
        $('table tr:last').remove();
      }
    });
   
      //列追加
    $('#colAdd').on('click', function() {
      var cell = $('table tr:first td').length;
      $('table tr').each(function(i) {
        if(i != 0) { 
          $(this).append('<td><input type="number" name="data_value'+ (cell + 1) +'" /></td>');
        } else {
          $(this).append('<td><input type="text" name="data_value'+ (cell + 1) +'" /></td>');
        } 
      });
    });
   
    //列削除
    $('#colRemove').on('click', function() {
      if($('table tr:first td').length > 2) {
        $('table tr').each(function() {
          $(this).children(':last').remove();
        });
      }
    });
   
  });