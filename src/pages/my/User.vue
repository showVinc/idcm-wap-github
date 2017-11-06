<template>
  <div class="user">
    <public-top :num="4"></public-top>
    <div>
      <div class="userTit">
        个人资料
      </div>
      <ul>
        <li class="addImg">
          更换头像
          <div>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <span>
            <img src="../../assets/images/home/arrow.png">
          </span>
          </div>
        </li>
        <li>
          昵称
          <div>
            <input type="text" placeholder="请输入昵称">
            <span>
              <img src="../../assets/images/home/arrow.png">
            </span>
          </div>
        </li>
        <li>
          UID
          <div>
            <p>
              123123
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        imageUrl: require('../../assets/images/home/detail/add.png')
      }
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>
<style lang="less" type="text/less" scoped>
  .user {
    .userTit {
      font-size: 20px;
      height: 50px;
      display: flex;
      align-items: center;
      padding-left: 15px;
      color: #ebebeb;
    }
    ul {
      padding-left: 15px;
      background: #0e3048;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 15px 15px 0;
        border-bottom: 1px solid #233b56;
        color: #ebebeb;
        div{
          display: flex;
          justify-content: flex-end;
          p{
            font-size: 14px;
            color: #516d8e;
          }
          input {
            background: none;
            text-align: right;
            color: #ebebeb;
          }
          span {
            margin-left: 10px;
            img {
              width: 6px;
              height: 11px;
            }
          }
        }
        &.addImg {
          div {
            display: flex;
            align-items: center;
            img {
              width: 70px;
              height: 70px;
              object-fit: cover;
              border-radius: 50%;
            }
            span {
              margin-left: 10px;
              img {
                width: 6px;
                height: 11px;
              }
            }
          }
        }
        &:last-child{
          border: none;
        }
      }
    }
  }
</style>
<style lang="less" type="text/less">
</style>
