
> USDT_TRC20 recharge API.USDT TRC20 TRON alipay,wechat payment

**English** | [中文](https://github.com/amu1433/sopay/blob/main/README.zh.md)

## Projects

<a href="https://home.bjyjbn.com/login/BCG">http://home.bjyjbn.com/login/BCG</a>


## What can we do?

- usdt php recharge and withdraw
- USDT.trc20 payment
- USDT.trc20 api

## JavaScript Calling interface

- 1.<a href="https://github.com/amu1433/sopay/blob/main/demo.html" target="_blank">demo code for JavaScript </a>


## Invoke

```JavaScript
<script type="text/javascript">
document.write('<script type="text/javascript" src="https://apiupload.oss-cn-beijing.aliyuncs.com/assets/sopay.js?v=' + Math.random() + '"><\/script>')
</script>
<script>
    $(document).ready(function () {
        SoPay.post({
          app_id: '11323', //your appid
          type: 'usdtAndTrx', //支Mode of payment/all/usdtAndTrx/usdt/trx/wechat/alipay/qq/bankCard/alipay    
          uid: '23', //your Websites  userID
          total_fee: 2.00, //Amount
          out_trade_no: '202010092206552336', //order
          timestamp: new Date().getTime(),
          style: 'cloud', //style
          language: 'zh', //language zh/en
          currency: 'CNY', //The amount entered is  、CNY /USD 
          return_url: 'http://www.baidu.com', //return_url
          notify_url: 'http://www.baidu.com', //notify_url
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
            alert('Pay success')
            //跳转

          },
        })
      })
</script>
```

- Parameters  info

  **SoPay.post **

| Parameters   | Must | Types   | Notes                          | For example                                                                                |
| :----------- | :--- | :------ | :----------------------------- | :----------------------------------------------------------------------------------------- |
| app_id       | yes  | string  | Our Platform appid             | xxx                                                                                        |
| type         | yes  | string  | Mode of payment                | all/usdtAndTrx/usdt/trx/wechat/alipay/qq/bankCard/alipay                                   |
| uid          | yes  | string  | your Websites  userID          | your Websites  userID                                                                      |
| out_trade_no | yes  | string  | order                          |
| timestamp    | yes  | string  | timestamp                      | timestamp                                                                                  |
| total_fee    | yes  | string  | Amount                         | 2.00 保留 2 位小数                                                                         |
| sign         | yes  | string  | sign                           | sign                                                                                       |
| notify_url   | yes  | string  | notify_url                     | <a href="http://www.baidu.com" target="_blank">http://www.baidu.com</a>                    |
| return_url   | yes  | string  | return_url                     | <a href="http://www.baidu.com" target="_blank">http://www.baidu.com</a>                    |
| callback     | yes  | funtion | callback                       | Show up QR code function                                                                   |
| success      | yes  | funtion | Pay The function after success | We will send the payment result to the notify backend                                      |
| currency     | no   | string  | he amount entered is           | CNY、USD                                                                                   |
| style        | no   | string  | style                          | 默认 cloud 云端样式,如果自己改样式的话,请修改为 local ,class样式选择器不要跟我们的冲突即可 |
| language     | no   | string  | language                       | zh/en                                                                                      |
| param        | no   | string  | 其他参数,回调原路返回          | {"a":1,"b":2}                                                                              |

**Notes**

- usdtAndTrx为usdt跟trx都可以,用户可以自行选择


**callback  Parameters  info**

| Parameters           | Types  | Notes                                                                                                |
| :------------------- | :----- | ---------------------------------------------------------------------------------------------------- |
| code                 | string | 1 Success,<1 err                                                                                     |
| msg                  | string | message                                                                                              |
| data                 | array  |                                                                                                      |
| ├── out_trade_no     | string | your order                                                                                           |
| ├── transaction_id   | string | us order                                                                                             |
| ├── pay_type         | string | type                                                                                                 |
| ├── total_fee        | string | Amount                                                                                               |
| ├── really_total_fee | string | The amount the user actually pays (trx, or USDT) is determined based on the type parameter passed in |
| ├── pay_url          | string | Code Picture base64 encoding                                                                         |
| ├── exp_time         | string | exp_time                                                                                             |
| ├── param            | string | other  param                                                                                         |

**success function  Pay success(<font color=Crimson> post  url,notify_url </font>)**

| 参数名           | 类型   | 说明                                                                   |
| :--------------- | :----- | ---------------------------------------------------------------------- |
| code             | string | 1 Success,<1 err                                                       |
| msg              | string | message                                                                |
| type             | string | type                                                                   |
| out_trade_no     | string | your order                                                             |
| transaction_id   | string | Our order                                                              |
| total_fee        | string | Amount                                                                 |
| really_total_fee | string | 用户实际支付金额（可能是人民币,trx,或者 usdt）根据传入的 type 参数决定 |
| d_robots_id      | string |                                                                        |
| param            | string | param                                                                  |
| uid              | string | your Websites  userID                                                  |
| sign             | string | sign                                                                   |

** notify_url  (<font color=Crimson> Please use the POST request to receive</font>)**

| 参数名           | 类型   | 说明                               |
| :--------------- | :----- | ---------------------------------- |
| total_fee        | string | Order Amount (RMB)                 |
| out_trade_no     | string | order                              |
| transaction_id   | string | Our platform order number          |
| param            | string | Other parameters                   |
| uid              | Number | your Websites  userID              |
| sign             | string | sign                               |
| really_total_fee | string | The actual amount paid by the user |

**description**

- This plug-in uses the prompt message reminder, does not need the rotation training inquiry result, pays after the success function, automatically invokes the logic to jump the business

**demo Picture**

![image size](https://apiupload.oss-cn-beijing.aliyuncs.com/assets/WechatIMG136.jpeg =300x)


- MD5 sign str is

```
app_id=xxxxx&out_trade_no=xxxxx&param=&timestamp=1603698374&total_fee=xxxxx&uid=xxxxx&key=xxxxx
```

# Projects Picture

![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/b4f1b47f5dc8a939c186f74690539e83.png 'api.png')

![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/12b3110af50953cb184a7901c50fa73a.png 'api.png')

![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/6032d99b0d96bc0493a0ca2aa83dbe6d.png 'api.png')

![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/cd21ad18daf55fa92d81678164204f02.png 'api.png')

![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/0384e9a94182b32a99148969c359d92f.png 'api.png')
![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/444c48b6aa8b07211bb11327ab182e02.png 'api.png')
![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/5ede6de3de421f094f791a942c1479b3.png 'api.png')
![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/e57d6214c0a4a881e643a3c67f387166.png 'api.png')
![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/eb902bfbe4ef3b36b0881ba82331c268.png 'api.png')
