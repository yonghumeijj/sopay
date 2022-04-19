<?php

//此处如果设置了秘钥,config里面设置的将失效！这个地方可以从数据库调用
//define("PAY_APPID", "138"); //你的appid
//define("PAY_KEY", "22"); //你的秘钥


define('PAY_TYPE', 'all'); //支付类型 all/usdt/wechat/alipay/qq/bankCard
if (!function_exists('PayCreateSdk')) {
  require $_SERVER['DOCUMENT_ROOT'] . '/PaySdk/Config.php';
}

$payData = array(
  'uid' => "2222", //你的网站用户id
  'out_trade_no' => time(), //订单号
  'total_fee' => 2, //金额
  'param' => "333", //其他参数,可返回回调里面
  'return_url' => 'http://' . $_SERVER['HTTP_HOST'], //支付成功后返回
  'notify_url' => "http://www.baidu.com", //异步回调地址
);
$geturl = PayCreateSdk($payData);
exit("<meta http-equiv='Refresh' content='0;URL={$geturl}'>");
