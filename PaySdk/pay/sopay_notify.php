<?php

/*开启后直接从数据调用id跟秘钥,否则从/PaySdk/Config.php文件调用*/
//define("PAY_APPID", "138"); //你的appid
//define("PAY_KEY", "22"); //你的秘钥

if (!function_exists('PayCreateSdk')) {
  require $_SERVER['DOCUMENT_ROOT'] . '/PaySdk/Config.php';
}
$total_fee = $_POST['total_fee']; //订单金额
$out_trade_no = $_POST['out_trade_no']; //商户订单号

$transaction_id = $_POST['transaction_id']; //我们平台订单号
$param = $_POST['param']; //下单时传送的其他参数
$uid = $_POST['uid']; //用户id

$sign = $_POST['sign']; //校验签名，计算方式 = md5(out_trade_no=xxxxx&total_fee=xxxxx&uid=xxxxx&notify_key=xxxxx)
$_sign = notify_pay_sign($_POST); //
if ($_sign != $sign) {
  echo "签名错误"; //sign校验不通过
  exit();
}

//更新订单信息
