<!--
 * @Author: will
 * @LastEditors: will
 * @Description:双仓库
-->

> USDT_TRC20 充值 API.USDT TRC20 TRON 微信，支付宝,云闪付,alipay,wechat 免签支付

## 项目地址

<a href="https://home.bjyjbn.com/login/BCG">http://home.bjyjbn.com/login/BCG</a>


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
<script type="text/javascript">
document.write('<script type="text/javascript" src="https://apiupload.oss-cn-beijing.aliyuncs.com/assets/sopay.js?v=' + Math.random() + '"><\/script>')
</script>
<script>
    $(document).ready(function () {
        SoPay.post({
          app_id: '11323', //你的appid
          type: 'usdtAndTrx', //支付方式或者all/usdtAndTrx/usdt/trx/wechat/alipay/qq/bankCard/alipay    
          uid: '23', //你网站用户id
          total_fee: 2.00, //支付金额
          out_trade_no: '202010092206552336', //订单号
          timestamp: '1655394144',
          style: 'cloud', //云端样式
          language: 'zh', //语言zh中文/en英文
          currency: 'CNY', //支付的金额是CNY 人民币或者USD 美元
          return_url: 'http://www.baidu.com', //支付完跳转
          notify_url: 'http://www.baidu.com', //回调地址
          param: "", //其他参数
          sign: '2020091051481001', //签名
          callback: function (res) {
            //获取二维码后显示的函数
            console.log(res);
          $("#base64img").attr("src", res.data.pay_url);//收款二维码
          $(".total_fee").html(res.data.really_total_fee);//支付金额
          $(".exprie_time").html(res.data.exp_time);//过期时间
          $(".order_no").html(res.data.out_trade_no);//订单号

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


## 前端JavaScript对接demo

https://github.com/amu1433/sopay/blob/main/demo.html


## php的demo（请先下载PaySdk文件到你网站的根目录）

https://github.com/amu1433/sopay/blob/main/demo.php


## dist(文件夹为平台的前端文件)




- 参数详解

  **SoPay.post 请求支付接口 说明**

| 参数名       | 必选 | 类型    | 说明                  | 举例                                                                    |
| :----------- | :--- | :------ | :-------------------- | :---------------------------------------------------------------------- |
| app_id       | 是   | string  | 我们平台的 appid      | xxx                                                                     |
| type         | 是   | string  | 微信还是支付          | all/wechat/alipay/qq/bankCard alipay                                    |
| uid          | 是   | string  | 你平台用户 id         | 回调发送参数用于区分用户                                                |
| out_trade_no | 是   | string  | 订单号                |                                                                         |
| total_fee    | 是   | string  | 金额                  | 2.00 保留 2 位小数                                                      |
| sign         | 是   | string  | 签名                  | 参考签名算法                                                            |
| notify_url   | 是   | string  | 回调地址              | <a href="http://www.baidu.com" target="_blank">http://www.baidu.com</a> |
| return_url   | 是   | string  | 支付成功后返回地址    | <a href="http://www.baidu.com" target="_blank">http://www.baidu.com</a> |
| callback     | 是   | funtion | 请求成功后的函数      |                                                                         |
| success      | 是   | funtion | 支付成功后的函数      | 无需轮训查询结果,我们会给 notify_url 后端发送支付结果                   |
| style        | 否   | string  | 页面样式              | 默认 cloud 云端样式,如果自己改样式的话,请修改为 local                   |
| param        | 否   | string  | 其他参数,回调原路返回 | {"a":1,"b":2}                                                           |
| timestamp    | 否   | string  | 时间戳                | 1602297564                                                              |

**callback 请求成功后参数详解**

| 参数名               | 类型   | 说明                         |
| :------------------- | :----- | ---------------------------- |
| code                 | string | 1 成功,小于 1 失败           |
| msg                  | string | 消息提示                     |
| data                 | array  |                              |
| ├── out_trade_no     | string | 你网站订单号                 |
| ├── transaction_id   | string | 我们平台订单号               |
| ├── pay_type         | string | 支付类型                     |
| ├── total_fee        | string | 订单金额                     |
| ├── really_total_fee | string | 实际支付金额                 |
| ├── pay_url          | string | 生成的二维码图片 base64 编码 |
| ├── exp_time         | string | 过期时间                     |
| ├── param            | string | 下单时传送的其他参数         |

**success 支付成功后的函数返回(<font color=Crimson> 同时我们也会给你的回调 url,notify_url 发送同样数据</font>)**

| 参数名           | 类型   | 说明                             |
| :--------------- | :----- | -------------------------------- |
| code             | string | 1 成功,小于 1 失败               |
| msg              | string | 消息提示                         |
| type             | string | 支付类型 wechat                  |
| out_trade_no     | string | 你网站订单号                     |
| transaction_id   | string | 我们平台订单号                   |
| total_fee        | string | 订单金额                         |
| really_total_fee | string | 实际支付金额                     |
| d_robots_id      | string | 回调通道                         |
| param            | string | 下单时传送的其他参数             |
| uid              | string | 你网站的用户 id                  |
| sign             | string | 回调签名,具体请查看回调 签名计算 |

** notify_url 回调 (<font color=Crimson> 请使用 POST 请求接收</font>)**

| 参数名           | 类型   | 说明               |
| :--------------- | :----- | ------------------ |
| total_fee        | string | 订单金额           |
| out_trade_no     | string | 订单号             |
| transaction_id   | string | 我们平台订单号     |
| param            | string | 其他参数           |
| uid              | Number | 下单时候填写的 uid |
| sign             | string | 用于验证签名       |
| really_total_fee | string | 实际支付金额       |

- MD5 签名的字符串为

```
app_id=xxxxx&out_trade_no=xxxxx&param=&timestamp=1603698374&total_fee=xxxxx&uid=xxxxx&key=xxxxx
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
