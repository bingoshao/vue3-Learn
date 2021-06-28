<template>
  <h1>{{ result }}</h1>
  <div>
    <el-row class="paragraphs">
      <el-col
        :span="6"
        v-for="(item,index) in data"
        :key="index">
        <el-card>
          <div>
            <span>{{item.title}}</span>
            <p>{{item.author}}</p>
            <ul>
              <li
                v-for="(p,pIndex) in item.paragraphs"
                :key="pIndex">
                {{p}}
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import tableData from '../../assets/data'
export default defineComponent({
  async setup() {
    const result = ref("");
    const data = tableData
    await setTimeout(() => {
      result.value = "HI~Async";
    }, 3000);

    return {
      result,
      data
    };
  }
});
</script>

<style scoped lang="scss">
  .paragraphs {
    .el-col {
      padding: 10px;
    }
    .el-card {
      height: 150px;
    }
  }
</style>