# Use official Python image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY ../backend ./backend
COPY ../customers ./customers

# Collect static files
RUN python backend/manage.py collectstatic --noinput

# Expose port
EXPOSE 8000

# Run migrations (optional in container, could be done separately)
# CMD ["python", "manage.py", "migrate"]

# Start Gunicorn
CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000"]
