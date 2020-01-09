<template>
  <div id='app'>
    <div class="utb_index1 s-flex-center  ">
      <img class="utb_index1-img1" src="~assets/img/logo.png" alt="">
      <img class="utb_index1-img2" src="~assets/img/title.png" alt="">
    </div>
    <!-- <div style="height:1.2rem" class="wow slideInLeft"></div> -->
    <div class="utb_index2 clearfix">
      <div class="utb_index2-title s-flex-center  ">以书换书，以书会友</div>
      <div class="utb_index2-content">“换享好书”是一款公益性换书交友APP/小程序，以 “换，享更多”的理念，让书在个人之间自由交换，无限循
        环，实现书尽其用，并提供基于LBS和兴趣的社交机会。</div>
      <div class="utb_index2-btn s-flex-center">
        <a class="utb_index2-btn-a"
          href="https://android.myapp.com/myapp/detail.htm?apkName=com.utbon.huanxiang">免费体验</a>
      </div>
    </div>
    <div class="utb_index3">
      <div class="utb_index3-title s-flex-center wow fadeInUp">换书流程</div>
      <div class="tb_index3-content">
        <div class="index3-left-box" style="margin-bottom: 0.6rem;">
          <div class="index3-left wow fadeInLeft">
            <div class="s-flex-end" style="width:100%">
              <img class="index3-left-img1" src="~assets/img/saoma-2.png" alt="">
            </div>

            <div class="index3-left-t1 s-flex-end">扫码上传</div>
            <div class="index3-left-t2 s-flex-end">一秒上传</div>
            <div class="index3-left-t2 s-flex-end">扫描书背后的二维码</div>
          </div>
        </div>

        <div class="index3-left-box s-flex-end" style="margin-bottom: 0.48rem;">
          <div class="index3-left index3-right wow fadeInRight">
            <div class="" style="width:100%">
              <img class="index3-left-img1" src="~assets/img/jiaohuan-2.png" alt="">
            </div>

            <div class="index3-left-t1">主动求换</div>
            <div class="index3-left-t2 ">1本换1本</div>
            <div class="index3-left-t2 ">提供自己书供对方选</div>
          </div>
        </div>
        <div class="index3-left-box" style="margin-bottom: 0.6rem;">
          <div class="index3-left wow fadeInLeft">
            <div class="s-flex-end" style="width:100%">
              <img style="width: 0.48rem;" class="index3-left-img1" src="~assets/img/Group.png" alt="">
            </div>

            <div class="index3-left-t1 s-flex-end">对方接受</div>
            <div class="index3-left-t2 s-flex-end">一键匹配</div>
            <div class="index3-left-t2 s-flex-end">对方接受你提供的书</div>
          </div>
        </div>

        <div class="index3-left-box s-flex-end wow fadeInRight">
          <div class="index3-left index3-right">
            <div class="" style="width:100%">
              <img class="index3-left-img1" src="~assets/img/fahuo.png" alt="">
            </div>

            <div class="index3-left-t1">发货/拿货</div>
            <div class="index3-left-t2 ">一键预约</div>
            <div class="index3-left-t2 ">付运费EMS上门取书</div>
          </div>
        </div>
      </div>

    </div>
    <div class="utb_index4 clearfix">
      <div class="utb_index4-title s-flex-center  wow fadeInUp">换享问答</div>
      <div class="utb_index4-content  wow fadeInUp">
        <div class="content s-flex-between" data-type="0" @click="openOrshrink">
          <div class="content-left s-flex-start">
            <img src="~assets/img/index2.png" alt="">
            如何发布书籍？
          </div>
          <img class="content-right" :class="is_hidden == 0 ? 'active_ico' : ''" src="~assets/img/down.png" alt="">
        </div>
        <div class="content-t1" :style="is_hidden == 0 ? 'height:1.4rem;padding-top:0.2rem' : ''">
          选择首页下方 <img src="~assets/img/index3.png" alt=""> ，点击进入“普通发布”，用右上方红框 <img src="~assets/img/icon-2.png" alt="">
          扫书本背后右下角ISBN二维码，选填相关信息即可。
        </div>
      </div>
      <div class="utb_index4-content  wow fadeInUp">
        <div class="content s-flex-between" data-type="1" @click="openOrshrink">
          <div class="content-left s-flex-start">
            <img src="~assets/img/index2.png" alt="">
            价值不对等怎么换？
          </div>
          <img class="content-right" :class="is_hidden == 1 ? 'active_ico' : ''" src="~assets/img/down.png" alt="">
        </div>
        <div class="content-t1" :style="is_hidden == 1 ? 'height:1.3rem;padding-top:0.2rem' : ''">
          不论是旧换新，还是价高换价低，都有可能成交，因为是多方匹配，对方看不中不要紧；当然你可提供多点书供人家选。
        </div>
      </div>
      <div class="utb_index4-content  wow fadeInUp">
        <div class="content s-flex-between" data-type="2" @click="openOrshrink">
          <div class="content-left s-flex-start">
            <img src="~assets/img/index2.png" alt="">
            价值不对等怎么换？
          </div>
          <img class="content-right" :class="is_hidden == 2 ? 'active_ico' : ''" src="~assets/img/down.png" alt="">
        </div>
        <div class="content-t1" :style="is_hidden == 2 ? 'height:1.3rem;padding-top:0.2rem' : ''">
          不论是旧换新，还是价高换价低，都有可能成交，因为是多方匹配，对方看不中不要紧；当然你可提供多点书供人家选。
        </div>
      </div>
      <div class="utb_index4-content  wow fadeInUp">
        <div class="content s-flex-between" data-type="3" @click="openOrshrink">
          <div class="content-left s-flex-start">
            <img src="~assets/img/index2.png" alt="">
            可以不缴纳押金吗？
          </div>
          <img class="content-right" :class="is_hidden == 3 ? 'active_ico' : ''" src="~assets/img/down.png" alt="">
        </div>
        <div class="content-t1" :style="is_hidden == 3 ? 'height:1.3rem;padding-top:0.2rem' : ''">
          交押金是为了避免有人白拿，当然两两之间面对面交换免押金；另外，APP上正在对接芝麻信用，简单认证即可开通。
        </div>
      </div>
      <div class="utb_index4-content  wow fadeInUp">
        <div class="content s-flex-between" data-type="4" @click="openOrshrink">
          <div class="content-left s-flex-start">
            <img src="~assets/img/index2.png" alt="">
            快递费谁来付？
          </div>
          <img class="content-right" :class="is_hidden == 4 ? 'active_ico' : ''" src="~assets/img/down.png" alt="">
        </div>
        <div class="content-t1" :style="is_hidden == 4 ? 'height:1.3rem;padding-top:0.2rem' : ''">
          因为是交换，双方互寄快递，所以快递费在发货时各自支付。快递情况可在个人中心“换到/买到”点击“查看物流”。
        </div>
      </div>
      <div class="utb_index4-content  wow fadeInUp">
        <div class="content s-flex-between" data-type="5" @click="openOrshrink">
          <div class="content-left s-flex-start">
            <img src="~assets/img/index2.png" alt="">
            对方不发货怎么办？
          </div>
          <img class="content-right" :class="is_hidden == 5 ? 'active_ico' : ''" src="~assets/img/down.png" alt="">
        </div>
        <div class="content-t1" :style="is_hidden == 5 ? 'height:1.3rem;padding-top:0.2rem' : ''">
          7天内不发货是属于违规行为，平台将根据用户投诉从违约方扣除每本10元违约金芝麻信用分，严重者冻结账户。
        </div>
      </div>
      <div class="utb_index4-content  wow fadeInUp">
        <div class="content s-flex-between" data-type="6" @click="openOrshrink">
          <div class="content-left s-flex-start">
            <img src="~assets/img/index2.png" alt="">
            有问题怎么找客服？
          </div>
          <img class="content-right" :class="is_hidden == 6 ? 'active_ico' : ''" src="~assets/img/down.png" alt="">
        </div>
        <div class="content-t1" :style="is_hidden == 6 ? 'height:0.86rem;padding-top:0.2rem' : ''">
          可加微信huan68008直接咨询，或致电0574-5587733
        </div>
      </div>
    </div>
    <div class="utb_index5 ">
      <div class="utb_index3-title s-flex-center  wow fadeInUp">媒体报道</div>
      <div class="utb_index5-content" style="margin-top: 0.3rem;">

        <a href="http://mini.eastday.com/a/180916180559963-3.html">
          <div class=" wow fadeInUp">
            <div class="utb_index5-content-title">换享入选2018中国海归创业大赛优胜奖</div>
            <div class="utb_index5-content-title1"> 以中国人自主原始创新的“换享经济”模式和技术创造，撬动了新的经济革命时代，“以交换代替货币，
              根除金融危机！”...也许你说我天真，但是你迟早会 跟我一样...</div>
            <img class="utb_index5-content-img1" src="~assets/img/Bitmap.png" alt="">
          </div>

        </a>
        <a href="http://news.cnnb.com.cn/system/2014/12/08/008220953.shtml">
          <div class=" wow fadeInUp">
            <div class="utb_index5-content-title">优托邦团队入选宁波市政府3315计划</div>
            <div class="utb_index5-content-title1"> 万里挑一的机会，全球人才的角逐，优托邦诞生于 全球顶尖创业大赛——宁波市3315计划，获得千万
              元级别的启动资金奖励，首批入驻甬江人才创新中心...</div>
            <img class="utb_index5-content-img1" src="~assets/img/Bitmap (1).png" alt="">
          </div>
        </a>

      </div>
    </div>

    <div class="utb_index6 ">
      <div class="utb_index3-title s-flex-center wow fadeInUp">关于我们</div>
      <div class="utb_index6-content1 wow fadeInUp">
        浙江优托邦网络科技有限公司（简称优托邦）成立于2015年10月，注册资金1000万元，是宁波市政府“3315计划”海外领军型创新创业人才团队引进项目。
      </div>
      <div class="utb_index6-content1 wow fadeInUp">
        “换享经济”是中国人独立原创、优托邦全球首推的新经济模式，通过优化匹配让闲置资源物尽其用，实现最大价值；与“共享经济”相比，其区别是“物权的转移”，从而能根除“共享经济”所固有的损耗和浪费等现象。
      </div>
      <div class="utb_index6-content1 wow fadeInUp">
        优托邦对“换享”模式拥有自主知识产权，“换享——基于匹配算法的以物易物移动互联网平台”入选“业达杯”2018（第四届）中国海归创业大赛优胜奖。
      </div>
    </div>

    <div class="utb_index6 ">
      <div class="utb_index3-title s-flex-center wow fadeInUp">创始团队</div>
      <div class="utb_index6-content1 wow fadeInUp">
        创始人汪勇进先生本科毕业于复旦大学生命科学院，曾在麦克马斯特大学 （McMaster University）神经心理系研究神经网络理论（深度学习语音识别方向），后取得多伦多大学（University of
        Toronto）MBA学位；参与创立e龙旅行网（NASDAQ：LONG)，在其策划和运作下一举奠定了艺龙品牌的全国知名度；作为爱康网（www.iKang.com)三名创始合伙人之一，提出了“360度健康全管理”理念，是中国健康管理行业的开拓者之一，曾担任爱康国宾（NASDAQ：KANG）市场副总裁、首席创意官；作为早期4A广告创意人，曾任职于智威汤逊（JWT）、恒美（DDB）、电扬（Dentsu,Young&Rubicam）等国际广告公司，服务于Sony、美孚、红塔山等数十个国内外知名品牌。
        公司团队核心成员来自复旦、交大、清华以及斯坦福、多伦多大学等国内外名校，在互联网创新、人工智能和市场营销等方面拥有丰富的经验。
      </div>
      <img class="utb_inde6-content-img1 wow fadeInUp" src="~assets/img/Bitmap (2).png" alt="">

    </div>
    <div class="utb_index7 ">
      <div class="wow fadeInUp">
        <div class="utb_index7-header1 s-flex-center">
          Our Mission
        </div>
        <div class="utb_index7-header1 s-flex-center">
          使命
        </div>
        <div class="utb_index7-content1">
          通过交换，摆脱金钱的羁绊，帮助每个人去成就看似 无法实现的梦想！
        </div>
      </div>
      <div class="wow fadeInUp">
        <div class="utb_index7-header1 s-flex-center">
          Our Vision
        </div>
        <div class="utb_index7-header1 s-flex-center">
          愿景
        </div>
        <div class="utb_index7-content1">
          提供一种货币之外的价值流通手段，解除“钱”作为人类一切生活和社会经济活动前提的困境。
        </div>
      </div>
      <div class="wow fadeInUp">
        <div class="utb_index7-header1 s-flex-center">
          Our Value
        </div>
        <div class="utb_index7-header1 s-flex-center">
          价值观
        </div>
        <div style="margin-bottom: 0" class="utb_index7-content1 s-flex-center">
          COMMUNITY社圈主义| RECIPROCATION互利 |
        </div>
        <div style="padding-top: 0;margin-bottom: 0" class="utb_index7-content1 s-flex-center">
          EMPATHY利他主义| TRUST信任 | EMPOWERME
        </div>
        <div style="padding-top: 0" class="utb_index7-content1 s-flex-center">
          NT成全
        </div>
      </div>
    </div>
    <div class="utb_inde8  wow fadeInUp">
      <a href="https://android.myapp.com/myapp/detail.htm?apkName=com.utbon.huanxiang">
        <img class="utb_inde8-img1" src="~assets/img/1577941561.png" alt="">
      </a>
      <div class="utb_index8-content1 s-flex-center">
        扫描或点击二维码即可下载换享好书app
      </div>
    </div>
    <div class="utb_index9  wow fadeInUp">

      <div class="utb_index9-title1">
        <div class="utb_index9-title1-left">地址：</div>
        <div class="utb_index9-title1-right">浙江省宁波市中山东路2646号甬江人才创新 中心2号楼2楼 CEO信箱：</div>
      </div>
      <div class="utb_index9-title2">
        <div class="utb_index9-title1-left">CEO信箱：</div>
        <div class="utb_index9-title1-right">Johnny.wang@utbon.com</div>
      </div>
      <div class="utb_index9-title2">
        <div class="utb_index9-title1-left">电话：</div>
        <div class="utb_index9-title1-right">0574-558773358</div>
      </div>
    </div>
    <div id="goot" class="utb_index10 s-flex-around wow fadeInUp">
      Copyright &#169 2015 - 2019 优托邦 www.utbon.com 浙ICP备16015165号 版权所有
    </div>

  </div>

</template>

<script>
  import {
    WOW
  } from 'wowjs'
  import provinces from '@/js/test'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        is_hidden: provinces
      }
    },
    methods: {
      openOrshrink: function (e) {
        this.is_hidden ==  e.current.da
        let type = e.currentTarget.dataset.type;
        if (type == this.is_hidden) {
            this.is_hidden = -1
        } else {
            this.is_hidden = type
        }
        //this.browserRedirect()
     
      },
      browserRedirect: function () {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
          console.log('PC')
          // window.location.href="XXXXXXXXXXXXX";
        } else {
          console.log('手机')
          //window.location.href="YYYYYYYYYYYYYYY";
        }
      }

    },
    created() {
      console.log(this.$route);
      console.log(this.$router);
    },
    mounted() {
      new WOW({
        live: false
      }).init()
    }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  
 
  @import '~@/assets/css/hello.scss';

</style>
