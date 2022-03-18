<template>
    <div>
      <el-card class="box-card">
 <div slot="header" class="clearfix">
    <el-row :gutter="20">
      <el-col :span="6">
    <span style="font-size:20px;color:#909399">数据分析</span>
      </el-col>
      <el-col :span="18">
    <el-button style="padding:5px 15px"><span>一级类别</span></el-button>
    <el-button style="padding:5px 15px"><span>二级类别</span></el-button>
    <el-button style="padding:5px 15px"><span>三级类别</span></el-button>
    <el-button style="padding:5px 15px"><span>四级类别</span></el-button>
      </el-col>
    </el-row>
  </div>
  <el-row :gutter="20">
      <el-col :span="8">
  <div class="text item">
    <el-button size="mini">分类前</el-button>
    <el-button size="mini">分类后</el-button>
  </div>
  <div class="fontStyle">
  <div class="text item" style="margin-top:30px;">
   <el-link :underline="false" @click="judgeChage(1)" >柱状图</el-link>
  </div>
   <div class="text item">
    <el-link :underline="false"  @click="judgeChage(2)">饼状图</el-link>
  </div>
   <div class="text item">
    <el-link :underline="false" @click="judgeChage(3)">折线图</el-link>
  </div>
  </div>
      </el-col>
       <el-col :span="16">
         <div id="Mimelist1" ref="myChart1" v-show="judge1"></div>
         <div id="Mimelist2" ref="myChart2" v-show="judge2"></div>
         <div id="Mimelist3" ref="myChart3" v-show="judge3"></div>
       </el-col>
  </el-row>
</el-card>
      </div>
</template>
<script>
import option2 from '../../../data/Pie chart'
import option1 from '../../../data/Histogram'
import option3 from '../../../data/lineChart'
export default {
  name: 'DataAnalyse',
  data () {
    return {
      option2: option2,
      option1: option1,
      option3: option3,
      judge1: true,
      judge2: false,
      judge3: false
    }
  },
  mounted () {
    let myChart1 = this.$echarts.init(this.$refs.myChart1)
    let myChart2 = this.$echarts.init(this.$refs.myChart2)
    let myChart3 = this.$echarts.init(this.$refs.myChart3)
    myChart1.setOption(this.option1)
    myChart2.setOption(this.option2)
    myChart3.setOption(this.option3)
    window.onresize = () => {
    }
  },
  methods: {
    judgeChage (val) {
      if (val === 1) {
        this.judge1 = true
        this.judge2 = false
        this.judge3 = false
      } else if (val === 2) {
        this.judge1 = false
        this.judge2 = true
        this.judge3 = false
      } else {
        this.judge1 = false
        this.judge2 = false
        this.judge3 = true
      }
    }
  }
}
</script>
<style scoped>
 .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width:100%;
    margin-top:20px;
  }
  .fontStyle{
    margin-left:40px;
     color: #303133;
  }
  .el-divider__text, .el-link {
     font-weight: 600;
}
#Mimelist1 {
  width: 353px;
  height:300px;
}
#Mimelist2 {
  width: 353px;
  height:300px;
}
#Mimelist3 {
  width: 353px;
  height:300px;
}
div /deep/ .el-card__body {
    padding: 0px 20px;
}
</style>
