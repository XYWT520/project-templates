<template>
  <div class='testFile'>
    <a-button style="margin:10px 10px" type="primary" @click="onClickSendResquest"
      :loading="loadingStatus['sendToBeebot:create']">send equest</a-button>
    <el-button style="margin:10px 10px" type="primary" @click="onClickAdd">test Add</el-button>
    <el-button style="margin:10px 10px" type="primary" @click="onClickDemoGet">test demo-get</el-button>
  </div>
</template>

<script>
export default {
  name: 'testFile',
  components: {},
  data() {
    return {

    };
  },

  created() {
    // console.log(this.$route);
  },

  methods: {
    onClickSendResquest() {
      this.$apis.sendToBeebot().then(() => { }).catch(() => { console.log('执行失败') }).finally(() => { console.log('执行') })
    },

    onClickAdd() {
      this.$apis.add()
    },

    onClickDemoGet() {
      console.log(this);
      this.$apis.demo.get({ id: 1 })
    },
  },
}
</script>

<style lang='less' scoped>
.testFile {
  width: 100%;
  height: 100%;
}
</style>