import os
from django.core.wsgi import get_wsgi_application

  # Ensure 'mysite' matches your project folder name

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings')
application = get_wsgi_application()