<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header("Content-Type:application/json");


if(!empty($_GET['token']))
{
	$token=$_GET['token'];
    $token_good = "";
    $token_good_md5 = md5($token_good);
	
    if(check($token,$token_good_md5) == 1){
        response(200, "Good token", $token_good_md5);
    }
    else{
        response(200,"BAD token",null);
    }
	
}
else
{
	response(400,"Invalid Request",NULL);
}

function check($token, $token_good_md5){
    if(!empty($token)){
        if($token == $token_good_md5) return 1;
        else return 0;
    }else return 0;
}

function response($status,$status_message,$data)
{
	header("HTTP/1.1 ".$status);
	
	$response['status']=$status;
	$response['status_message']=$status_message;
	$response['data']=$data;
	
	$json_response = json_encode($response);
	echo $json_response;
}