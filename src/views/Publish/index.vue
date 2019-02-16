<template>
    <div class="">
        <nav-header></nav-header>
        <div class="topic-publish">
            <input placeholder="帖子标题：一句话说明你遇到的问题或想分享的经验" />
        </div>
        <div class="remark">
            <div class="remark-content">
                请将帖子详细内容写入下列文本框，若内容不合理，帖子将被删除
            </div>

        </div>
        <div class="content-publish">
            <Input type="textarea" rows=30 />
        </div>
        <div class="btn-group">
            <div class="btn  pre-btn">
                取消
            </div>
            <div class="btn next-btn">
                发布
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import NavHeader from "../../components/NavHeader";
    import {
        Input
    } from 'iview'
    export default {
        name: '',
        data() {
            return {}
        },
        components: {
            NavHeader,
            Input
        }
    }
</script>

<style scoped>
    .topic-publish input {
        display: inline-block;
        vertical-align: middle;
        text-align: left;
        font: 200 30px/40px "microsoft yahei";
        height: 40px;
        overflow: hidden;
        border: none;
        white-space: nowrap;
        width: 100%;
    }

    .topic-publish {
        padding: 0 20px 10px;
        margin-top: 20px;
    }

    .content-publish {
        padding: 10px 20px;
    }

    .remark {
        padding: 10px 20px;
    }

    .remark-content {
        background-color: #fff1ed;
        min-width: 20%;
        display: inline-block;
        padding: 5px 10px;
        color: #ff5000;
    }

    .btn-group {
        display: flex;
        justify-content: center;
        padding-bottom: 30px;
    }

    .btn {
        display: inline-block;
        text-align: center;
        padding: 10px 0;
        width: 110px;
        color: #fff;
        font-size: 14px;
        border-radius: 3px;
        border: none 0;
        cursor: pointer;
        line-height: normal;
        outline: 0;
        white-space: nowrap;
    }

    .pre-btn {
        background: #ff6547;
        margin-right: 15px;
    }

    .next-btn {
        background: #22ae90;
    }
</style>