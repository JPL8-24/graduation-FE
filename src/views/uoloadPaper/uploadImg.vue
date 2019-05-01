<template>
    <div class="uploadImg">
        <div class="img-box">
            <img id='img' src="../../assets/封面信息.png">
        </div>
        <div class="upload">
            <Upload :before-upload="handleUpload" action=''>
                <Button icon="ios-cloud-upload-outline">请选择一张图片上传</Button>
            </Upload>
            <div v-if="file !== null">Upload file: {{ file.name }} <Button type="text" @click="upload"
                    :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : 'Click to upload' }}</Button></div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {
        Upload,
        Button,
        Notice
    } from 'iview'
    export default {
        name: '',
        data() {
            return {
                file: null,
                loadingStatus: false
            }
        },
        components: {
            Upload,
            Button,
            Notice
        },
        methods: {
            handleUpload(file) {
                let format = file.name.split('.')[1]
                if (format != 'jpg' && format != 'jpeg' && format != 'png') {
                    Notice.warning({
                        title: 'The file format is incorrect',
                        desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
                    });
                } else {
                    this.file = file
                    const reader = new FileReader()
                    reader.readAsDataURL(file)
                    reader.onloadend = function (e) {
                        document.getElementById('img').src = reader.result
                    }
                }
                return false;
            },
            upload() {
                let formDate = new FormData()
                formDate.append('file', this.file, 'file')
                this.$api.postUploadPortrait(formDate).then(res1 => {
                    if (res1.data.status === "1") {
                        this.$emit('nextStep3', res1.data.data)
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .uploadImg {
        margin-top: 20px
    }

    .upload {
        margin: 10px auto;
        text-align: center;
    }

    .img-box {
        width: 80px;
        height: 80px;
        margin: 0 auto;
    }

    #img {
        height: 100%;
        width: 100%;

    }
</style>