<?php
 $static_ip_address = getenv('STATIC_APP');
 $dynamic_ip_address = getenv('DYNAMIC_APP');
?>
<VirtualHost *:80>
  ServerName demo.res.ch
  #Hello
  #ErrorLog ${APACHE_LOG_DIR}/error.log
  #CustomLog ${APACHE_LOG_DIR}/access.log combined

  ProxyPass '/api/quotes/' 'http://<?php print "$dynamic_ip_address"?>/'
  ProxyPassReverse '/api/quotes/' 'http://<?php print "$dynamic_ip_address"?>/'

  ProxyPass '/' 'http://<?php print "$static_ip_address"?>/'
  ProxyPassReverse '/' 'http://<?php print "$static_ip_address"?>/'
</VirtualHost>
