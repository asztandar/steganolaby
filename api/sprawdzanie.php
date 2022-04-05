<?php
header("Content-Type:application/json");

if(!empty($_GET['pin']))
{
	$pin=$_GET['pin'];
	$PIN_OK = "";
    $RES_PIN_OK = "";
	
    if(check($pin,$PIN_OK) == 1){
        response(200, "Good PIN", md5($RES_PIN_OK));
    }
    else{
        response(200,"BAD PIN",null);
    }
	
}
else
{
	response(400,"Invalid Request",NULL);
}

function check($pin, $PIN_OK){
    if(!empty($pin)){
        if($pin == $PIN_OK) return 1;
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