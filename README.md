# Portfolio personal — Gonzalo Victoria

Portfolio personal de Gonzalo Victoria, administrador de sistemas y desarrollador full stack. La web reúne su perfil, conocimientos técnicos, experiencia profesional, proyectos y formación en una sola página.

## Características

- Diseño adaptable a móvil y escritorio, con navegación fija y sección activa.
- Contenido en español e inglés; la selección se guarda en el navegador cuando está disponible.
- Trayectoria profesional, proyectos web y formación complementaria.
- Descarga del CV y enlaces de contacto.
- Animación decorativa que respeta la preferencia de movimiento reducido del dispositivo.
- Página 404 personalizada.

## Tecnologías

HTML, CSS y JavaScript sin frameworks ni proceso de compilación. Las fuentes se cargan desde Google Fonts, con alternativas locales si no están disponibles.

## Ejecución local

Puedes abrir `index.html` directamente en el navegador o servir la carpeta con un servidor local. Por ejemplo, con Python instalado:

```bash
python server.py
```

Después, abre `http://localhost:8000` en el navegador. Para detener el servidor, pulsa `Ctrl+C` en la terminal. Este servidor también muestra la página 404 para rutas inexistentes. En producción, el servidor o proveedor de alojamiento debe servir `404.html` para los errores 404; GitHub Pages lo hace automáticamente.

## Estructura

```text
├── index.html                  # Landing principal
├── 404.html                    # Página de error
├── server.py                   # Servidor local con respuesta 404 personalizada
├── css/
│   └── home.css                # Estilos y diseño adaptable
├── js/
│   ├── home.js                 # Navegación e interacciones
│   └── i18n.js                 # Traducciones y selector de idioma
└── media/
    ├── docs/CV-GV2026_WEB.pdf  # Currículum descargable
    └── images/                 # Retrato e icono SVG
```

## Actualización del contenido

El contenido en español se encuentra en `index.html`. Al modificar textos visibles, actualiza también su traducción en `js/i18n.js`: el selector de idioma identifica los textos originales para sustituirlos por su versión inglesa. Los estilos están en `css/home.css`.

El CV enlazado actualmente está en español. Si se sustituye por otro archivo, actualiza también el enlace de descarga en `index.html`.

## Contacto

- [LinkedIn](https://www.linkedin.com/in/gonzalo-victoria-de-lecea-ort%C3%ADz-778355219/)
- [GitHub](https://github.com/R1NLER)
- [Correo electrónico](mailto:gonzalovictoriaortiz@gmail.com)
