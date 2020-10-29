<?php

$numbers = [2, 3, 5, 5, 22, 23];

function my_filter($arr, $cb) {
    $result_array = [];
    foreach($arr as $k => $v) {
        $result = $cb($v);
        if($result){
            $result_array[$k] = $v;
        }
    }
    return $result_array;
}

$odd2 = my_filter($numbers, function($val) {
    return $val % 2;
});

print_r($odd2);




?>
