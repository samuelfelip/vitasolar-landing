# Videos para VitaSolar

Esta carpeta contiene los videos que se reproducen en el sitio web de VitaSolar.

## Agregar video principal

Para que el componente VideoSection funcione correctamente, necesitas agregar un video en esta carpeta con el nombre:

- **vitasolar-instalacion.mp4** (formato principal)
- **vitasolar-instalacion.webm** (formato alternativo para mejor compatibilidad)

### Especificaciones del video:

- **Resolución**: 1920x1080 (Full HD)
- **Duración**: 3-5 minutos recomendado
- **Formato**: MP4 (H.264) y WebM
- **Tamaño**: Máximo 50MB para buena carga
- **Contenido sugerido**:
  - Proceso de instalación de paneles solares
  - Testimonios de clientes
  - Equipos y tecnología VitaSolar
  - Beneficios de la energía solar

### Cómo agregar el video:

1. Coloca tu video en esta carpeta (`public/videos/`)
2. Renómbralo como `vitasolar-instalacion.mp4`
3. El componente VideoSection lo detectará automáticamente

### Vista previa:

El componente muestra una imagen de preview generada automáticamente con:
- Logo y colores VitaSolar
- Botón de play centrado
- Información del video
- Controles de reproducción

### Herramientas recomendadas para convertir video:

- **FFmpeg** (línea de comandos)
- **HandBrake** (interfaz gráfica)
- **CloudConvert** (online)

### Ejemplo comando FFmpeg:
```bash
ffmpeg -i input.mov -c:v libx264 -crf 23 -c:a aac -b:a 128k vitasolar-instalacion.mp4
``` 