<template>
    <div class="pageContainer">
        <div class="pageItem" v-for="(item,index) in analyzeQuestion" :key="index"
            :class="{right:item.isRight,false:!item.isRight,check:item.type=='3'}" @click='AnalyzeIndex(index)'>
            {{item.index}}
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {
        mapMutations,
        mapState
    } from 'vuex'
    export default {
        name: '',
        data() {
            return {
            }
        },
        components: {},
        props: [],
        methods: {
            ...mapMutations([
                'setAnalyzeIndex'
            ]),
            AnalyzeIndex(index){
                this.setAnalyzeIndex(index)

            }
        },
        computed: {
            ...mapState({
                analyzeQuestion: state => state.analyze.analyzeQuestion
            })
        }
    }
</script>

<style scoped>
    .pageContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        box-sizing: border-box;
        margin: 20px auto;
        width: 86%;
    }

    .pageItem {
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 6px;
        margin-right: 8px;
        margin-bottom: 6px;
        cursor: pointer;
    }


    .false {
        background: lightcoral;
        color: white
    }

    .right {
        background: #59b59c;
        color: white;
    }

    .check {
        background: #2d8cf0;
        color: white;
    }
</style>