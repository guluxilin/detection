<template>
    <div id="saleTopRight">
      <el-row>
        <el-col :span="12">
        <div style="text-align:center">
          <span style="font-size:20px;">异常店铺比例</span>
          <saleTopRight
            :id="rate[0].id"
            :tips="rate[0].tips"
            :colorObj="rate[0].colorData"
          />
        </div>
        </el-col>
        <el-col :span="12">
        <div style="text-align:center">
          <span style="font-size:20px;">异常类别比例</span>
          <saleTopRight
            :id="rate[1].id"
            :tips="rate[1].tips"
            :colorObj="rate[1].colorData"
          />
        </div>
        </el-col>
      </el-row>
      <el-row>
       <div style="text-align:center;height:180px">
          <span style="font-size:20px;">异常商品比例</span>
        <div style="width:80%;margin:auto">
          <dv-water-level-pond  :config="water" />
        </div>
       </div>
      </el-row>
    </div>
</template>
<script>
import saleTopRight from '@/components/echart/detectSale/saleTopRight'
import sale from '@/mainData/sale'
export default {
  components: {saleTopRight},
  mounted () {
    this.water.data.push(parseFloat(sale.abnormalItem).toFixed(2))
    this.rate[0].tips = parseFloat(sale.abnormalStoreRate).toFixed(2)
    this.rate[1].tips = parseFloat(sale.abnormalSortRate).toFixed(2)
    this.water = { ...this.water }
  },
  data () {
    return {
      water: {
        data: [],
        shape: 'roundRect',
        formatter: '{value}%',
        waveNum: 3
      },
      // 通过率和达标率的组件复用数据
      rate: [
        {
          id: 'centerRate1',
          tips: 60,
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
        },
        {
          id: 'centerRate2',
          tips: 40,
          colorData: {
            textStyle: '#67e0e3',
            series: {
              color: ['#faf3a378', 'transparent'],
              dataColor: {
                normal: '#ff9800',
                shadowColor: '#fcebad'
              }
            }
          }
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
#saleTopRight {
  display: flex;
  flex-direction: column;
  height:400px;
  width:100%;
  padding-top:20px;
}
</style>
