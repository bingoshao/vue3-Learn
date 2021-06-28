<template>
    <p>v3-suspense</p>
    <Suspense>
      <template #default>
        <Async></Async>
      </template>
      <template #fallback>
        <!-- 此处不起作用 why？-->
        <h1>Loading...</h1>
      </template>
    </Suspense>
</template>

<script>
import Async from './Async.vue'
export default {
  components:{
    Async
  },
};
</script>

<style scoped lang="scss">

</style>
