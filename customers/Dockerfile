# Use official Python image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install system dependencies for mysqlclient
RUN apt-get update && apt-get install -y \
    gcc \
    pkg-config \
    default-libmysqlclient-dev \
    && rm -rf /var/lib/apt/lists/*

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy Django project
COPY ../backend ./backend
COPY . .

# Collect static files
#RUN python manage.py collectstatic --noinput

# Expose port
EXPOSE 8000

# Run migrations (optional in container, could be done separately)
# CMD ["python", "manage.py", "migrate"]

# Start Django dev server with auto-reload
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
