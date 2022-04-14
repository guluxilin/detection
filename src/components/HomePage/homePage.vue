<template>
    <div id="homePage">
        <el-row :gutter="30">
            <el-col :span="16">
                <dv-border-box-13>
                    <top-left></top-left>
                </dv-border-box-13>
            </el-col>
            <el-col :span="8">
                <dv-border-box-13>
                    <top-right></top-right>
                </dv-border-box-13>
            </el-col>
        </el-row>
        <el-row :gutter="30" style="margin-top:30px">
            <el-col :span="10">
                <dv-border-box-13>
                    <bottom-left :item="item"></bottom-left>
                </dv-border-box-13>
            </el-col>
            <el-col :span="6">
                <dv-border-box-13>
                    <bottom-center @sendMessage="getMessage"></bottom-center>
                </dv-border-box-13>
            </el-col>
            <el-col :span="8">
                <dv-border-box-13>
                   <bottom-right></bottom-right>
                </dv-border-box-13>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import BottomCenter from './views/bottomCenter.vue'
import BottomLeft from './views/bottomLeft.vue'
import BottomRight from './views/bottomRight.vue'
import topLeft from './views/topLeft.vue'
import topRight from './views/topRight.vue'
import main from '@/mainData/main'
export default {
  components: {topLeft, topRight, BottomRight, BottomLeft, BottomCenter},
  data () {
    return {
      tableValue: {},
      item: []
    }
  },
  methods: {
    getMessage (value) {
      let flag = 0
      for (let i = 0; i < Object.keys(main.abnormalDetail).length; i++) {
        for (let j = 0; j < Object.keys(main.abnormalDetail[i].itemDetail).length; j++) {
          if (value.row[2] === main.abnormalDetail[i].itemDetail[j].itemName) {
            this.item.unshift(main.abnormalDetail[i].itemDetail[j])
            flag = 1
            break
          }
        }
        if (flag === 1) { break }
      }
    }
  }
}
</script>
