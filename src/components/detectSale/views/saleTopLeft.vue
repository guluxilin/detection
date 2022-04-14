<template>
    <div id="saleTopLeft">
          <div class="up">
            <el-row :gutter="20">
              <el-col :span="12">
      <div class="bg-color-black item">
        <p class="colorBlue" style="height:30px;font-size:30px;padding:10px">异常店铺数量</p>
        <div>
          <dv-digital-flop
            class="dv-dig-flop"
            :config="config1"
          />
        </div>
      </div>
      <div class="bg-color-black item">
        <p class="colorBlue" style="height:30px;font-size:30px;padding:10px">异常类别数量</p>
        <div>
          <dv-digital-flop
            class="dv-dig-flop"
            :config="config2"
          />
        </div>
      </div>
              </el-col>
              <el-col :span="12">
                <div class="bg-color-black item" style="height:400px">
        <p class="colorBlue" style="height:30px;font-size:30px;margin-top:150px">异常商品数量</p>
        <div>
          <dv-digital-flop
            class="dv-dig-flop"
            :config="config3"
          />
        </div>
      </div>
              </el-col>
            </el-row>
    </div>
    </div>
</template>
<script>
import sale from '@/mainData/sale'
export default {
  mounted () {
    this.config1.number.splice(0, 1, parseInt(sale.sumStore))
    this.config2.number.splice(0, 1, parseInt(sale.sumSort))
    this.config3.number.splice(0, 1, parseInt(sale.sumItem))
    this.config1 = { ...this.config1 }
    this.config2 = { ...this.config2 }
    this.config3 = { ...this.config3 }
  },
  data () {
    return {
      config1: { number: [100], style: {fontSize: 50} },
      config2: { number: [100], style: {fontSize: 50} },
      config3: { number: [100], style: {fontSize: 50} }
    }
  }
}
</script>
<style lang="scss" scoped>
#saleTopLeft {
  display: flex;
  flex-direction: column;
  .up {
    width: 100%;
    .item {
      border-radius: 6px;
      padding-top: 8px;
      margin-top: 8px;
      width: 100%;
      height: 200px;
      text-align: center;
      .dv-dig-flop {
        width: 100%;
        margin:auto;
      }
    }
  }
}
</style>
