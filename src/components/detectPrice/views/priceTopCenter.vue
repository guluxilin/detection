<template>
  <div id="dataShow">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
        </span>
        <div style="height:30px;width:100%">
          <span style="color:#70d9bd;font-size:20px">价格异常比例</span>
        </div>
      </div>
      <el-row>
        <el-col :span="17">
      <div>
        <priceTopCenter></priceTopCenter>
      </div>
        </el-col>
        <el-col :span="7">
                <div class="bottom-data">
        <div
          class="item-box mt-2"
          v-for="(item, index) in numberData"
          :key="index"
        >
            <p class="text" style="text-align: center;margin-top:30px">
            {{ item.text }}
          </p>
          <div style="margin-left:40px;margin-top:10px;text-align:center">
            <dv-digital-flop class="dv-digital-flop" :config="item.number" />
            </div>
        </div>
      </div>
        </el-col>
      </el-row>
      <!-- 4个主要的数据 -->
    </div>
  </div>
</template>

<script>
import priceTopCenter from '@/components/echart/detectPrice/priceTopCenter'
import price from '@/mainData/price'
export default {
  mounted () {
    this.numberData[0].number.number.push(parseInt(parseFloat(price.sumItem) * parseFloat(price.abnormalItem) / 100))
    this.numberData[1].number.number.push(parseInt(parseFloat(price.sumSort) * parseFloat(price.abnormalSortRate) / 100))
    this.numberData[2].number.number.push(parseInt(parseFloat(price.sumStore) * parseFloat(price.abnormalStoreRate) / 100))
    for (let i = 0; i < 3; i++) { this.numberData[i].number = { ...this.numberData[i].number } }
  },
  data () {
    return {
      numberData: [
        {
          number: {
            number: [],
            toFixed: 0,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 24
            }
          },
          text: '异常商品数量',
          textAlign: 'center'
        },
        {
          number: {
            number: [],
            toFixed: 0,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 24
            }
          },
          text: '异常类别数量'
        },
        {
          number: {
            number: [],
            toFixed: 0,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 24
            }
          },
          text: '异常店铺数量'
        }
      ]
    }
  },
  components: {
    priceTopCenter
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
$box-width: 1200px;
$box-height: 450px;

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

  .bottom-data {
    .item-box {
      & > div {
        padding-right: 5px;
      }
      font-size: 14px;
      float: right;
      position: relative;
      width: 100%;
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
