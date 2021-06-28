<template>
  <div class="components-box">
    <Banner :name="name" :slogan="slogan"/>
    <Count :count="count"></Count>
    <TodoList></TodoList>
  </div>

  <div class="learn-v3">
    <h4>learn v3</h4>
    <v3Learn></v3Learn>
  </div>
</template>

<script>
import { ref,toRefs,watch,computed,onBeforeMount,onMounted, reactive } from 'vue'
import Count from './Count.vue'
import Banner from './Banner.vue'
import TodoList from './TodoList.vue'
import v3Learn from '../views/v3-learn/index.vue'
export default {
  name: 'HelloWorld',
  components:{
    Count,
    Banner,
    TodoList,
    v3Learn
  },
  setup(props,context) {
      let count = ref(0)
      let name = ref('sm-banner')
      let slogan = ref('Next Generation Frontend Tooling')
      return {
        count,name,slogan
      }
  }
}
</script>
<style scoped >
body {
  background: #ccc;
}
.components-box {
  padding: 20px;
}
</style>