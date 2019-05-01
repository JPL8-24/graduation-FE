<template>
  <div class="main">
    <NavHeader></NavHeader>
    <div class="forum_content">
      <h2 class="content-title">{{postDetail.title}}</h2>
      <div class="content-author">
        <div class="avatar">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-icon30"></use>
          </svg>
        </div>
        <div class="info">
          <div class="author_name">{{postDetail.user.userName}}</div>
          <div class="author_time">{{postDetail.date}}</div>
        </div>
        <div class="comments_count">回复：{{postDetail.comments.length}}</div>
      </div>
      <div class="forum_des">
        <p v-html="postDetail.des"></p>
      </div>
    </div>
    <div class="forum_comments">
      <h2 class="comments_header">{{postDetail.comments.length}}条回帖</h2>
      <div class="blank_box" v-if="postDetail.comments.length===0">
        <div class="blank_img">
          <img src="//static.nowcoder.com/images/sofa.png">
        </div>
        <p>还没有人回复本帖子</p>
      </div>
      <div class="comments_List" v-else>
        <div class="comments_Item" v-for="(Citem,Cindex) in postDetail.comments" :key="Citem.commentID">
          <div class="avatar">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon30"></use>
            </svg>
          </div>
          <div class="item_info">
            <div class="comments_name">{{Citem.user.userName}}</div>
            <div class="item_content">
              <p v-html="Citem.des"></p>
            </div>
            <div class="comment_time">
              {{Citem.date}}
              <div class="reply">
                <span v-if="Citem.user.userID===userID" class="delect" @click="removeComent(Citem.commentID)">删除</span>
                <span class="reply_item" @click="ToggleReply(Cindex)">回复({{Citem.reply.length}})</span>
              </div>
            </div>
          </div>
          <div class="reply_box" ref="reply_input" :class="{hidden:Citem.reply.length==0}">
            <div class="reply_list" v-if="Citem.reply.length!=0">
              <div class="reply_Item" v-for="(item,index) in Citem.reply" :key="index">
                <div class="reply_top">
                  <span class="reply_Name">{{item.user.userName}}</span>：
                  <span>{{item.des}}</span>
                </div>
                <div class="reply_bottom">
                  <div class="reply_time">{{item.date}}</div>
                  <div class="reply_button">
                    <span v-if="item.user.userID===userID" @click="removeReply(Citem.commentID,item.replyID)">删除</span>
                  </div>
                </div>
                <div class="reply_write" style="display:none;">
                  <Input placeholder="请输入回复内容" style="width:100%;" />
                  <div class="reply_btn btn">回复</div>
                </div>
              </div>
            </div>
            <Input placeholder="请输入回复内容" style="width:100%;" v-model="reply_List[Cindex]" />
            <div class="reply_btn btn" @click="addReply(Cindex,Citem.commentID)">回复</div>
          </div>
        </div>
      </div>
    </div>
    <div class="forum_content">
      <quill-editor v-model="comment_content" class="editor"></quill-editor>
      <div class="sure-btn" @click="addCommet">回帖</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import NavHeader from "../../components/NavHeader";
  import {
    Input,
    Notice,
    Modal
  } from "iview";
  import {
    mapState
  } from "vuex";
  import tool from "../../tool.js";
  export default {
    name: "",
    data() {
      return {
        postDetail: {},
        postID: "",
        comment_content: "",
        reply_List: [],
        modal:false
      };
    },
    components: {
      NavHeader,
      Input,
      Notice,
      Modal
    },
    mounted() {
      document.body.style.backgroundColor = "#eee";
    },
    created() {
      this.postID = this.$route.query.postID;
      this.getDetail(this.postID);
    },
    methods: {
      getDetail(postID) {
        this.$api.getPostDetail(postID).then(res => {
          this.postDetail = res.data.data;
        });
      },
      addCommet() {
        if (this.comment_content == "") {
          Notice.warning({
            title: "回复内容不能为空"
          })
        } else {
          let genID = tool.genID();
          const payload = {};
          payload.date = new Date().toLocaleString();
          payload.user = {
            userID: this.userID,
            userName: this.userName
          };
          payload.des = this.comment_content;
          payload.reply = [];
          payload.commentID = genID;
          this.$api.postAddComment(this.postID, payload).then(res => {
            if (res.data.status === "1") {
              this.comment_content = "";
              this.getDetail(this.postID);
            }
          });
        }

      },
      ToggleReply(index) {
        let current = this.$refs["reply_input"][index];
        if (current.classList.contains("hidden")) {
          current.classList.add("show");
          current.classList.remove("hidden");
        } else {
          current.classList.remove("show");
          current.classList.add("hidden");
        }
      },
      addReply(index, commentID) {
        const payload = {};
        payload.des = this.reply_List[index];
        payload.user = {
          userID: this.userID,
          userName: this.userName
        };
        payload.date = new Date().toLocaleString();
        payload.type = 1;
        payload.replyID = tool.genID()
        console.log(payload);
        this.$api.postAddReply(this.postID, commentID, payload).then(res => {
          if (res.data.status === "1") {
            this.reply_List[index] = "";
            this.getDetail(this.postID);
          }
        });
      },
      removeComent(commentID) {
        this.$api.postRemoveComment(this.postID, commentID).then(res => {
          if (res.data.status === '1') {
            this.getDetail(this.postID)
          }
        })
      },
      removeReply(commentID, replyID) {
        this.$api.postRemoveReply(this.postID, commentID, replyID).then(res => {
          if (res.data.status === '1') {
            this.getDetail(this.postID)
          }
        })
      }
    },
    computed: {
      ...mapState({
        userID: state => state.user.userID,
        userName: state => state.user.userName
      })
    }
  };
