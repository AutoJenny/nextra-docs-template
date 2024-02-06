# 1. BACKEND (dev) Server

Port: 8000
Start Command: python manage.py runserver 0.0.0.0:8000
Working Directory: /var/www/next/cbos/django_project
systemd Service File: django_dev.service
systemd Configuration (django_dev.service)
systemd
Copy code
[Unit]
Description=Django Development Server (Port 8000)
After=network.target

[Service]
User=bookofscotland
WorkingDirectory=/var/www/next/cbos/django_project
ExecStart=/var/www/next/cbos/backend-venv/bin/python /var/www/next/cbos/django_project/manage.py runserver 0.0.0.0:8000
Restart=always

[Install]
WantedBy=multi-user.target

# 2. BACKEND (live) Server

Port: 8000
Start Command: python manage.py runserver 0.0.0.0:8000
Working Directory: /var/www/next/cbos/django_project
systemd Service File: django_dev.service
systemd Configuration (django_dev.service)
systemd
Copy code
[Unit]
Description=Django Development Server (Port 8000)
After=network.target

[Service]
User=bookofscotland
WorkingDirectory=/var/www/next/cbos/django_project
ExecStart=/var/www/next/cbos/backend-venv/bin/python /var/www/next/cbos/django_project/manage.py runserver 0.0.0.0:8000
Restart=always

[Install]
WantedBy=multi-user.target



# 3. INTRANET Server

Port: 3001
Start Command: npm run dev
Working Directory: /var/www/next/cbos/next_js_frontend/intranet
systemd Service File: nextjs_intranet_3001.service
systemd Configuration (nextjs_intranet_3001.service)
systemd
Copy code
[Unit]
Description=Next.js Server for Intranet on Port 3001
After=network.target

[Service]
WorkingDirectory=/var/www/next/cbos/next_js_frontend/intranet
ExecStart=/usr/bin/npm run dev
Restart=always
User=bookofscotland
Group=bookofscotland
Environment=PATH=/usr/bin:/usr/local/bin
Environment=NODE_ENV=development

[Install]
WantedBy=multi-user.target

# 2. NPM Server

Port: 3000
Start Command: npm run dev
Working Directory: /var/www/next/cbos/django_project (Adjust as needed)
systemd Service File: npm_server_3000.service
systemd Configuration (npm_server_3000.service)
systemd
Copy code
[Unit]
Description=NPM Server on Port 3000
After=network.target

[Service]
User=bookofscotland
WorkingDirectory=/var/www/next/cbos/django_project
ExecStart=/usr/bin/npm run dev
Restart=always

[Install]
WantedBy=multi-user.target