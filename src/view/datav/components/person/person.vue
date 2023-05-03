<template>
  <el-row style="position: relative;width: 100%;height: 100%">
    <el-col :span="8">
      <dv-decoration-9 style="width:115%;height:90%;float: left;">
        <el-avatar class="content"
                   src="https://huaduogiegie.oss-cn-shanghai.aliyuncs.com/picgo/202112221132141.png"
        />
      </dv-decoration-9>

    </el-col>
    <el-col :span="16">
      <dv-border-box13 style="height: 80%;width: 85%;left: 10%;top:5%">
        <el-row style="width: 100%;height: 35%;position: relative;top: 10%">
          <el-col :span="24">
            <div class="box-container-person">
              <div style="font-size: 38px;font-family: HarmonyOS"><el-icon color="#5cacea"><Avatar /></el-icon> 王锐</div>
            </div>
          </el-col>
        </el-row>
        <el-row style="width: 100%;height: 38%;position: relative">
          <el-col :span="24">
            <div class="box-container-person">
              <div style="font-size: 36px;font-family: HarmonyOS"><el-icon color="#5cacea"><Iphone /></el-icon> 18360500891</div>
            </div>
          </el-col>
        </el-row>
        <el-row style="width: 100%">
          <el-col>
            <dv-decoration6 style="width:75%;height:10px;top: 10%;left: 11.5%;position: relative"/>
          </el-col>
        </el-row>
      </dv-border-box13>
    </el-col>
  </el-row>
</template>

<script setup>

</script>

<style scoped>
.box-container-person {
    display: flex;
    flex: 1;
    align-items: center;
    float: left;
    margin-left: 10%;
    margin-top: 5%;
}
.content {
    height: 50%;
    width: 50%;
    /*background: #5cacea;*/
    background: #020b2a;
}
</style>
