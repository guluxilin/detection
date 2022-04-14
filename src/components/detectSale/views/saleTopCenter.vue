<template>
  <div id="priceBottomLeft">
    <div>
      <div class="d-flex pt-2 pl-2">
        <span>
        </span>
        <div style="height:30px;width:100%">
          <el-row>
            <el-col :span="5">
          <span style="color:#70d9bd;font-size:20px">异常类别详情</span>
            </el-col>
            <el-col :span="19">
               <dv-decoration-3 class="dv-dec-3" />
            </el-col>
          </el-row>
        </div>
      </div>
      <div>
        <saleTopCenter></saleTopCenter>
      </div>
      <!-- 4个主要的数据 -->
    </div>
  </div>
</template>

<script>
import saleTopCenter from '@/components/echart/detectSale/saleTopCenter'
export default {
  data () {
    return {
    }
  },
  components: {
    saleTopCenter
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
$box-width: 1200px;
$box-height: 400px;

#priceBottomLeft {
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
