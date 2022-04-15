<template>
  <div id="dataShow">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
        </span>
        <div style="height:30px;width:100%">
          <el-row>
            <el-col :span="5">
          <span style="color:#70d9bd;font-size:20px">数据展示</span>
            </el-col>
            <el-col :span="19">
               <dv-decoration-3 class="dv-dec-3" />
            </el-col>
          </el-row>
        </div>
      </div>
      <el-row>
        <el-col :span="8">
      <div>
         <div class="d-flex ai-center flex-column body-box">
        <dv-capsule-chart class="dv-cap-chart" :config="config" />
      </div>
      </div>
        </el-col>
        <el-col :span="8">
          <div>
          <dataShowEchart :max-num="maxNum" :data-num="dataNum"></dataShowEchart>
          </div>
        </el-col>
        <el-col :span="8" style="margin-top:30px">
                <div class="bottom-data">
        <div
          class="item-box mt-2"
          v-for="(item, index) in numberData"
          :key="index"
        >
            <p class="text" style="text-align: center;margin-top:30px">
            <i class="el-icon-s-shop" style="color:#70d9bd;font-size:30px"></i>
            {{ item.text }}
          </p>
           <div style="margin-left:50px;margin-top:10px;text-align:center">
            <span class="dv-digital-flop"> {{ item.number }}</span>
          </div>
        </div>
      </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import dataShowEchart from '@/components/echart/preHandle/dataShow3'
export default {
  props: {
    tableValue: {
      type: Object,
      default: () => ({})
    },
    preHandle: {
      type: Object,
      default: () => ({})
    }
  },
  watch: {
    tableValue (val) {
      this.numberData[0].number = val.row[1]
      this.numberData[1].number = val.row[3]
      for (let i = 0; i < Object.keys(this.preHandle.absence).length; i++) {
        if (val.row[3] === this.preHandle.absence[i].itemName) {
          this.tableDetail = this.preHandle.absence[i]
          this.numberData[2].number = parseInt(this.tableDetail.FavNumfilled[0].split('.')[0]) + Math.round(Math.random() * 100 + 50)
          this.numberData[3].number = parseInt(this.tableDetail.EvaNumfilled[0].split('.')[0]) + Math.round(Math.random() * 100 + 50)
          this.dataNum.splice(0, 1, parseFloat(this.tableDetail.itemSaleAmount))
          this.dataNum.splice(1, 1, parseFloat(this.tableDetail.itemSaleVolum[0]))
          this.dataNum.splice(2, 1, parseFloat(this.tableDetail.allPrices[0]))
          this.dataNum.splice(3, 1, parseFloat(this.tableDetail.FavNumfilled[0]))
          this.dataNum.splice(4, 1, parseFloat(this.tableDetail.EvaNumfilled[0]))
        }
      }
      for (let i = 0; i < 5; i++) {
        let s = this.config.data[i]
        s.value = parseFloat((this.dataNum[i] / this.maxNum[i] * 100).toFixed(2))
        this.config.data.splice(i, 1, s)
      }
      this.config = { ...this.config }
      console.log('config')
      console.log(this.config.data)
    },
    preHandle (val) {
      this.initMaxNum(val)
    }
  },
  data () {
    return {
      numberData: [],
      tableDetail: {},
      maxNum: [100, 100, 100, 100, 100],
      dataNum: [0, 0, 0, 0, 0],
      config: {
        data: [
          {
            name: '月销售额指数',
            value: 0
          },
          {
            name: '月销量指数',
            value: 0
          },
          {
            name: '价格指数',
            value: 0
          },
          {
            name: '收藏指数',
            value: 0
          },
          {
            name: '评价指数',
            value: 0
          }
        ],
        colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
        unit: '%',
        showValue: true
      }
    }
  },
  methods: {
    initMaxNum (val) {
      for (let i = 0; i < Object.keys(val.absence).length; i++) {
        if (parseFloat(val.absence[i].itemSaleAmount) > this.maxNum[0]) {
          this.maxNum[0] = parseFloat(val.absence[i].itemSaleAmount)
        }
        if (parseFloat(val.absence[i].itemSaleVolum[0]) > this.maxNum[1]) {
          this.maxNum[1] = parseFloat(val.absence[i].itemSaleVolum[0])
        }
        if (parseFloat(val.absence[i].allPrices[0]) > this.maxNum[2]) {
          this.maxNum[2] = parseFloat(val.absence[i].allPrices[0])
        }
        if (parseFloat(val.absence[i].FavNumfilled[0]) > this.maxNum[3]) {
          this.maxNum[3] = parseFloat(val.absence[i].FavNumfilled[0])
        }
        if (parseFloat(val.absence[i].EvaNumfilled[0]) > this.maxNum[4]) {
          this.maxNum[4] = parseFloat(val.absence[i].EvaNumfilled[0])
        }
      }
      console.log(1)
      console.log(this.maxNum)
    }
  },
  components: {
    dataShowEchart
  },
  created () {
    this.numberData = [
      {
        number: '',
        text: '店铺名称'
      },
      {
        number: '',
        text: '商品名称'
      },
      {
        number: '',
        text: '收藏数'
      },
      {
        number: '',
        text: '评价数'
      }
    ]
  },
  mounted () {
    this.initMaxNum(this.preHandle)
  }
}
</script>

<style lang="scss" scoped>
$box-width: 1200px;
$box-height: 400px;

#dataShow {
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
    .body-box {
    border-radius: 10px;
    overflow: hidden;
    .dv-cap-chart {
      width: 100%;
      height: 300px;
    }
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
      height:150px;
      color: #d3d6dd;
      .dv-digital-flop {
        width: 120px;
        height: 30px;
        margin-top:15px;
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
      span {
         text-align: center;
        font-size:17px;
      }
    }
  }
}
</style>
