<template>
    <div class="fillInfo">
        <Form :label-width="100" label-position='left'>
            <FormItem label="试卷标题">
                <Input v-model="title" placeholder="试卷标题" />
            </FormItem>
            <FormItem label="试卷难度评分">
                <InputNumber :max="5" :min="0" v-model="paperRate"></InputNumber>
            </FormItem>
            <FormItem label="参与学生(以空格分隔)">
                <Input v-model="students" placeholder="参与学生列表，输入学生id，以空格分隔学生id" />
            </FormItem>
            <FormItem>
                <Button type="primary" @click.native="nextStep">下一步</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script type="text/ecmascript-6">
    import {
        Form,
        FormItem,
        Button,
        Input,
        InputNumber,
        Notice
    } from 'iview';
    export default {
        name: '',
        data() {
            return {
                title: '',
                paperRate: 0,
                students:''
            }
        },
        components: {
            Form,
            FormItem,
            Button,
            Input,
            InputNumber
        },
        methods: {
            nextStep() {
                if(this.title=='' && this.students=='') {
                    Notice.error({
                        title:'信息不能为空'
                    })
                    return
                } else {
                    this.$emit('nextStep2',{
                        title:this.title,
                        paperRate:this.paperRate,
                        StudentList:this.students.split(' ')
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .fillInfo {
        margin-top: 20px;
    }
</style>