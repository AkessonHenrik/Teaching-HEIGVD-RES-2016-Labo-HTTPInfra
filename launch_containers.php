<?php
shell_exec('docker run -d res/apache-php');
shell_exec('docker run -d res/apache-php');
shell_exec('docker run -d res/apache-php');
shell_exec('docker run -d --name static res/apache-php');
shell_exec('docker run -d res/express-app');
shell_exec('docker run -d res/express-app');
shell_exec('docker run -d res/express-app');
shell_exec('docker run -d --name dynamic res/express-app');
$output_static = shell_exec('docker inspect static | grep -i ipaddr');
$static_ip = substr($output_static, strpos($output_static, '172.17.0.'), 10);
$output_dynamic = shell_exec('docker inspect dynamic | grep -i ipaddr');
$dynamic_ip = substr($output_dynamic, strpos($output_dynamic, '172.17.0.'), 10);
shell_exec('docker run -d -e STATIC_APP='.$static_ip.':80 -e DYNAMIC_APP='.$dynamic_ip.':3000 --name rp -p 8080:80 res/apache-rp');
?>