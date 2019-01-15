<template>
    <div class="main">
        <nav-header activename='2'></nav-header>
        <div class="container">
            <div class="header">

            </div>


        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import NavHeader from '../../components/NavHeader'
    export default {
        name: '',
        data() {
            return {}
        },
        components: {
            NavHeader
        }
    }
</script>

<style scoped>
    .container {
        width: 60%;
        height: 500px;
        margin: 20px auto;
        background: white;
        border-radius: 10px;
    }

    .main {
        background: #eee;
        width: 100%;
        height: 100%;
    }
    .header{
        display: flex;
        height: 40px;
        border-radius: 10px;
        padding: 10px;
    }
</style>