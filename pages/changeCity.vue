<template>
    <div class="page-changeCity">
        <el-row>
            <el-col :span="24">
                <select-by-province/>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24"></el-col>
        </el-row>
        <el-row>
            <el-col :span="24"></el-col>
        </el-row>
    </div>
</template>
<script>
import SelectByProvince from "@/components/changeCity/selectByProvince.vue"
export default {
    components:{
        SelectByProvince
    }
}
</script>
<style lang="scss">

</style>