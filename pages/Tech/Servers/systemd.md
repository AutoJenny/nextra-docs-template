# SystemD auto-restart

cd /etc/systemd/system/

[Unit]
Description=Django Development Server (Port 8000)
After=network.target

[Service]
User=bookofscotland 
WorkingDirectory=/var/www/next/cbos/django_project
ExecStart=/var/www/next/cbos/backend-venv/bin/python /var/www/next/cbos/django_project python manage.py runserver 0.0.0.0:8000

[Install]
WantedBy=multi-user.target



[Unit]
Description=MODULAR SCRIPTS (3000)
After=network.target

[Service]
User=bookofscotland
WorkingDirectory=/var/www/next/cbos/django_project/modular_scripts_app
ExecStart=/usr/bin/python3 /var/www/next/cbos/modular_scripts_app npm run dev
Restart=always

[Install]
WantedBy=multi-user.target


                                
[Unit]
Description=Next.js Server for INTRANET (3001)
After=network.target

[Service]
User=bookofscotland
WorkingDirectory=/var/www/next/cbos/next_js_frontend/intranet
ExecStart=/var/www/next/cbos/next_js_frontend/intranet npm run dev
Restart=always
Group=bookofscotland
Environment=PATH=/usr/bin:/usr/local/bin
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target



GNU nano 6.2                        cbos_gunicorn.service                                 
[Unit]
Description=gunicorn daemon for Django project
After=network.target

[Service]
User=bookofscotland
Group=bookofscotland
WorkingDirectory=/var/www/next/cbos/django_project
ExecStart=/var/www/next/cbos/backend-venv/bin/gunicorn --access-logfile - --workers 3 --bin>
Restart=always  # Auto-restart on failure

[Install]
WantedBy=multi-user.target