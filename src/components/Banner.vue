<template>
    <div class="sm-banner">
      <img class="sm-banner-left sm-banner-img" src="../assets/logo.png" alt="">
      <span class="sm-banner-left sm-banner-name">{{name}}</span>
      <p class="sm-banner-slogan">{{slogan}}</p>
      <div class="sm-banner-other">
        <el-button>功能1</el-button>
        <el-button>功能2</el-button>
      </div>
    </div>
</template>

<script>
export default {
  name:'Banner',
  props: {
    name: {
      type: String,
      default:function(){}
    },
    slogan: {
      type: String,
      default:function(){}
    }
  },
};
</script>

<style scoped lang="scss">
.sm-banner {
  overflow: hidden;
  display: flex;
  align-items: center;
  &-left {
    float: left;
  }
  &-img {
    width: 50px;
    height: 50px;
  }
  &-name {
    font-size: 28px;
  }
  &-slogan {
    margin: 0 auto;
  }
}
</style>
