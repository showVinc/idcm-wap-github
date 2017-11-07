<template>
  <div class="gywm">
    <public-top :num="4"></public-top>
    <div class="gywmMain">
      <img src="../../assets/images/home/gywm.png">
      <div class="gywmWrap">
        <p>
          国际数字货币管理中心 （http://www.idcmex.com/）创办于
          2013年12月，是中国最早的比特币交易平台之一，现由International Digital Currency Managment Limited负责主体运营。创始团队成员主要来自于微软亚洲研究院（MSRA）思科（Cisco）、阿里巴巴（Alibaba）等一流机构和公司，创办之初即获得百万美元级的天使投资。率先成为立足亚洲 ，服务全球的专业比特币交易平台。
        </p>
        <p>
          比特币交易网团队通过3年的不断努力，逐渐发展成为一支由超50位长期从事互联网、金融行业人员组成的专业队伍，为平台持续提供稳定、安全、便捷的服务保障。比特币交易网一向崇尚安全合规的管理和理念，同时与汤森路透等顶级全球金融机构建立战略合作并委派独立金融服务组建立第三方合规监察服务为全球客户提供合法合规的资金运营交易清算等优质服务环境和体验.比特币交易网同时是比特币基金会（Bitcoin Foundation）会员、亚洲数字资产金融协会（DACA）理事会成员比特币交易网坚持以用户利益为核心，秉承开放、自由、分享的互联网精神，致力于为全球客户提供卓越的综合性数字货币服务。
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style lang="less" type="text/less" scoped>
  .gywm {
    .gywmMain {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 138px;
        height: 65px;
        margin: 50px auto;
      }
      .gywmWrap {
        width: 100%;
        padding: 15px;
        box-sizing: border-box;
        font-size: 12px;
        color: #eaeaea;
        line-height: 20px;
        p{
          margin-bottom: 35px;
        }
      }
    }
  }
</style>
