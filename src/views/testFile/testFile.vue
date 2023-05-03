<template>
  <div class='testFile'>
    <a-button style="margin:10px 10px" type="primary" @click="onClickSendResquest"
      :loading="loadingStatus['sendToBeebot:create']">get请求</a-button>
    <el-button style="margin:10px 10px" type="primary" @click="onClickLoad">刷新</el-button>
    <label for="">添加数据: </label>
    <el-input style="width: 240px" v-model="inputValue"></el-input>
    <el-button style="margin:10px 10px" type="primary" @click="onClickAdd">添加数据</el-button>
    <ul>
      <li id="li" class="li" v-for="({ name, age, id }) in list" :key="id">{{ age }}{{ name }}</li>
    </ul>

    <div style="width: 50vw;">
      <el-table :data="list" align="center" border :loading="loading">
        <el-table-column label="id" prop="id"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="年龄" prop="age"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
// import { jsonToTree } from '@/utils/stringUtil'

let arr = [
  { id: 0, pid: null, name: '生物' },
  { id: 1, pid: 0, name: '动物' },
  { id: 2, pid: 0, name: '植物' },
  { id: 3, pid: 0, name: '微生物' },
  { id: 4, pid: 1, name: '哺乳动物' },
  { id: 5, pid: 1, name: '卵生动物' },
  { id: 6, pid: 2, name: '种子植物' },
  { id: 7, pid: 2, name: '蕨类植物' },
  { id: 8, pid: 4, name: '大象' },
  { id: 9, pid: 4, name: '海豚' },
  { id: 10, pid: 4, name: '猩猩' },
  { id: 11, pid: 5, name: '蟒蛇' },
  { id: 12, pid: 5, name: '麻雀' }
]

let treeList = []
let map = {}
arr.forEach((item) => {
  item && (map[item.id] = item)
})
console.log(map);

arr.forEach(item => {
  const parent = map[item.pid]
  if (parent) {
    !parent.children && (parent.children = [])
    parent.children.push(item)
  } else {
    treeList.push(item)
  }
})
console.log(treeList);


// const result = jsonToTree(arr, {
//   id: 'id',
//   pid: 'pid',
//   children: 'children'

// })
// console.log(result);


export default {

  name: 'testFile',
  components: {},
  data () {
    return {
      inputValue: '',
      loading: false,
      list: [],
    };
  },

  created () {
    // this.onClickSendResquest()
  },

  mounted () {

  },

  methods: {
    onClickSendResquest () {
      window.document.title = '冷雪瞳'
      this.loading = true
      this.$apis.getList().then((res) => {
        this.loading = false
        if (res) {
          this.list = res
          this.$message.success('请求成功')
        } else {
          this.$message.error('请求失败')
        }
      })
        .catch(() => { console.log('执行失败') })
        .finally(() => { console.log('执行') })
    },

    onClickAdd () {
      const data = {
        id: 4,
        name: this.inputValue
      }
      this.$apis.addList(data).then(res => {
        console.log(res);
      })
    },

    onClickLoad () {
      // this.$apis.add()
      location.reload()
    },

    onClickDemoGet () {
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