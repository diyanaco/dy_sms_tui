# dy_sms_tui
Angular Application

Angular app is hosted on Apache server
sudo apt install apache2

Copy the dist/ folder in /var/www/ folder.

nano /etc/apache/sites-available/angular.conf

<VirtualHost *:80>
ServerAdmin support@example.com
ServerName 172.104.191.199
ServerAlias www.diyana.co
DocumentRoot /var/www/tuition
<Directory “/var/www/tuition”>
AllowOverride All
Require all granted

a2ensite angular.conf

sudo systemctl restart apache2
