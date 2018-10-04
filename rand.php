<?php
header('Content-Type: application/json; charset=utf-8');

$getdata = $_POST['JSON_data'];


$array=json_decode($getdata); 

$division=$_POST['group'];

// parse_str($getgrnum,$division);


//   $array = [1,2,3,4],[5,6,7,][8,9,10];//仮の配列が10です。置き換えて使用して下さい
 
/* 配列を逆順に */
var_dump( shuffle($array) );

//   $division; //仮数値が3です。置き換えて使用して下さい
  
  function array_divide($array, $division) {
    $base_count = floor(count($array) / $division); // 部分配列1個あたりの要素数
    $remainder  = count($array) % $division;        // 余りになる要素数

    $ret = array();
    $offset = 0;
    for($i = 0; $i < $division; $i++) {
        /*
         * 余りの要素がある場合は、
         * 先頭の部分配列に1個ずつまぶしていく
         */
        if (empty($remainder)) {
            $length = $base_count;
        } else {
            $length = $base_count + 1;
            $remainder--;
        }
        $ret[] = array_slice($array, $offset, $length);

        $offset += $length;
    }

    return $ret;
  }
  $ret = array_divide($array, $division);


echo json_encode($ret); // phpは配列をechoで表示できないためjsonを使用する
?>