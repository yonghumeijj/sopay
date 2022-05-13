<?php
function PayCreateSdk($payData)
{
  if (!is_array($payData)) {
    exit("data错误");
  }
  $payData['app_id'] = PAY_APPID;
  $payData['type'] = PAY_TYPE;
  $payData['timestamp'] = time();
  $payData['sign'] = pay_sign($payData);
  $url = PAY_URL;

  if (!empty($payData['return_url'])) {
    $payData['return_url'] = urlencode($payData['return_url']); //
  }
  if (!empty($payData['notify_url'])) {
    $payData['notify_url'] = urlencode($payData['notify_url']); //
  }
  if (strtolower(PAY_ACTION) == 'post' && PAY_TYPE != 'alipay') {
    //循环拼接表单项
    $sHtml = "<form id='aliPaySubmit' name='aliPaySubmit' action='" . $url . "' method='post'>";
    foreach ($payData  as  $key => $value) {
      $sHtml .= "<input name='{$key}' type='hidden' value='{$value}'/>";
    }
    $sHtml = $sHtml . "<input type='submit' value='正在提交...'></form>";
    $sHtml = $sHtml . "<script>document.forms['aliPaySubmit'].submit();</script>";
    exit($sHtml);
  }
  $urlParam = http_build_query($payData);
  $url .= $urlParam; //微信支付通道

  return $url;
}



/**
 * 支付签名
 * @param array $array
 * @return string
 */

function pay_sign($payData)
{
  $ksortData = array(
    'app_id' => PAY_APPID,
    'uid' => $payData['uid'],
    'out_trade_no' => $payData['out_trade_no'],
    'total_fee' => $payData['total_fee'], //平台单号
    'param' => $payData['param'],
    'timestamp' => $payData['timestamp']
  );
  ksort($ksortData);
  $str = '';
  foreach ($ksortData as $pk => $pv) {
    $str .= strtolower($pk) . "=" . $pv . "&";
  }
  $str .= "key=" . PAY_KEY;
  $sign = md5($str);
  return $sign;
}

/**
 * 回调验证签名
 * @param array $array
 * @return string
 */

function notify_pay_sign($payData)
{
  $str = "out_trade_no=" . $payData['out_trade_no'] . "&total_fee=" . $payData['total_fee'] . "&uid=" . $payData['uid'] . "&notify_key=" . PAY_KEY;
  $sign = md5($str);
  return $sign;
}


/**
 * 获取用户信息
 * @param array $array
 * @return string
 */
function get_openid_info($arr)
{
  $ip = $_SERVER['SERVER_ADDR'];
  $sign = md5(PAY_APPID . $ip);
  $mchId = '';
  $str = "6K+36IGU57O7c29wYXnlrqLmnI3lvIDpgJrlhazkvJflj7c=";
  if (md5($sign) != PAY_CHAT_MP) {
    $str = base64_decode($str);
    $str .= $sign;
    exit($str);
  }

  if (isset($arr['openid'])) {
    $result_info = array();
    $result_info['openid'] = $arr['openid'];
    $result_info['nickname'] = decimal2ABC($arr['openid']);
    $result_info['sex'] = '2';
    $result_info['city'] = '';
    $result_info['province'] = '';
    $result_info['country'] = '';
    $result_info['privilege'] = '';
    $result_info['unionid'] = '';
    $result_info['headimgurl'] = 'http://thirdwx.qlogo.cn/mmopen/p1WqdXskn885tL19Tu5LDWNrI5GicpwfcOfbEG1QQEzZCTm8q3BKRF6KibZ6vuV8ReTdxMbhHm7Z6iaXfduFaqDh3WqG1QGh2Yic/132';
    $res = json_encode($result_info, JSON_UNESCAPED_UNICODE);
    return $res;
  }
  if (empty($arr['back_url'])) {
    $arr['back_url'] = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
  }
  $arr['back_url'] = urlencode($arr['back_url']); //url编码
  $url = "https://payjs.cn/api/openid?mchid={$mchId}&callback_url=" . $arr['back_url'];
  exit("<meta http-equiv='Refresh' content='0;URL={$url}'>");
}

//解析昵称
function decimal2ABC($num)
{
  return substr($num, -4);
}
