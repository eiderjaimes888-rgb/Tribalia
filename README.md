# JB Consulting & Co SAS - JBEleva Platform

Estructura base, modelos de datos relacionales y API transaccional para la venta automatizada del software **Eleva** y la administración del contenido editorial y portal de clientes.

## Arquitectura del Proyecto

El proyecto está organizado en una arquitectura de capas moderna desacoplada en:
- `backend/`: Lógica de negocio (FastAPI, SQLAlchemy y PostgreSQL).
- `frontend/`: Aplicación cliente (Estructura base lista para Next.js / React).

```text
jbeleva/
├── backend/
│   ├── app/
│   │   ├── api/             # Controladores API (webhook de pagos)
│   │   ├── models/          # Esquemas SQLAlchemy (editorial, e-commerce, portal)
│   │   ├── schemas/         # Validaciones Pydantic
│   │   ├── services/        # Generación de licencias y lógica de credenciales
│   │   ├── database.py      # Conexión ORM
│   │   └── main.py          # Punto de entrada FastAPI
│   ├── database/
│   │   └── schema.sql       # Script DDL SQL de base de datos relacional
│   └── requirements.txt     # Dependencias de Python
└── README.md
```

## Módulos del Sistema

### 1. Módulo Editorial
*   **Artículos**: Permite programar fechas de publicación futuras (`published_at`) y manejar estados de publicación (`draft`, `published`, `scheduled`).
*   **Revistas Corporativas**: Soporte para la carga periódica de archivos PDF adjuntando edición, título y portada digital.

### 2. Módulo E-commerce (Ecosistema Eleva)
*   **Control de Versiones y Productos**: Soporte para productos del ecosistema digital como *Eleva* y *Eleva Exógena*.
*   **Licencias y Precios**: Configuración de plazos flexibles (Mensual/Anual) vinculados a días de duración (`duration_days`).
*   **Entrega Automatizada**: Verificación de compras exitosas y asignación directa de licencias y credenciales de acceso seguras para el cliente.

### 3. Portal Externo
*   Redirecciones seguras parametrizables y mapeo de accesos de clientes a aplicaciones de software externas.

## Inicialización del Backend Local

1.  Crear entorno virtual:
    ```bash
    python -m venv venv
    .\venv\Scripts\activate
    ```
2.  Instalar dependencias:
    ```bash
    pip install -r backend/requirements.txt
    ```
3.  Iniciar servidor de desarrollo (Auto-generará las tablas SQLite locales si no se define `DATABASE_URL`):
    ```bash
    cd backend
    uvicorn app.main:app --reload
    ```
4.  Acceder a la documentación autogenerada:
    *   Swagger UI: `http://127.0.0.1:8000/docs`
    *   ReDoc: `http://127.0.0.1:8000/redoc`
