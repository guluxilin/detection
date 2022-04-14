<template>
  <div id="priceBottomRight">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
        </span>
        <div style="height:30px;width:100%">
          <el-row>
            <el-col :span="9">
          <span style="color:#70d9bd;font-size:20px">商品价格波动</span>
            </el-col>
            <el-col :span="15">
               <dv-decoration-3 class="dv-dec-3" />
            </el-col>
          </el-row>
        </div>
      </div>
      <div>
        <priceBottomRight style="color:#FFFF" :table-value="tableValue"></priceBottomRight>
      </div>
      <!-- 4个主要的数据 -->
    </div>
  </div>
</template>

<script>
import priceBottomRight from '@/components/echart/detectPrice/priceBottomRight'
export default {
  props: {
    tableValue: {}
  },
  watch: {
    tableValue (val) {
      /* console.log('pricebottom')
      console.log(val) */
    }
  },
  data () {
    return {
      numberData: [
        {
          number: {
            number: [15],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 24
            }
          },
          text: '店铺名称'
        },
        {
          number: {
            number: [1144],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 24
            }
          },
          text: '商品名称'
        },
        {
          number: {
            number: [361],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 24
            }
          },
          text: '收藏数'
        },
        {
          number: {
            number: [157],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 24
            }
          },
          text: '评价数'
        }
      ]
    }
  },
  components: {
    priceBottomRight
  },
  mounted () {
    this.changeTiming()
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

#priceBottomRight {
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
}
</style>
