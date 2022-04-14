<template>
  <div id="absence">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
        </span>
        <div style="height:60px;width:100%">
          <el-row>
            <el-col :span="11">
          <span style="color:#70d9bd;font-size:20px">类别缺失</span>
            </el-col>
            <el-col :span="13">
              <el-button size="small" @click="configChange(1)">缺失</el-button>
              <el-button size="small" @click="configChange(2)">补全</el-button>
            </el-col>
          </el-row>
          <el-row>
            <span style="color:#c3cbde;font-size:16px">店铺->商品</span>
          </el-row>
        </div>
      </div>
      <div class="d-flex jc-center body-box" v-if="configChange1">
        <dv-scroll-board class="dv-scr-board" :config="config1" @click="getTableValue"/>
      </div>
      <div class="d-flex jc-center body-box" v-if="configChange2">
        <dv-scroll-board class="dv-scr-board" :config="config2" @click="getTableValue"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    absenceSort: {
      type: Array,
      default: () => ([])
    },
    absenceData: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      config1: {
        header: ['店铺', '类别', '商品'],
        data: [],
        rowNum: 7, // 表格行数
        headerHeight: 35,
        headerBGC: '#0f1325', // 表头
        oddRowBGC: '#0f1325', // 奇数行
        evenRowBGC: '#171c33', // 偶数行
        index: true,
        columnWidth: [50],
        align: ['center'],
        waitTime: 1300
      },
      config2: {
        header: ['店铺', '类别', '商品'],
        data: [],
        rowNum: 7, // 表格行数
        headerHeight: 35,
        headerBGC: '#0f1325', // 表头
        oddRowBGC: '#0f1325', // 奇数行
        evenRowBGC: '#171c33', // 偶数行
        index: true,
        columnWidth: [50],
        align: ['center'],
        waitTime: 1300
      },
      configChange1: true,
      configChange2: false
    }
  },
  watch: {
    absenceSort (val) {
      for (let i = 0; i < Object.keys(val).length; i++) {
        let a1 = [val[i].storeName, val[i].sort, val[i].itemName]
        let a2 = [val[i].storeName, val[i].sortfilled, val[i].itemName]
        this.config1.data.push(a1)
        this.config2.data.push(a2)
      }
    }
    /*   absenceData (val) {
      for (let i = 0; i < Object.keys(val).length; i++) {
        let a = [val[i].storeName, val[i].sort, val[i].itemName]
        this.config2.data.push(a)
      }
    }
    */
  },
  methods: {
    getTableValue (value) {
      console.log(value)
    },
    configChange (value) {
      if (value === 1) {
        this.configChange1 = true
        this.configChange2 = false
      }
      if (value === 2) {
        this.configChange1 = false
        this.configChange2 = true
      }
      console.log(this.configChange1)
      console.log(this.configChange2)
    }
  }
}
</script>

<style lang="scss" scoped>
$box-height: 400px;
$box-width: 500px;
#absence {
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
      height: 300px;
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
