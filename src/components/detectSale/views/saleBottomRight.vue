<template>
     <div id="saleBottomRight">
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
        <el-col :span="6">
        <div
          class="item-box mt-2"
          v-for="(item, index) in numberData"
          :key="index"
        >
            <p class="text" style="text-align: center;margin-top:50px;font-size:20px">
            <i class="el-icon-s-shop" style="color:#70d9bd;font-size:30px"></i>
            {{ item.text }}
          </p>
           <div style="margin-left:50px;margin-top:10px;text-align:center">
            <span class="dv-digital-flop"> {{ item.number }}</span>
          </div>
        </div>
        </el-col>
        <el-col :span="18">
      <div>
          <saleBottomRight1 :data-detail="dataDetail">
            </saleBottomRight1>
      </div>
       </el-col>
      </el-row>
      <!-- 4个主要的数据 -->
    </div>
  </div>
</template>
<script>
import saleBottomRight1 from '@/components/echart/detectSale/saleBottomRight1'
import sale from '@/mainData/sale'
export default {
  components: {saleBottomRight1},
  props: {
    tableValue: {}
  },
  watch: {
    tableValue (val) {
      this.numberData[0].number = val.row[1]
      this.numberData[1].number = val.row[2]
      this.numberData[2].number = val.row[3]
      let flag = 0
      for (let i = 0; i < Object.keys(sale.abnormalDetail).length; i++) {
        for (let j = 0; j < Object.keys(sale.abnormalDetail[i].itemDetail).length; j++) {
          if (val.row[3] === sale.abnormalDetail[i].itemDetail[j].itemName) {
            this.dataDetail.unshift(sale.abnormalDetail[i].itemDetail[j])
            flag = 1
            break
          }
          if (flag === 1) { break }
        }
      }
    }
  },
  data () {
    return {
      dataDetail: [],
      numberData: [
        {
          number: '',
          text: '店铺名称'
        },
        {
          number: '',
          text: '商品类别'
        },
        {
          number: '',
          text: '商品名称'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
$box-width: 1200px;
$box-height: 450px;

#saleBottomRight {
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
