<template>
    <div class="main">
        <NavHeader activename='3' @done='getUserPaperList();getUserPostList()'></NavHeader>
        <userTestList :testList='testList'></userTestList>
        <userPostList :postList='postList' @reloadPostList="getUserPostList"></userPostList>
    </div>
</template>

<script type="text/ecmascript-6">
    import NavHeader from '../../components/NavHeader'
    import userTestList from './userTestList'
    import userPostList from './userPostList'
    import {
        mapState
    } from 'vuex'
    import {
        Notice
    } from 'iview'
    export default {
        name: '',
        data() {
            return {
                testList: [],
                postList: []
            }
        },
        components: {
            NavHeader,
            userTestList,
            userPostList,
            Notice
        },
        mounted() {
            document.body.style.backgroundColor = '#eee'
        },
        methods: {
            getUserPaperList() {
                this.$api.getUserPaperList(this.userID).then(res => {
                    if (res.data.status === '1') {
                        this.testList = res.data.data
                    }
                })
            },
            async getUserPostList() {
                this.postList = []
                await this.$api.getUserPostList(this.userID).then(res => {
                    if (res.data.status === '1') {
                        res.data.data.forEach(element => {
                            this.$api.getPostDetail(element.postID).then((res) => {
                                this.postList.push(res.data.data)
                            })
                        });
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
    .main {
        width: 100%;
        overflow: hidden;
    }
</style>