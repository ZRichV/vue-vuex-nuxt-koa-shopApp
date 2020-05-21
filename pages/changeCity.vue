<template>
    <div class="page-changeCity">
        <el-row>
            <el-col :span="24">
                <select-by-province/>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <hot-city/>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <categroy-city/>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import SelectByProvince from "@/components/changeCity/selectByProvince.vue"
import HotCity from '@/components/changeCity/hotCity.vue';
import CategroyCity from '@/components/changeCity/categroyCity.vue';
export default {
    components:{
        SelectByProvince,
        HotCity,
        CategroyCity
    }
}
</script>
<style lang="scss">

</style>