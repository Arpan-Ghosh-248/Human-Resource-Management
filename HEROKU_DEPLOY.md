# How to deploy to heroku

## Clone Project

```
git clone git@github.com:Tech-i-s/techis-task-management-system.git
cd techis-task-management-system
```

## Heroku Setup
First install heroku cli
https://devcenter.heroku.com/articles/heroku-cli


## login to heroku
```
heroku login
# create app for frontend
heroku create frontend-task-management-sys

# create app for backend
heroku create backend-task-management-sys

```

## setup git remote for frontend
```bash
cd .\frontend\
heroku git:remote -a frontend-task-management-sys

# rename heroku remote. because we have 2 apps in one project.
git remote rename heroku frontend-task-management-sys

# back to root directory
cd ..
```

## setup git remot for backend

```bash

# step into backend folder
cd .\backend\
heroku git:remote -a backend-task-management-sys

# rename heroku remote. because we have 2 apps in one project.
git remote rename heroku backend-task-management-sys
# back to root directory
cd ..
```

## Push our code to Heroku
```bash
# push frontend to frontend-task-management-sys
git subtree push --prefix frontend frontend-task-management-sys main

# push backend to app backend-task-management-sys
git subtree push --prefix backend backend-task-management-sys main
```

# You are done ;)

# tips
run heroku bash 
```bash
heroku run bash --app backend-task-management-sys
```

dump data from heroku 

```bash
heroku run --app backend-task-management-sys python manage.py dumpdata --natural-primary -- > data.json
```