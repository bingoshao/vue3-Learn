<template>
    <div class="sm-todo-list">
      <el-input @keyup.enter="addTodoList" v-model="text" class="sm-todo-list-input"></el-input>
      <ul class="sm-todo-list-list">
        <li v-for="(item,index) in todoList" :key="index" class="sm-todo-list-item">
          <span class="sm-todo-list-item-text">{{item}}</span>
          <el-button type="text" @click="deleteTodoList(index)">删除</el-button>
        </li>
      </ul>
    </div>
</template>

<script>
import {ref,reactive,toRef,toRefs,onMounted} from 'vue'
import addTodoList from  '../composables/todoList/index'
export default {
  name:'TodoList',
  setup(){
    let data = reactive({
      text:'',
      todoList:[]
    })
    function addTodoList(){
      data.todoList.push(data.text)
      data.text= ''
    }
    function deleteTodoList(idx){
      data.todoList = data.todoList.filter((item,index)=>index!==idx)
    }
    let refsData = toRefs(data)
    return {...refsData,addTodoList,deleteTodoList}
  }
};
</script>

<style scoped lang="scss">
.sm-todo-list {
  width: 400px;
  margin: 10px 0;
  &-item {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-top: 0;
    padding: 0 5px;
    &-text {
      margin: 0 auto;
    }
  }
}
</style>
