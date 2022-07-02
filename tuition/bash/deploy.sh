ng build
ssh root@172.104.191.199 'cd /var/www; rm -r -f /var/www/tuition'
scp -r /e/dy_sms_tui/tuition/dist/tuition root@172.104.191.199:/var/www
