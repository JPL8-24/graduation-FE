<template>
    <div>
        <Menu mode="horizontal" :theme="theme1" :active-name="activename">
            <div class="logo">
                <img src="../assets/川大.jpg">
            </div>
            <div>
                <MenuItem name="1" class="MenuItem">
                <Icon type="md-globe" />首页
                </MenuItem>
                <MenuItem name="2" class="MenuItem">
                <Icon type="ios-baseball-outline" />讨论区
                </MenuItem>
                <MenuItem name="3" class="MenuItem">
                <Icon type="ios-man-outline" />个人中心
                </MenuItem>
            </div>
            <div class="userInfo" @mouseover="menuShow" @mouseout="menuOut">
                <Avatar icon="ios-person" size="large" />
                <p>{{userName}}</p>
                <Icon type="ios-arrow-dropdown" size="24" />
                <transition name="fade">
                    <div class="A" v-if="menu">
                        <div class="listItem">
                            <Icon type="md-alert" size='14' />注销</div>
                    </div>
                </transition>
            </div>
        </Menu>
    </div>
</template>

<script type="text/ecmascript-6">
    import {
        Menu,
        MenuItem,
        Submenu,
        MenuGroup,
        Icon,
        Avatar,
        Notice
    } from "iview";
    import {
        mapState,
        mapMutations
    } from 'vuex'
    export default {
        name: "",
        data() {
            return {
                theme1: "primary",
                menu: false
            };
        },
        components: {
            Menu,
            MenuItem,
            Submenu,
            MenuGroup,
            Icon,
            Avatar,
            Notice
        },
        props: ["activename"],
        methods: {
            menuShow() {
                this.menu = true;
            },
            menuOut() {
                this.menu = false;
            },
            autoLogin() {
                this.$api.aotuLogin().then((res) => {
                    if (res.data.status === '1') {
                        this.changeUserInfo(res.data.data)
                    } else if(res.data.status === '2'){
                        Notice.error({
                            title:'自动登录失败',
                            desc:'token验证错误'
                        })
                    }
                    
                }).catch((err) => {

                });
            },
            ...mapMutations(['changeUserInfo'])
        },
        computed: {
            ...mapState({
                userName: state => state.user.userName,
            })
        },
        created() {
            this.autoLogin()
        }
    };
</script>

<style scoped>
    .ivu-menu {
        display: flex;
        justify-content: space-between;
    }

    .MenuItem {
        font-size: 16px;
    }

    .logo {
        height: 100%;
        width: 60px;
        border-bottom: 1px solid #2d8cf0;
        position: relative;
        left: 20%;
    }

    .logo>img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .userInfo {
        display: flex;
        margin-right: 30px;
        align-items: center;
        color: white;
        background-color: #62a8d1;
        padding: 8px;
        position: relative;
    }

    .ivu-avatar {
        margin-right: 10px;
    }

    .userInfo>p {
        margin-right: 6px;
    }

    .A {
        position: absolute;
        top: 100%;
        background: white;
        left: 0;
        width: 100%;
        transition: all 1s;
    }

    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity .5s;
    }

    .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-leave-to {
        opacity: 0;
    }

    .listItem {
        text-align: center;
        font-size: 12px;
        color: black;
        height: 40px;
        line-height: 40px;
    }

    .listItem:hover {
        background-color: lightgray;
    }
</style>