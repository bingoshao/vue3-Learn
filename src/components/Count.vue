<template>
  <div class="countComponent">
    <el-button type="primary" @click="increase">-</el-button>
    <el-input v-model="count" placeholder="请输入内容"></el-input>
    <el-button type="primary" @click="add">+</el-button>
  </div>
</template>

<script>
import calcCount from '../composables/count/count.js'
export default {
  name: 'Count',
  props:{
    count:{
      type:Number,
      default:function(){}
    }
  },
  setup(props,context) {
      let countNumber = props.count
      let {count,add,increase} = calcCount(countNumber)
      return {
        count,add,increase
      }
  }
}
</script>

<style scoped>
  .countComponent {
    width: 400px;
    display: flex;
  }
  .countComponent .el-input {
    margin: 0 10px;
  }
</style>