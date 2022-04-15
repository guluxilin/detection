<template>
     <div id="topLeft">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
        </span>
        <div style="height:30px;width:100%">
          <el-row>
            <el-col :span="5">
          <span style="color:#70d9bd;font-size:20px">异常店铺比例</span>
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
          <TopLeftChart
           :id="rate[0].id"
            :tips="rate[0].tips"
            :colorObj="rate[0].colorData">
            </TopLeftChart>
      </div>
       </el-col>
      <el-col :span="10">
        <div class="ranking">
        <span class="text" style="color:#70d9bd;">高异常店铺排行榜</span>
        <dv-scroll-ranking-board class="dv-scr-rank-board mt-1" :config="ranking" />
      </div>
      </el-col>
        <el-col :span="6">
                <div class="bottom-data">
        <div
          class="item-box mt-2"
          v-for="(item, index) in numberData"
          :key="index"
        >
            <p class="text" style="text-align: center;margin-top:60px">
            <i class="el-icon-s-shop" style="color:#70d9bd;font-size:30px"></i>
            {{ item.text }}
            <span class="colorYellow"></span>
          </p>
           <div class="d-flex" style="justify-content:center;margin-top:20px">
            <span class="coin" style="margin-left:70px"></span>
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
import TopLeftChart from '@/components/echart/homePage/topLeft1'
import main from '@/mainData/main'
export default {
  components: {TopLeftChart},
  mounted () {
    this.numberData[1].number.number.splice(0, 1, parseInt(main.sumAbnormalStore))
    this.numberData[0].number.number.splice(0, 1, parseInt(parseFloat(main.sumAbnormalStore) / parseFloat(main.abnormalStoreRate) * 100))
    this.numberData[0].number = { ...this.numberData[0].number }
    this.numberData[1].number = { ...this.numberData[1].number }
    for (let i = 0; i < Object.keys(main.abnormalStore).length; i++) {
      this.ranking.data.push({name: '  ' + main.abnormalStore[i].storeName, value: (parseFloat(main.abnormalStore[i].abnormalRate) * 100).toFixed(2)})
    }
  },
  data () {
    return {
      numberData: [
        {
          number: {
            number: [15],
            toFixed: 0,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 24
            }
          },
          text: '店铺总数'
        },
        {
          number: {
            number: [1144],
            toFixed: 0,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 24
            }
          },
          text: '异常店铺数量'
        }
      ],
      rate: [
        {
          id: 'topLeft1',
          tips: parseInt(main.abnormalStoreRate),
          colorData: {
            textStyle: '#3fc0fb',
            series: {
              color: ['#00bcd44a', 'transparent'],
              dataColor: {
                normal: '#03a9f4',
                shadowColor: '#97e2f5'
              }
            }
          }
        }
      ],
      ranking: {
        data: [
        ],
        carousel: 'single',
        unit: '%'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$box-width: 1200px;
$box-height: 400px;

#topLeft {
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
    .ranking {
      padding: 10px;
      width: 100%;
      .dv-scr-rank-board {
        height: $box-height - 150px;
      }
    }
}
</style>
