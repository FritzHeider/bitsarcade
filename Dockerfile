# Dockerfile for Laravel application
FROM php:8.1-cli

# Install system dependencies
RUN apt-get update \
    && apt-get install -y git unzip libzip-dev \
    && docker-php-ext-install zip pdo pdo_mysql

# Set working directory
WORKDIR /var/www/html

# Copy composer files separately to leverage Docker cache
COPY composer.json composer.lock* ./

# Install PHP dependencies (ignore platform requirements for broader compatibility)
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    && composer install --no-scripts --no-autoloader --ignore-platform-reqs || true

# Copy application source
COPY . .

# Install PHP dependencies with application code present
RUN composer install --ignore-platform-reqs || true

# Expose port and start the Laravel development server
EXPOSE 8000
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
