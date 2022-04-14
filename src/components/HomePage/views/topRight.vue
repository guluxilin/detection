<template>
     <div id="topRight">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
        </span>
        <div style="height:30px;width:100%">
          <el-row>
            <el-col :span="8">
          <span style="color:#70d9bd;font-size:20px">异常商品比例</span>
            </el-col>
            <el-col :span="16">
               <dv-decoration-3 class="dv-dec-3" />
            </el-col>
          </el-row>
        </div>
      </div>
    <div>
      <dv-water-level-pond :config="config" style="width:200px;height:200px;margin:auto;margin-top:20px" />
     </div>
     <el-row style="margin-top:30px;text-align:center">
       <el-col :span="12">
         <i class="el-icon-s-shop" style="color:#70d9bd;font-size:30px"></i>
         <span style="font-size:20px;margin-left:10px">商品总数</span>
       </el-col>
       <el-col :span="12">
         <i class="el-icon-s-shop" style="color:#70d9bd;font-size:30px"></i>
         <span style="font-size:20px;margin-left:10px">异常商品总数</span>
       </el-col>
     </el-row>
     <el-row style="margin-top:10px;text-align:center;font-size:30px;font-weight:700;color:#2c66f1;margin-left:20px">
       <el-col :span="12">
         <span >{{sumItem}}</span>
       </el-col>
       <el-col :span="12">
         <span >{{abnormalItem}}</span>
       </el-col>
     </el-row>
      <!-- 4个主要的数据 -->
    </div>
  </div>
</template>
<script>
import main from '@/mainData/main'
export default {
  components: {},
  mounted () {
    this.config.data.splice(0, 1, parseFloat(main.sumRate).toFixed(2))
    this.config = { ...this.config }
    this.sumItem = main.sumItem
    this.abnormalItem = main.sumAbnormalItem
  },
  data () {
    return {
      sumItem: 0,
      abnormalItem: 0,
      config: {data: [66]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$box-width: 1200px;
$box-height: 400px;

#topRight {
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
