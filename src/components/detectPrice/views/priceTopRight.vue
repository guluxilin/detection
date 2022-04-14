<template>
  <div id="priceTopRight">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
        </span>
        <div style="height:40px;width:100%">
          <el-row>
            <el-col :span="11">
          <span style="color:#70d9bd;font-size:20px">价格异常商品</span>
          <span v-if="this.clickJudge" style="color:#70d9bd;font-size:20px">->商品</span>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="d-flex jc-center body-box">
        <dv-scroll-board class="dv-scr-board" :config="config" @click="getTableValue"/>
      </div>
    </div>
  </div>
</template>

<script>
import price from '@/mainData/price'
export default {
  mounted () {
    for (let i = 0; i < Object.keys(price.abnormalDetail).length; i++) {
      for (let j = 0; j < Object.keys(price.abnormalDetail[i].itemDetail).length; j++) {
        this.config.data.push([price.abnormalDetail[i].storeName, price.abnormalDetail[i].itemDetail[j].itemsort, price.abnormalDetail[i].itemDetail[j].itemName])
      }
    }
  },
  data () {
    return {
      config: {
        header: ['店铺', '类别', '商品'],
        data: [
        ],
        rowNum: 7, // 表格行数
        headerHeight: 35,
        headerBGC: '#0f1325', // 表头
        oddRowBGC: '#0f1325', // 奇数行
        evenRowBGC: '#171c33', // 偶数行
        index: true,
        columnWidth: [50],
        align: ['center']
      },
      clickJudge: false
    }
  },
  methods: {
    getTableValue (value) {
      /* console.log(value) */
      this.$emit('sendMessage', value)
      /* this.clickJudge = true */
    }
  }
}
</script>

<style lang="scss" scoped>
$box-height: 450px;
$box-width: 500px;
#priceTopRight {
  padding: 16px;
  padding-top: 20px;
  height:$box-height;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 40px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 10px;
    overflow: hidden;
    .dv-scr-board {
      width: 450px;
      height: 350px;
      cursor: pointer;
    }
  }
}
.el-row {
  margin-bottom: 5px;
}
.el-button {
  margin-right:10px;
  background: rgba(19, 25, 47, 0.6);
  color: #fdaa90;
  font-size:14px;
}
</style>
