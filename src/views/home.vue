<template>
  <div id="home">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "homeView",
  components: {},
  data() {
    return {
      option: {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
          },
        ],
      },
    };
  },
  created() {
    // console.log(this.$route);
  },
  methods: {},

  mounted() {
    const home = document.getElementById("home");
    const myChart = this.$echarts.init(home);
    myChart.setOption(this.option);
  },
};
</script>

<style lang="less" scoped>
#home {
  width: 400px;
  height: 500px;
}
</style>
