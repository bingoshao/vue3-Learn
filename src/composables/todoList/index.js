import { ref } from 'vue'

export default function addTodoList (text, todoList) {
  function addTodo () {
    todoList.push(text)
  }
  return {todoList,text,addTodo}
}