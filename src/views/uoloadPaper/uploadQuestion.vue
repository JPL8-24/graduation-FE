<template>
    <div class="uploadQuestion">

        <div class="upload">
            <Upload :before-upload="handleUpload" action=''>
                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                <p>点击或拖拽题目文件(.json文件)</p>
            </Upload>
            <div v-if="file !== null">题目文件: {{ file.name }} </div>
        </div>
        <div class="button">
            <Button type="primary" @click.native="nextStep">上传</Button>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {
        Upload,
        Button,
        Icon,
        Notice
    } from 'iview'
    export default {
        name: '',
        data() {
            return {
                file: null,
                loadingStatus: false,
                questions: {}
            }
        },
        components: {
            Upload,
            Button,
            Icon,
            Notice
        },
        methods: {
            handleUpload(file) {
                let format = file.name.split('.')[1]
                if (format != 'json') {
                    Notice.warning({
                        title: 'The file format is incorrect',
                        desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
                    });
                } else {
                    this.file = file
                    let reader = new FileReader()
                    reader.readAsText(file)
                    reader.onloadend = () => {
                        this.questions = JSON.parse(reader.result)
                    }
                }
            },
            nextStep() {
                this.$emit('nextStep4', this.questions)
            }

        }
    }
</script>

<style scoped>
    .uploadQuestion {
        margin-top: 20px;
    }

    .upload {
        text-align: center;
    }

    .button {
        text-align: center;
    }
</style>