<template>
  <div id="app">
    <div class="flex">
      <router-link to="/home" class="home">主页</router-link>
      <router-link to="/testFile" class="test-file">测试文件</router-link>
      <router-link to="/styleDemo" class="test-file">css</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      // name: '',
      // metaName:'',
      path: ''
    }
  },
  
  computed: {
    metaName() {
      return this.$route.meta.name
    }
  },

  created() {
    // this.metaName = this.$route.meta.name
  },
  methods: {

  },
};
</script>

<style lang="less" scoped>
.mixin {
  display: block;
  width: 120px;
  height: 40px;
  line-height: 40px;
  background-color: #008fff;
  color: #fff;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    background-color: rgb(218, 218, 218);
    color: black;
    transition: all 0.3s;
  }
}

.flex {
  display: flex;
  justify-content: flex-start;

  .home {
    .mixin;
  }

  .test-file {
    .mixin
  }
}
</style>
