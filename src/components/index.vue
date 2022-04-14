<template>
    <div id="index" ref="appRef">
       <div class="bg">
          <dv-loading v-if="loading">Loading...</dv-loading>
           <div v-else class="host-body">
              <div class="d-flex jc-center">
          <dv-decoration-10 class="dv-dec-10" />
          <div class="d-flex jc-center">
            <dv-decoration-8 class="dv-dec-8" :color="decorationColor" />
            <div class="title">
              <span class="title-text">异常商品识别系统</span>
              <dv-decoration-6
                class="dv-dec-6"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
              />
            </div>
            <dv-decoration-8
              class="dv-dec-8"
              :reverse="true"
              :color="decorationColor"
            />
          </div>
          <dv-decoration-10 class="dv-dec-10-s" />
        </div>

           <!-- 导航栏 -->
        <div class="d-flex jc-between px-2" style="  cursor: pointer;">
          <div class="d-flex aside-width">
            <div class="react-left ml-4 react-l-s" :style="{ backgroundColor: choose[0]}" @click="chooseChange(0)">
              <span class="react-left" :style="{ backgroundColor: choose[0]}"></span>
              <span class="text">首页管理</span>
            </div>
            <div class="react-left ml-3" :style="{ backgroundColor: choose[1]}" @click="chooseChange(1)">
              <span class="text">数据预处理</span>
            </div>
          </div>
          <div class="d-flex aside-width">
            <div class="react-right mr-3" :style="{ backgroundColor: choose[2]}" @click="chooseChange(2)">
              <span class="text fw-b">价格异常识别</span>
            </div>
            <div class="react-right mr-4 react-l-s" :style="{ backgroundColor: choose[3]}" @click="chooseChange(3)">
              <span class="react-after" :style="{ backgroundColor: choose[3]}"></span>
              <span class="text"
                >销量异常识别</span
              >
            </div>
          </div>
        </div>
        <div class="body-box">
            <pre-handle v-if="chooseflag[1]"></pre-handle>
            <home-page v-if="chooseflag[0]"></home-page>
            <detect-price v-if="chooseflag[2]"></detect-price>
            <detect-sale v-if="chooseflag[3]"></detect-sale>
        </div>
           </div>
       </div>
       </div>
</template>
<script>
import drawMixin from './utils/drawMixin'
import { formatTime } from './utils/index.js'
import PreHandle from './preHandle/preHandle.vue'
import homePage from './HomePage/homePage.vue'
import DetectPrice from './detectPrice/detectPrice.vue'
import DetectSale from './detectSale/detectSale.vue'
export default {
  mixins: [ drawMixin ],
  data () {
    return {
      timing: null,
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      decorationColor: ['#568aea', '#000000'],
      choose: ['#1a5cd7', '#0f1325', '#0f1325', '#0f1325'],
      chooseflag: [true, false, false, false]
    }
  },
  components: {
    PreHandle,
    homePage,
    DetectPrice,
    DetectSale
  },
  mounted () {
    this.timeFn()
    this.cancelLoading()
  },
  beforeDestroy () {
    clearInterval(this.timing)
  },
  methods: {
    timeFn () {
      this.timing = setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH: mm: ss')
        this.dateYear = formatTime(new Date(), 'yyyy-MM-dd')
        this.dateWeek = this.weekday[new Date().getDay()]
      }, 1000)
    },
    cancelLoading () {
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    chooseChange (val) {
      for (let i = 0; i < 4; i++) {
        if (i !== val) { this.choose.splice(i, 1, '#0f1325'); this.chooseflag.splice(i, 1, false) } else { this.choose.splice(i, 1, '#1a5cd7'); this.chooseflag.splice(i, 1, true) }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
</style>
