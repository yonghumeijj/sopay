<?php
/*
 * @Author: will
 * @Date: 2020-09-30 00:59:45
 * @LastEditTime: 2022-05-13 10:28:55
 * @LastEditors: will
 * @Description: 
 */
@error_reporting(E_ALL ^ E_NOTICE);

//支付平台选择
define("PAY_APPID", "xxxxxx"); //你的appid
define("PAY_KEY", "xxxxxx"); //你的秘钥
define('PAY_TYPE', 'usdt'); //支付方式或者all/usdt/wechat/alipay/qq/bankCard


/*以下信息为可选项目*/
define("PAY_CHAT_MP", "xxxxx"); //公众号获取用户信息秘钥
define('PAY_ACTION', 'POST'); //POST或者GET
define('PAY_URL', '/PaySdk/pay/sopay.php?'); //本地的支付文件

require $_SERVER['DOCUMENT_ROOT'] . '/PaySdk/Function.php';
