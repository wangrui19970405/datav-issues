<template>
  <div class="container">
    <dv-full-screen-container>
      <el-container style="width: 100%;height: 100%">
        <el-header class="container-header">
          <el-row>
            <el-col :span="8">
              <dv-decoration1 style="width:60%;height:100%;float: left;margin-left:10%" :color="['#ffffff','#15a1d3']"/>
            </el-col>
            <el-col :span="8">
              <dv-decoration-11 style="width:100%;height:80px;">
                <dv-decoration7 style="width:100%;height:50px;">
                  <div style="font-family: 'JetBrainsMono Nerd Font Mono',serif;font-size: 24px">
                    <dv-decoration6 style="width:300px;height:30px;" :color="['#ffffff','#f1164e']"/>
                  </div>
                </dv-decoration7>
              </dv-decoration-11>
              <!--              <dv-decoration5 class="header-title" :dur="2"/>-->
            </el-col>
            <el-col :span="8">
              <!--              <dv-decoration8 :reverse="true" style="width:300px;height:50px;float: right"/>-->
              <dv-decoration3 style="width:60%;height:100%;margin-left: 25%"/>
            </el-col>
          </el-row>
        </el-header>
        <el-main class="container-main">
          <el-row class="container-main-box">
            <el-col :span="8">
              <!--              第一排第一列-->
              <dv-border-box4>
                <div class="box-container">
                  <dv-capsule-chart :config="config" style="width:80%;height:80%"/>
                </div>
              </dv-border-box4>
            </el-col>
            <el-col :span="8">
              <!--              总值信息-->
              <person/>
            </el-col>
            <el-col :span="8">
              <!--              第一排第三列-->
              <dv-border-box4 :reverse="true">
                <div class="box-container">
                  dv-border-box4
                </div>
              </dv-border-box4>
            </el-col>
          </el-row>
          <el-row class="container-main-box">
            <el-col :span="8">
              <dv-border-box1>
                <div class="box-container">
                  dv-box1
                </div>
              </dv-border-box1>
            </el-col>
            <el-col :span="8">
              <!--              第二排第二列-->
              <dv-flyline-chart-enhanced :config="maoConfig" :dev="true"/>
            </el-col>
            <el-col :span="8">
              <dv-border-box1>
                <div class="box-container">
                  dv-box1
                </div>
              </dv-border-box1>
            </el-col>
          </el-row>
          <el-row class="container-main-box">
            <el-col :span="8">
              <dv-border-box6>
                <div class="box-container">
                  dv-border-box13
                </div>
              </dv-border-box6>
            </el-col>
            <el-col :span="8">
              <dv-border-box6>
                <div class="box-container">
                  <!--                  第三排第二列-->
                  <dv-scroll-ranking-board :config="rank_config" style="width:80%;height:80%;position: relative"/>
                </div>
              </dv-border-box6>
            </el-col>
            <el-col :span="8">
              <dv-border-box6 :reverse="true">
                <div class="box-container">
                  dv-border-box13
                </div>
              </dv-border-box6>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </dv-full-screen-container>
  </div>
</template>

<script setup>
import { ref, reactive, watch, computed, onMounted, onBeforeUnmount } from 'vue'
import Person from '@/view/datav/components/person/person.vue'

const maoConfig = reactive({
  points: [
    {
      name: '1号门',
      coordinate: [0.92, 0.77],
      halo: {
        show: true,
      },
    },
    {
      name: '2号们',
      coordinate: [0.07, 0.80],
      halo: {
        show: true,
      },
      text: {
        show: true,
      },
    },
  ],
  line: [
    {
      source: '2号们',
      target: '1号门',
    },
  ],
  icon: {
    show: true,
    src: 'https://huaduogiegie.oss-cn-shanghai.aliyuncs.com/picgo/202304201128318.png',
  },
  text: {
    show: true,
  },
  k: 0.5,
  bgImgSrc: 'https://huaduogiegie.oss-cn-shanghai.aliyuncs.com/picgo/202304201121328.png',
})

const rank_config = reactive({
  data: [
    {
      name: '小菜园',
      value: 167,
    },
    {
      name: '辣椒炒肉',
      value: 123,
    },
    {
      name: '苏南坡',
      value: 98,
    },
    {
      name: '三福',
      value: 75,
    },
    {
      name: '小龙坎',
      value: 66,
    },
    {
      name: '测试数据',
      value: 100,
    },
  ],
  unit: '万元',
})

const config = reactive({
  data: [
    {
      name: '小菜园',
      value: 167,
    },
    {
      name: '辣椒炒肉',
      value: 123,
    },
    {
      name: '苏南坡',
      value: 98,
    },
    {
      name: '三福',
      value: 75,
    },
    {
      name: '小龙坎',
      value: 66,
    },
    {
      name: '测试数据',
      value: 100,
    },
  ],
  colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
  unit: '万元',
})
</script>

<style lang="scss" scoped>
.box-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%
}

.container {
  margin: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #8d655c;
  color: #FFFFFF;
  // 自动上下拉伸撑满屏幕
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  background-image: url("./images/bg.png");

  .container-header {
    .header-title {
      width: 100%;
      height: 50px;
    }
  }

  .container-main {
    //height: 70%;
    .container-main-box {
      top: 8%;
      height: 31%;
    }
  }
}
</style>
