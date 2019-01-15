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
                <Icon type="ios-baseball-outline"/>讨论区
                </MenuItem>
                <MenuItem name="3" class="MenuItem">
                <Icon type="ios-man-outline" />个人中心
                </MenuItem>
            </div>
            <div class="userInfo">
                <Avatar icon="ios-person" size="large" />
                <p>userName</p>
                <Icon type="ios-arrow-dropdown" size="24" />
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
        Avatar
    } from 'iview'
    export default {
        name: '',
        data() {
            return {
                theme1: 'primary'
            }
        },
        components: {
            Menu,
            MenuItem,
            Submenu,
            MenuGroup,
            Icon,
            Avatar
        },
        props: ['activename']
    }
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

    }

    .ivu-avatar {
        margin-right: 10px;
    }

    .userInfo>p {
        margin-right: 6px;
    }
</style>