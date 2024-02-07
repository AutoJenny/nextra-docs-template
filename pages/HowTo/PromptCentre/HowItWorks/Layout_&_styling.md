# Prompt Centre layout & styling

The prompt centre layouts are generated from three main sources:
- Django Templates
- Python Scripts
- CSS styling

## Django Templates
These are COPIES of the DRF templates from the environment install, which over-ride those if in the project /templates directory at

    /var/www/next/cbos/django_project/templates

There's an ~inactive directory for ones not in use. Any 'exposed' are active.

## Python Scripts
The scripts are mainly in:

    /var/www/next/cbos/django_project/modular_scripts_app


## CSS styling

CSS styling will be over-ridden by any css in:

    /var/www/next/cbos/django_project/static/css/custom_drf.css