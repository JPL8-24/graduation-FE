<template>
    <div class="">
        <NavHeader></NavHeader>
        <div class="container">
            <Upload :before-upload="handleUpload" action="//jsonplaceholder.typicode.com/posts/">
                <Button icon="ios-cloud-upload-outline">Select the file to upload</Button>
            </Upload>
            <div v-if="file !== null">Upload file: {{ file.name }} <Button type="text" @click="upload"
                    :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : 'Click to upload' }}</Button></div>
            <div class="img-box">
                <img src="" class="img" />
            </div>
            <Upload :before-upload="handleUpload" action="//jsonplaceholder.typicode.com/posts/">
                <Button icon="ios-cloud-upload-outline">Select the file to upload</Button>
            </Upload>
            <div v-if="file !== null">Upload file: {{ file.name }} <Button type="text" @click="upload"
                    :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : 'Click to upload' }}</Button></div>
        </div>

    </div>
</template>

<script type="text/ecmascript-6">
    import NavHeader from '../../components/NavHeader'
    import {
        Upload,
        Button,
        Notice
    } from 'iview'
    import {
        mapState,
        mapMutations
    } from 'vuex'
    export default {
        name: '',
        data() {
            return {
                file: null,
                loadingStatus: false,
            }
        },
        components: {
            NavHeader,
            Upload,
            Button
        },
        methods: {
            handleUpload(file) {
                this.file = file;
                const reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onloadend = function (e) {
                    document.getElementsByClassName('img')[0].src = reader.result
                }
                return false;
            },
            upload() {
                let formDate = new FormData()
                formDate.append('file', this.file, 'file')
                this.$api.postUploadPortrait(formDate).then(res1 => {
                    if (res1.data.status === "1") {
                        this.$api.postModifyPortrait(this.userID, res1.data.data).then(res2 => {
                            if (res2.data.status === "1") {
                                this.changeUserInfo(res2.data.data)
                                Notice.success({
                                    title: "修改头像成功"
                                })
                                setTimeout(() => {
                                    if (this.type === 1) {
                                        this.$router.push('/Thome')
                                    } else if (this.type === 0) {
                                        this.$router.push('/home')
                                    }
                                }, 1500)

                            }
                        })
                    }
                })

            },
            ...mapMutations(['changeUserInfo'])
        },
        mounted() {
            document.body.style.backgroundColor = '#eee'
        },
        computed: {
            ...mapState({
                userID: state => state.user.userID,
                type: state => state.user.type
            })
        }
    }
</script>

<style scoped>
    .container {
        width: 60%;
        min-height: 100px;
        background: white;
        margin: 20px auto;
        border-radius: 8px;
        padding: 20px;
    }

    .img-box {
        width: 200px;
        height: 200px;
    }

    .img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
</style>