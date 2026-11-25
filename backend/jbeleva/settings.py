import importlib.util
import os
import shutil
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = os.environ.get(
    'DJANGO_SECRET_KEY',
    'django-insecure-mock-key-for-jbeleva-platform-setup',
)

DEBUG = os.environ.get('DJANGO_DEBUG', 'True').lower() in ('1', 'true', 'yes')

_default_hosts = [
    'tribalia.com.co',
    'www.tribalia.com.co',
    'localhost',
    '127.0.0.1',
    '.vercel.app',
    '.onrender.com',
    '.up.railway.app',
]
_env_hosts = [h.strip() for h in os.environ.get('DJANGO_ALLOWED_HOSTS', '').split(',') if h.strip()]
ALLOWED_HOSTS = _env_hosts if _env_hosts else _default_hosts
_render_host = os.environ.get('RENDER_EXTERNAL_HOSTNAME')
if _render_host and _render_host not in ALLOWED_HOSTS:
    ALLOWED_HOSTS.append(_render_host)

CSRF_TRUSTED_ORIGINS = [
    'https://tribalia.com.co',
    'https://www.tribalia.com.co',
    'https://*.vercel.app',
    'https://*.onrender.com',
    'https://*.up.railway.app',
]
_env_csrf = [o.strip() for o in os.environ.get('DJANGO_CSRF_TRUSTED_ORIGINS', '').split(',') if o.strip()]
CSRF_TRUSTED_ORIGINS.extend(_env_csrf)

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'apps.editorial',
    'apps.ecommerce',
    'apps.portal',
]

_HAS_WHITENOISE = importlib.util.find_spec('whitenoise') is not None

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    *(['whitenoise.middleware.WhiteNoiseMiddleware'] if _HAS_WHITENOISE else []),
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'jbeleva.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'jbeleva.wsgi.application'

_database_url = os.environ.get('DATABASE_URL')
if _database_url:
    import dj_database_url
    DATABASES = {
        'default': dj_database_url.config(default=_database_url, conn_max_age=600)
    }
else:
    _sqlite_path = BASE_DIR / 'db.sqlite3'
    if os.environ.get('VERCEL'):
        _tmp_db = Path('/tmp/db.sqlite3')
        if not _tmp_db.exists() and _sqlite_path.exists():
            shutil.copy2(_sqlite_path, _tmp_db)
        _sqlite_path = _tmp_db
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': _sqlite_path,
        }
    }

AUTH_PASSWORD_VALIDATORS = []

LANGUAGE_CODE = 'es-co'
TIME_ZONE = 'America/Bogota'
USE_I18N = True
USE_TZ = True

STATIC_URL = '/static/'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
]
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

if _HAS_WHITENOISE and not DEBUG:
    STORAGES = {
        'default': {
            'BACKEND': 'django.core.files.storage.FileSystemStorage',
        },
        'staticfiles': {
            'BACKEND': 'whitenoise.storage.CompressedStaticFilesStorage',
        },
    }

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

if not DEBUG:
    SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
    SESSION_COOKIE_SECURE = True
    CSRF_COOKIE_SECURE = True

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

