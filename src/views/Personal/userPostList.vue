<template>
    <div class="userPostList_container">
        <div class="title">
            <Icon type="logo-freebsd-devil" size='18' />你的发帖列表</div>
        <div class="postList">
            <div class="postItem" v-for="(item) in postList" :key="item.postID" @click="goDetail(item.postID)">
                <div class="Itemtitle">{{item.title}}</div>
                <div class="time">{{item.date}}</div>
                <div class="commetCount">{{item.comments.length}}</div>
                <Button type="error" class="delect-btn" @click.native.stop="modal=true">删除</Button>
                <Modal v-model="modal" title="是否确定删除本帖子" @on-ok="removePost(item.postID)" @on-cancel="modal=false">
                    <p>删除帖子后帖子不能恢复</p>
                </Modal>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {
        Icon,
        Button,
        Modal,
        Notice
    } from 'iview'
    import {
        mapState
    } from 'vuex'
    export default {
        name: '',
        data() {
            return {
                modal: false

            }
        },
        components: {
            Icon,
            Button,
            Modal,
            Notice
        },
        props: ['postList'],
        methods: {
            goDetail(postID) {
                this.$router.push(`/forumDetail?postID=${postID}`)
            },
            removePost(postID) {
                this.$api.postRemovePost(this.userID, postID).then(res => {
                    if (res.data.status === '1') {
                        this.$emit('reloadPostList')
                        Notice.success({
                            title: "成功删除帖子"
                        })
                    }
                })
            }
        },
        computed: {
            ...mapState({
                userID: state => state.user.userID
            })
        }
    }
</script>

<style scoped>
    .userPostList_container {
        width: 60%;
        background: white;
        margin: 40px auto;
        border-radius: 8px;
        padding: 20px;
        /* min-height: 150px; */
    }

    .title {
        font-size: 18px;
        font-weight: bold;
        padding: 10px;
        border-bottom: 1px solid #2d8cf0;
    }

    .title>.ivu-icon {
        margin-right: 4px;
    }

    .postList {
        margin-bottom: 20px;
    }

    .postItem {
        display: flex;
        align-items: center;
        padding: 10px;
        box-sizing: border-box;
        cursor: pointer;
        border-bottom: 1px solid #d4d4d4;
        margin: 10px;
        position: relative;
    }

    .Itemtitle {
        font-size: 15px;
        font-weight: 600;
        margin-right: 50px;
    }

    .time {
        font-size: 13px;
        font-weight: 200;
        margin-right: 50px;
        position: absolute;
        left: 250px;
    }

    .commetCount {
        font-size: 15px;
        border-radius: 50%;
        border: 1px solid lightblue;
        height: 40px;
        width: 40px;
        line-height: 40px;
        text-align: center;
        position: absolute;
        left: 800px;

    }

    .delect-btn {
        position: absolute;
        left: 1000px;
    }
</style>