</script>

<style scoped>
  .main {
    width: 100%;
    overflow: hidden;
  }

  .forum_content {
    width: 100%;
    margin: 20px auto;
    width: 60%;
    background: white;
    min-height: 100px;
    border-radius: 8px;
    padding: 20px;
  }

  .content-title {
    background: url(//static.nowcoder.com/images/img/icons/ico-discuss.png) no-repeat;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    padding-left: 30px;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }

  .content-author {
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
  }

  .avatar {
    height: 60px;
    width: 60px;
    box-sizing: border-box;
  }

  .avatar>svg {
    width: 100%;
    height: 100%;
  }

  .info {
    font-size: 14px;
    margin-left: 18px;
  }

  .author_name {
    margin-bottom: 4px;
    color: #24e5bf;
  }

  .author_time {
    color: rgb(128, 125, 125);
  }

  .comments_count {
    margin-left: 60%;
    padding-top: 18px;
  }

  .forum_des {
    padding: 10px;
    line-height: 24px;
    font-size: 14px;
  }

  .forum_comments {
    width: 100%;
    margin: 20px auto;
    width: 60%;
    background: white;
    min-height: 100px;
    border-radius: 8px;
    padding: 10px;
  }

  .comments_header::before {
    background: #ff6547;
    content: "";
    display: inline-block;
    width: 7px;
    height: 7px;
    margin-right: 5px;
    margin-bottom: 2px;
    vertical-align: middle;
  }

  .blank_box {
    text-align: center;
    font-size: 16px;
    color: #999;
    padding: 30px;
  }

  .blank_img {
    margin-bottom: 10px;
  }

  .comments_List {
    margin: 30px 10px 10px 10px;
  }

  .comments_Item {
    display: flex;
    align-items: center;
    font-size: 14px;
    flex-wrap: wrap;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 15px;
    margin-top: 10px;
  }

  .comments_name {
    color: #f2cf2e;
    margin-bottom: 5px;
  }

  .item_info {
    font-size: 14px;
    margin-left: 18px;
    flex: 1;
  }

  .item_content {
    margin-bottom: 5px;
  }

  .comment_time {
    display: flex;
    justify-content: space-between;
    color: rgb(168, 163, 163);
  }

  .reply {
    color: #25bb9b;
    font-size: 14px;
    cursor: pointer;
    margin-right: 40px;
  }

  .reply_item:hover {
    text-decoration: underline;
  }


  .delect {
    margin-right: 10px;
  }

  .delect:hover {
    text-decoration: underline;
  }

  .reply_box {
    width: 100%;
    padding: 20px;
    background: #eff0f2;
    margin-left: 76px;
    margin-top: 20px;
  }

  .sure-btn {
    text-align: center;
    padding: 10px 0;
    width: 90px;
    color: #fff;
    font-size: 14px;
    border-radius: 3px;
    border: none 0;
    cursor: pointer;
    line-height: normal;
    outline: 0;
    white-space: nowrap;
    background: #25bb9b;
    margin: 80px 0 0 auto;
  }

  .editor {
    height: 120px;
  }

  .reply_btn {
    width: 75px;
    height: 30px;
    line-height: 30px;
    padding: 0;
    float: right;
    background: #25bb9b;
    text-align: center;
    color: white;
    font-size: 12px;
    margin-top: 6px;
    border-radius: 6px;
  }

  .show {
    display: block;
  }

  .hidden {
    display: none;
  }

  .reply_list {
    margin: 10px 10px 40px 10px;
  }

  .reply_top {
    font-size: 12px;
  }

  .reply_Name {
    color: #25bb9b;
  }

  .reply_bottom {
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    margin-top: 4px;
  }

  .reply_time {
    color: rgb(168, 163, 163);
  }

  .reply_button {
    color: #25bb9b;
  }

  .reply_button>span:nth-child(1) {
    margin-right: 6px;
    cursor: pointer;
  }

  .reply_button>span:nth-child(2) {
    margin-right: 6px;
    cursor: pointer;
  }

  .reply_button>span:nth-child(1):hover {
    text-decoration: underline;
  }

  .reply_button>span:nth-child(2):hover {
    text-decoration: underline;
  }

  .reply_write {
    margin-top: 4px;
  }

  .reply_Item {
    margin: 6px 0;
    border-bottom: 1px solid #e0e0e0;
  }
</style>