This is a simple template to get started with Django quickly. It
contains Twitter Bootstrap and an application called 'mainapp'.

## Installation

    django-admin.py startproject --template "https://github.com/kroger/django-project-template/zipball/master" <project name>

## Install Packages

    cd {{ project_name }}
    pip install -r requirements.txt

## Configuration

Use `{{ project_name }}/settings_development.py` for development
settings and `{{ project_name }}/settings.py` for global settings.
When you deploy, you should create a JSON file named "serverconf.json"
with at least the "DJANGO_ENV" key. Its value can be "production" or
"staging". If the file doesn't exist or the key is not defined,
settings.py will assume we have a development environment. You can use
serverconf.json to store other server-specific information such as
database names and passwords. Here's an example:


    {
        "DJANGO_ENV": "production"
    }


## Sync database

    python manage.py syncdb


## Running

    python manage.py runserver
