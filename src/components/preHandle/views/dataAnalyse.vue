<template>
  <div id="dataAnalyse">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
           <i class="el-icon-s-marketing iconstyle"></i>
        </span>
        <div style="height:30px;width:100%">
          <el-row>
            <el-col :span="5">
          <span style="color:#70d9bd;font-size:20px">原始商品数据分析</span>
            </el-col>
            <el-col :span="19">
               <dv-decoration-3 class="dv-dec-3" />
            </el-col>
          </el-row>
        </div>
      </div>
      <el-row>
      <div>
        <CenterLeft1Chart
        :adata="adata"
        :bdata="bdata"
        :cdata="cdata"
        />
      </div>
      </el-row>
      <!-- 4个主要的数据 -->
      <div class="bottom-data">
         <el-row>
        <div
          class="item-box mt-2"
          v-for="(item, index) in numberData"
          :key="index"
        >
          <el-row style="margin-bottom:10px">
            <p class="text" style="text-align: center;">
            {{ item.text }}
          </p>
            </el-row>
          <div class="d-flex" style="justify-content:center">
            <dv-digital-flop class="dv-digital-flop" :config="item.number" />
            <span class="coin">%</span>
          </div>
        </div>
       </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import CenterLeft1Chart from '@/components/echart/preHandle/dataAnalyse'
export default {
  props: {
    adata: {
      type: Number,
      default: 0
    },
    bdata: {
      type: Number,
      default: 0
    },
    cdata: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      numberData: [
        {
          number: {
            number: [this.cdata],
            toFixed: 2,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 24
            }
          },
          text: '类别预测准确率'
        },
        {
          number: {
            number: [this.bdata],
            toFixed: 2,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 24
            }
          },
          text: '数值缺失比例'
        },
        {
          number: {
            number: [this.adata],
            toFixed: 2,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 24
            }
          },
          text: '类别缺失比例'
        }
      ]
    }
  },
  components: {
    CenterLeft1Chart
  },
  mounted () {
  },
  methods: {
    changeTiming () {
      setInterval(() => {
        this.changeNumber()
      }, 3000)
    },
    changeNumber () {
      this.numberData.forEach((item, index) => {
        item.number.number[0] += ++index
        item.number = { ...item.number }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$box-width: 1200px;
$box-height: 400px;

#dataAnalyse {
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
      width: 33%;
      margin:auto;
      color: #d3d6dd;
      .dv-digital-flop {
        width: 60px;
        height: 30px;
      }
      // 金币
      .coin {
        position: relative;
        top: 6px;
        font-size: 20px;
        color: #ffc107;
        margin-left:10px;
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
}
</style>
