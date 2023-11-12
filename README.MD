# Backend

The backend is a Laravel 10.

You run the project using:
```
# Install dependencies
composer install

# Set up the .env file
cp .env-example .env

# Start the sqlite database:
php artisan migrate

# Seed the database with 10 fake records:
php artisan db:seed --class=FormSeeder 

# Start the backend server:
php artisan serve
```

It should run the backend server on http://127.0.0.1:8000

On another terminal open my-app directory and run:

```
npm install
npm run dev
```

It should run  the front end app at: http://localhost:3000

The project was build using:
node version 21.1.0
php version 8.2

