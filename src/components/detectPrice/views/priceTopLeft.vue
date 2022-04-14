<template>
  <div id="priceTopLeft">
    <div class="bg-color-black">
      <el-row>
      <el-col :span="12">
      <div class="d-flex pt-2 pl-2">
        <span>
        </span>
        <div style="height:30px;width:100%">
          <el-row>
            <el-col :span="10">
          <span style="color:#70d9bd;font-size:20px">价格聚类情况</span>
            </el-col>
            <el-col :span="14">
               <dv-decoration-3 class="dv-dec-3" />
            </el-col>
          </el-row>
        </div>
      </div>
    <div style="margin-top:20px">
      <priceTopLeft1></priceTopLeft1>
    </div>
      </el-col>
      <el-col :span="12">
      <div class="d-flex pt-2 pl-2">
        <span>
        </span>
        <div style="height:30px;width:100%">
          <el-row>
            <el-col :span="10">
          <span style="color:#70d9bd;font-size:20px">各指标影响力</span>
            </el-col>
            <el-col :span="14">
               <dv-decoration-3 class="dv-dec-3" />
            </el-col>
          </el-row>
        </div>
      </div>
      <div>
         <div class="d-flex ai-center flex-column body-box">
        <dv-capsule-chart class="dv-cap-chart" :config="config" />
         <priceTopLeft2></priceTopLeft2>
      </div>
      </div>
      </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import priceTopLeft1 from '../../echart/detectPrice/priceTopLeft1'
import priceTopLeft2 from '../../echart/detectPrice/priceTopLeft2'
import topsis from '@/mainData/topsis'
export default {
  components: {priceTopLeft1, priceTopLeft2},
  mounted () {
    let sum = 0
    for (let i = 0; i < 5; i++) {
      sum = sum + parseFloat(topsis.factorWeight[i])
    }
    for (let i = 0; i < 5; i++) {
      topsis.factorWeight.splice(i, 1, (parseFloat(topsis.factorWeight[i]) / sum).toFixed(3))
      this.config.data[i].value = topsis.factorWeight[i]
    }
    this.config = { ...this.config }
  },
  data () {
    return {
      config: {
        data: [
          {
            name: '销量',
            value: 0
          },
          {
            name: '商品描述',
            value: 0
          },
          {
            name: '服务',
            value: 0
          },
          {
            name: '物流',
            value: 0
          },
          {
            name: '开店时间',
            value: 0
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$box-width: 1200px;
$box-height: 450px;

#priceTopLeft {
  padding: 16px;
  border-radius: 10px;
  height:$box-height;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .dv-dec-3 {
    position: relative;
    width: 100px;
    height: 20px;
    top: -3px;
  }

  .bottom-data {
    .item-box {
      & > div {
        padding-right: 5px;
      }
      font-size: 14px;
      float: right;
      position: relative;
      width: 50%;
      margin:auto;
      color: #d3d6dd;
      .dv-digital-flop {
        width: 120px;
        height: 30px;
      }
      // 金币
      .coin {
        position: relative;
        top: 6px;
        font-size: 20px;
        color: #ffc107;
      }
      .colorYellow {
        color: yellowgreen;
      }
      p {
        text-align: center;
        font-size:20px;
      }
    }
  }
    .body-box {
    border-radius: 10px;
    overflow: hidden;
    .dv-cap-chart {
      width: 100%;
      height: 160px;
    }
  }
}
</style>
