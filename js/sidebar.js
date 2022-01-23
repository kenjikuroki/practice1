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