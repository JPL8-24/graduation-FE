<template>
    <div class="">
        <nav-header></nav-header>
        <div class="topic-publish">
            <input placeholder="帖子标题：一句话说明你遇到的问题或想分享的经验" v-model="title" />
        </div>
        <div class="remark">
            <div class="remark-content">
                请将帖子详细内容写入下列文本框，若内容不合理，帖子将被删除
            </div>

        </div>
        <div class="content-publish">
             <quill-editor v-model="des" ref="myQuillEditor"  class="editor"> </quill-editor> 
        </div>
        <div class="btn-group">
            <div class="btn  pre-btn" @click="go('/forum')">
                取消
            </div>
            <div class="btn next-btn" @click="AddForum">
                发布
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import NavHeader from "../../components/NavHeader";
    import tool from '../../tool.js'
    import {
        Input,
        Notice
    } from 'iview'
    import {
        mapState
    } from 'vuex'
    import {
        quillEditor
    } from 'vue-quill-editor'
    export default {
        name: '',
        data() {
            return {
                title: "",
                des: ""
            }
        },
        components: {
            NavHeader,
            Input,
            Notice,
            quillEditor
        },
        methods: {
            go(url) {
                this.$router.go(url)
            },
            AddForum() {
                let postID = tool.genID()
                const payload = {}
                payload.title = this.title
                payload.des = this.des
                payload.date = new Date().toLocaleString()
                payload.comments = []
                payload.user = {
                    userID: this.userID,
                    userName: this.userName,
                    portrait:this.portrait
                }
                payload.postID = postID
                this.$api.postAddForum(payload).then((res) => {
                    if (res.data.status === "1") {
                        Notice.success({
                            title: "发帖成功",
                            desc: "帖子已发布至论坛中"
                        })
                        this.$router.push('/forum')
                    }
                })
            }
        },
        computed: {
            ...mapState({
                userID: state => state.user.userID,
                userName: state => state.user.userName,
                portrait:state=>state.user.portrait
            })
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
        margin-top:60px;
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

    .editor{
        height: 500px;;
    }
</style>