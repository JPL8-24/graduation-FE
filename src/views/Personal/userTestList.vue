<template>
    <div class="userTestList_container">
        <div class="title">
            <Icon type="ios-boat" size='18' />你的考试列表</div>
        <div class="List">
            <div class="Item" v-for="item in testList" :key="item.paperID"
                @click="goToAnalyze(item.paperID,item.userID)">
                <div class="img"><img :src="item.img"></div>
                <div class="test_title">{{item.title}}</div>
                <div class="test_title">{{item.doneTime}}</div>
                <div class="checked" v-if="item.isChecked">已批改</div>
                <div class="noCheck" v-else>已批改</div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {
        Icon
    } from 'iview'

    export default {
        name: '',
        data() {
            return {

            }
        },
        components: {
            Icon
        },
        props: ['testList'],
        methods: {
            goToAnalyze(paperID, userID) {
                this.$router.push(`/analyze?paperID=${paperID}&userID=${userID}`)
            }
        }
    }
</script>

<style scoped>
    .userTestList_container {
        width: 60%;
        background: white;
        min-height: 100px;
        margin: 20px auto;
        border-radius: 8px;
        padding: 20px;

    }

    .title {
        font-size: 18px;
        font-weight: bold;
        padding: 10px;
        border-bottom: 1px solid #2d8cf0;
    }

    .List {
        width: 100%;
    }

    .Item {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        padding: 10px;
        align-items: center;
        cursor: pointer;
        border-bottom: 1px solid lightgray;
    }

    .img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        line-height: 50px;
        margin-right: 50px;
    }

    .img>img {
        width: 100%;
        height: 100%;
    }

    .test_title {
        font-size: 15px;
        font-weight: 600;
        margin-right: 50px;
    }

    .checked {
        font-size: 15px;
        font-weight: 600;
        color: #59b59c;
        margin-left: 80px;
    }

    .noCheck {
        font-size: 15px;
        font-weight: 600;
        color: #fd8321;
        margin-left: 80px;
    }
</style>