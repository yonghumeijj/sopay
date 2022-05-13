<?php
/*
 * @Author: will
 * @LastEditors: will
 * @Description: 
 */
@error_reporting(E_ALL ^ E_NOTICE);
header('Content-Type: text/html; charset=utf-8');

extract($_GET);
extract($_POST);

//获取来路
$notify_url = urldecode($notify_url); //来路
$return_url = urldecode($return_url); //解码支付成功后的页面

//http://api.bjyjbn.com/static/sopay_bank.js
?>
<!DOCTYPE html>
<html>

<head>
  <title><?php echo $pay_title ?></title>
  <meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0" />
  <meta name="format-detection" content="telephone=no,email=no,date=no,address=no">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <script src="https://apiupload.oss-cn-beijing.aliyuncs.com/assets/sopay.js?v=<?php echo  time() ?>"></script>
</head>

<body>

  <div class="url_pay">
    <h2><img src="" /></h2>
    <div class="warp">
      <h3>请付款<span style="font-size:34px">👉</span><span class="total_fee"></span>元</h3>
      <h4>支付成功后请耐心等待3-6秒,自动跳转(<span>多付少付不到账</span>)</h4>
      <div class="qr"><img src="https://apiupload.oss-cn-beijing.aliyuncs.com/assets/lodding.png" id="base64img" /></div>
      <div id="myProgress">
        <div id="myBar">100%</div>
      </div>
      <h6>支付倒计时:<span class="exprie_time" id="exprie_time"></span>秒</h6>
      <a href="javascript:void(0)" class="payok">支付完成点击这里</a>
      <h5></h5>
    </div>
  </div>



  <script>
    $(document).ready(function() {
      SoPay.post({
        app_id: "<?php echo $app_id ?>", //
        type: "<?php echo $type ?>", //
        uid: "<?php echo $uid ?>",
        total_fee: "<?php echo $total_fee ?>",
        out_trade_no: "<?php echo $out_trade_no ?>",
        timestamp: "<?php echo $timestamp ?>",
        return_url: "<?php echo $return_url ?>",
        notify_url: "<?php echo $notify_url ?>",
        param: "<?php echo $param ?>",
        sign: "<?php echo $sign ?>",
        callback: function(res) {
          //获取二维码后显示的函数
          console.log(res);
          if (res.code != 1) {
            swal('错误', res.msg, 'error')
            return
          }
          $("#base64img").attr("src", res.data.pay_url);
          $(".total_fee").html(res.data.really_total_fee);
          $(".exprie_time").html(res.data.exp_time);
          $(".order_no").html(res.data.out_trade_no);
        },
        success: function(data) {
          //支付成功后的函数
          alert("支付成功");
          console.log(data);
          window.location.href = "<?php echo $return_url ?>"
        }
      });

    });
  </script>
</body>