<template>
  <div class="page-list">
    <public-top :num="4"></public-top>

    <div class="p-title">
      实名认证
      <div class="tip">
        <span class="icon-tip"></span>根据国家相关规定，请填写您的真实信息
      </div>
    </div>

    <form class="form-type-2">
      <div class="input-box">
        <div class="form-item">
          <label class="form-label">姓&emsp;&emsp;名</label>
          <input type="text" placeholder="请输入真实姓名" v-model="form.username">
        </div>

        <div class="form-item">
          <label class="form-label">性&emsp;&emsp;别</label>
          <el-radio-group class="page-radios" v-model="form.gender">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="2">女</el-radio>
          </el-radio-group>
        </div>

        <div class="form-item" style="position:relative">
          <label class="form-label">证件类型</label>
          <select v-model="form.type" class="form-select">
            <option v-for="item,i in type_list" :key="i"  :value="item.id">{{ item.label }}</option>
          </select>
        <!--  <span class="icon-right"></span>-->
        </div>

        <div class="form-item">
          <label class="form-label">证件号码</label>
          <input type="text" placeholder="请输入证件号码" v-model="form.code">
        </div>

        <div class="form-item">
          <label class="form-label">证件正面</label>
          <input type="text" disabled v-model="front_name">

          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-error="uploadError"
            :before-upload="beforeUpload"
            :on-success="uploadSuccessFront">
            <button class="btn btn-blue-sm" type="button">点击上传</button>
          </el-upload>
        </div>

        <div class="form-item">
          <label class="form-label">证件反面</label>
          <input type="text" disabled v-model="back_name">

          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-error="uploadError"
            :before-upload="beforeUpload"
            :on-success="uploadSuccessBack">
            <button class="btn btn-blue-sm" type="button">点击上传</button>
          </el-upload>
        </div>
      </div>

      <div class="tip" style="padding-left: 15px;">仅支持jpg、jpeg、bmo的图面格式。图片大小不超过2M</div>

      <div class="btns">
        <button class="btn btn-blue" type="button" @click="subForm()">确认</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        type_list: [  //  证件类型列表
          {label: '身份证', id: 1},
          {label: '护照', id: 2}
        ],
        front_name: '',   //  正面照名称
        back_name: '',    //  反面照名称
        form: {
          username: '',   //  真实姓名
          gender: 1,      //  男
          type: '1',       //  证件类型
          code: '',       //  证件号码
          front_fid: '1',  //  证件正面照
          back_fid: '2'    //  证件反面照
        }
      }
    },
    methods: {
      beforeUpload (file) {
        const isJPG = file.type === 'image/jpeg';
        const isPNG = file.type === 'image/png';
     //   const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG && !isPNG) {
          this.$toast('上传头像图片只能是 JPG 或 PNG 格式!');
        }
       // if (!isLt2M) {
        //  this.$message.error('上传头像图片大小不能超过 2MB!');
      //  }
      //  return isJPG && isLt2M;
        return isJPG || isPNG
      },
      uploadError (err, file, fileList) {
        this.$toast('上传失败')
      },
      uploadSuccessFront(res, files, fileLists) {
        this.front_name = files.name
       // this.form.front_fid = res.fid //  fid 图片唯一标识符
        this.form.front_fid = '1'
      },
      uploadSuccessBack(res, files, fileLists) {
        this.back_name = files.name
      // this.form.back_fid = res.fid //  fid 图片唯一标识符
        this.form.back_fid = '2'
      },
      subForm() {
        let data = this.form

        let msg = ''
        if(!data.username) {
          msg = '请输入真实姓名'
        }else if(!data.gender) {
          msg = '请选择性别'
        }else if(!data.type) {
          msg = '请选择证件类型'
        }else if(!data.code) {
          msg = '请输入证件号码'
        }else if(!data.front_fid) {
          msg = '请上传证件照正面'
        }else if(!data.back_fid) {
          msg = '请上传证件照反面'
        }

        if(msg) {
          this.$toast(msg)
        }else {
          //  提交表单
          //  to do
          //  ....

          this.$toast('提交成功')

          setTimeout(() => {
            this.$router.push({path: '/security/index'})
          }, 2000)
        }
      }
    }
  }
</script>


<style lang="less" scoped>
  .input-box {
    margin-bottom: 10px;
  }
  .p-title {
    line-height: 30px;
    padding-top: 10px;
    padding-bottom: 13px;
  }
  .tip {
    font-size: 12px;
    line-height: 22px;
    color: #516d8e;
  }
  .icon-tip {
    width: 16px;
    height: 16px;
    border: 1px solid #962d41;
    border-radius: 50%;
    color: #962d41;
    text-align: center;
    line-height: 16px;
    display: inline-block;
    margin-right: 10px;
    &:after {
      content: '!';
    }
  }
</style>

<style lang="less">
  .upload-demo .el-upload {
    width: auto;
    height: auto;
  }
  .page-radios {
    .el-radio__inner {
      width: 17px;
      height: 17px;
      border: solid 1px #3f87ba;
      background: transparent;
    }
    .el-radio__input.is-checked .el-radio__inner{
      border: solid 1px #5ba6fe;
      background: transparent;
      &:after {
        width: 11px;
        height: 11px;
        background-color: #5ba6fe;
        transform: none;
        top: 2px;
        left: 2px;
      }
    }
  }
</style>
