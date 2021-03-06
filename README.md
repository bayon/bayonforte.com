# bayonforte.com
This is the new as of Nov 9 2020 version

WHERE:

https://cloud.digitalocean.com/projects/b0a3b7e4-3fb7-43f7-8ad6-28e7ce8b0159/resources?i=c5638b

PROJECT: bayonforte.com

DOMAIN NAME: bayonforte.com

Ubuntu 16.04 server, configured with a non-root user with sudo privileges:

https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04

NON-ROOT SUDO USER:

- ssh root@your_server_ip
- adduser sammy
- usermod -aG sudo sammy
- cat ~/.ssh/id_rsa.pub
- su - sammy
- mkdir ~/.ssh
- chmod 700 ~/.ssh
- nano ~/.ssh/authorized_keys
- chmod 600 ~/.ssh/authorized_keys
- exit

SSH CONFIG:

- sudo nano /etc/ssh/sshd_config
- PasswordAuthentication no
- PubkeyAuthentication yes
- ChallengeResponseAuthentication no
- sudo systemctl reload sshd

TEST LOGIN:

- ssh sammy@your_server_ip

FIREWALL:

- sudo ufw app list
- sudo ufw allow OpenSSH
- sudo ufw enable
- sudo ufw status

Install Nginx on Ubuntu 16.04

https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-16-04

- sudo apt-get update
- sudo apt-get install nginx
- sudo ufw app list
- sudo ufw allow 'Nginx HTTP'
- sudo ufw status
- vsystemctl status nginx

- sudo apt-get install curl

- sudo systemctl stop nginx
- sudo systemctl start nginx
- sudo systemctl restart nginx
- sudo systemctl reload nginx

CONTENT:

- /var/www/html

CONFIGURATION:

- /etc/nginx
- /etc/nginx/nginx.conf
- /etc/nginx/sites-available/
- /etc/nginx/sites-enabled/
- /etc/nginx/snippets

SERVER LOGS:

- /var/log/nginx/access.log
- /var/log/nginx/error.log

SSLCERT with Letsencrypt

Secure Nginx with Let's Encrypt on Ubuntu 16.04
https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04

- sudo add-apt-repository ppa:certbot/certbot
- sudo apt-get update
- sudo apt-get install python-certbot-nginx
- sudo nano /etc/nginx/sites-available/default
- ie... server_name example.com www.example.com;
- sudo nginx -t
- sudo systemctl reload nginx

FIREWALL:

- sudo ufw status
- sudo ufw allow 'Nginx Full'
- sudo ufw delete allow 'Nginx HTTP'
- *sudo certbot --nginx -d example.com -d www.example.com

TEST:

- sudo certbot renew --dry-run
 

Continue: Set Up a Node.js Application after pre-requisites:

https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04

INSTALL NODE:

- cd ~
- curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh
- nano nodesource_setup.sh
- sudo bash nodesource_setup.sh
- sudo apt-get install nodejs
- sudo apt-get install build-essential

CREATE API:

- cd ~
- nano hello.js

<>
!/usr/bin/env nodejs
var http = require('http');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello World\n');
}).listen(8080, 'localhost');
console.log('Server running at http://localhost:8080/');
</>

- chmod +x ./hello.js
- run it: ./hello.js
- curl http://localhost:8080

PM2:

- sudo npm install -g pm2
- pm2 start hello.js
- pm2 startup systemd
- sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u sammy --hp /home/sammy
- systemctl status pm2-sammy

NGINX REVERSE PROXY:

- sudo nano /etc/nginx/sites-available/default
replace with:::
location / {
    proxy_pass http://localhost:8080;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}

ADDITIONAL APPS: example config.

location /app2 {
    proxy_pass http://localhost:8081;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}

- sudo nginx -t
- sudo systemctl restart nginx


// Main Resource: 

https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04


KNOWN ISSUES: 

- "non-www" domain name not working.
    - when I created the certs I had to comment out the "non-www" just to get one of them to work. 
