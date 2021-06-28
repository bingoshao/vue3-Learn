<template>
  <p>v3-watch</p>
</template>

<script>
import {ref,reactive,toRefs,watch} from 'vue'
export default {
  setup() {
    const state = reactive({ nickname: "smj", age: 20 });
    let year = ref(0)
    const stateObj = reactive({
      room: {
        id: 100,
        attrs: {
          size: "140平方米",
          type: "三室两厅",
        },
      },
    });
    setTimeout(() => {
      // state.age++;
      // year.value++
      stateObj.room.id++
    }, 1000);
    /**
        参数说明：
        source: 可以支持 string,Object,Function,Array; 用于指定要侦听的响应式变量
        callback: 执行的回调函数
        options：支持 deep、immediate 和 flush 选项。
     */
    // 修改age值时会触发 watch的回调
    watch(
      () => state.age,
      (curAge, preAge) => {
        console.log("新值:", curAge, "老值:", preAge);
      }
    );


    //监听ref定义的数据
    watch(year, (newVal, oldVal) => {
      console.log("新值:", newVal, "老值:", oldVal);
    });


    // 侦听多个数据
    watch([() => state.age, year], ([curAge, newVal], [preAge, oldVal]) => {
      console.log("新值:", curAge, "老值:", preAge);
      console.log("新值:", newVal,"老值:", oldVal);}
    );

    //侦听复杂的嵌套对象
    watch(() => stateObj.room,(newType, oldType) => {
        console.log("新值:", newType.id, "老值:", oldType.id);
      },
      { deep: true }
    );

    return {
      ...toRefs(state)
    }
  }
};
</script>

<style scoped lang="scss">

</style>
