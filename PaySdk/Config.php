<?php
/*
 * @Author: will
 * @Date: 2020-09-30 00:59:45
 * @LastEditTime: 2022-06-11 00:45:34
 * @LastEditors: will
 * @Description: 
 */
@error_reporting(E_ALL ^ E_NOTICE);

//支付平台选择
define("PAY_APPID", "xxxx"); //你的appid
define("PAY_KEY", "xxxx"); //你的秘钥
define('PAY_TYPE', 'usdtAndTrx'); //支付方式或者all/usdtAndTrx/usdt/trx/wechat/alipay/qq/bankCard/alipay    


/*以下信息为可选项目*/
define("PAY_CHAT_MP", "ae6334e79c24d90f055f14667a6abbed"); //公众号获取用户信息秘钥
define('PAY_ACTION', 'POST'); //POST或者GET
define('PAY_URL', '/PaySdk/pay/sopay.php?'); //本地的支付文件

require $_SERVER['DOCUMENT_ROOT'] . '/PaySdk/Function.php';
