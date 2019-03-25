<template>
    <div class="pageContainer">
        <div class="pageItem" v-for="(item,index) in checkQuestion" :key="index" :class="{right:item.isRight,false:!item.isRight,check:item.type=='3'}"  @click='setCheckIndex({index})'>
            {{item.index}}
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import {mapMutations} from 'vuex'
    export default {
        name: '',
        data() {
            return {
                ns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
            }
        },
        components: {},
        props: ['checkQuestion'],
        methods: {
            ...mapMutations([
                'setCheckIndex'
            ])
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