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
   <el-link :underline="false">柱状图</el-link>
  </div>
   <div class="text item">
    <el-link :underline="false">饼状图</el-link>
  </div>
   <div class="text item">
    <el-link :underline="false">折线图</el-link>
  </div>
  </div>
      </el-col>
       <el-col :span="16">
         <div id="Mimelist"></div>
       </el-col>
  </el-row>
</el-card>
      </div>
</template>
<script>
export default {
  name: 'DataAnalyse',
  data () {
    return {
      option: {
        legend: {
          top: 'bottom'
        },
        toolbox: {
          show: false,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [50, 250],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: [
              { value: 40, name: 'rose 1' },
              { value: 38, name: 'rose 2' },
              { value: 32, name: 'rose 3' },
              { value: 30, name: 'rose 4' },
              { value: 28, name: 'rose 5' },
              { value: 26, name: 'rose 6' },
              { value: 22, name: 'rose 7' },
              { value: 18, name: 'rose 8' }
            ]
          }
        ]
      }
    }
  },
  mounted () {
    let myChart = this.$echarts.init(document.getElementById('Mimelist'))
    myChart.setOption(this.option)
    window.onresize = () => {
      myChart.resize()
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
    margin-left:30px;
     color: #303133;
  }
  .el-divider__text, .el-link {
     font-weight: 600;
}
#Mimelist {
  width: 100%;
  height:200px;
}
</style>
