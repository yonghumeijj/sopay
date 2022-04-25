<!--
 * @Author: will
 * @LastEditors: will
 * @Description:双仓库
-->

> USDT_TRC20 充值 API.USDT TRC20 TRON 微信，支付宝,云闪付,alipay,wechat 免签支付

## 项目地址

<a href="http://home.bjyjbn.com/login/Y">http://home.bjyjbn.com/login/Y</a>

## 主要功能

- usdt php 充值提现功能
- USDT.trc20 支付接口
- 微信免签支付
- 支付宝免签支付
- 云闪付免签支付

## USDT，TRC20 支付介绍

### API 下单,,回调推送,（币直接到达你的账户,我们不参与资金）

> 钱直接到达你的钱包,快速回调, 查询方便

### 通过支付数量回调,支持高并发

> 通过支付数量发起回调, 数量不对会导致掉单, 补单后请自行保存交易 Id

### 离线地址,匿名交易

> 匿名收款,定时更换离线收款地址,不影响提币归集

## 微信个码支付介绍

- 无需挂机
- 采用 websock 接口,无需轮训查询是否支付
- 支持固码
- 异常提醒
- 自动开启
-

## 支付宝/银行卡

- 采用手机端监控

## 对接方式

```javascript


<script src="https://apiupload.oss-cn-beijing.aliyuncs.com/assets/sopay.js?v=" +Date.now()></script>
<script>
    $(document).ready(function () {
        SoPay.post({
          app_id: '11323', //你的appid
          type: 'wechat', //支付方式或者all/usdt/wechat/alipay/qq/bankCard
          uid: '23', //你网站用户id
          total_fee: 2.00, //支付金额
          out_trade_no: '202010092206552336', //订单号
          timestamp: '1602297564', //时间戳
          return_url: 'http://www.baidu.com', //支付完跳转
          notify_url: 'http://www.baidu.com', //回调地址
          param: "", //其他参数
          sign: '2020091051481001', //签名
          callback: function (res) {
            //获取二维码后显示的函数
            console.log(res);
            alert(res.msg);
            //res.data.pay_url //收款二维码
            //res.data.really_total_fee //支付金额
            //res.data.exp_time //过期时间
            //res.data.out_trade_no //订单号

          },
          success: function (data) {
            //支付成功后的函数
             console.log(data)
            alert('支付成功')
            //跳转

          },
        })
      })
</script>


```

# 项目图片

![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/b4f1b47f5dc8a939c186f74690539e83.png 'api.png')

![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/12b3110af50953cb184a7901c50fa73a.png 'api.png')

![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/6032d99b0d96bc0493a0ca2aa83dbe6d.png 'api.png')

![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/cd21ad18daf55fa92d81678164204f02.png 'api.png')

![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/0384e9a94182b32a99148969c359d92f.png 'api.png')
![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/444c48b6aa8b07211bb11327ab182e02.png 'api.png')
![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/5ede6de3de421f094f791a942c1479b3.png 'api.png')
![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/e57d6214c0a4a881e643a3c67f387166.png 'api.png')
![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/eb902bfbe4ef3b36b0881ba82331c268.png 'api.png')
