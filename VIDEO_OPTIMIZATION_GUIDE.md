# Guía de Optimización de Video para Hero Component

## 1. Instalar FFmpeg

### Para Windows:
1. Descarga FFmpeg desde: https://ffmpeg.org/download.html
2. Extrae el archivo en C:\ffmpeg
3. Añade C:\ffmpeg\bin al PATH de Windows
4. Reinicia la terminal

### Alternativa rápida con Chocolatey:
```bash
choco install ffmpeg
```

### Para verificar la instalación:
```bash
ffmpeg -version
```

## 2. Optimizar Videos

### Comando para video móvil (ejecutar en la carpeta del proyecto):
```bash
ffmpeg -i public/tech4k.mp4 -vf "scale=854:480" -c:v libx264 -preset fast -crf 28 -maxrate 800k -bufsize 1600k -c:a aac -b:a 96k -movflags +faststart public/tech-mobile.mp4
```

### Comando para video desktop optimizado:
```bash
ffmpeg -i public/tech4k.mp4 -vf "scale=1920:1080" -c:v libx264 -preset medium -crf 23 -maxrate 2500k -bufsize 5000k -c:a aac -b:a 128k -movflags +faststart public/tech-desktop.mp4
```

## 3. Optimizaciones Implementadas en el Código

✅ **Detección de conexión lenta**: El componente detecta automáticamente conexiones lentas
✅ **Preload optimizado**: Solo metadata en móvil vs auto en desktop
✅ **Fallback inteligente**: Si el video falla, automáticamente usa imagen
✅ **Carga condicional**: Video solo si la conexión es buena
✅ **Poster frame**: Imagen mientras carga el video
✅ **Optimización de animaciones**: Reduced will-change en móvil

## 4. Tamaños de Archivo Esperados

- Video original (4K): ~50-100MB
- Video mobile optimizado: ~5-15MB (80-90% reducción)
- Video desktop optimizado: ~20-40MB (50-70% reducción)

## 5. Métricas de Performance

- **LCP mejorado**: Poster image carga inmediatamente
- **CLS reducido**: Video placeholder evita layout shift
- **Bandwidth consciente**: Adapta calidad según conexión
- **Mobile first**: Prioriza experiencia móvil

## 6. Próximos pasos

1. Instala FFmpeg
2. Ejecuta los comandos de optimización
3. Actualiza las rutas en el código si es necesario
4. Testa en dispositivos móviles reales
5. Monitorea métricas de performance

## 7. Alternativas si FFmpeg no funciona

Puedes usar herramientas online como:
- CloudConvert
- Online-Convert
- Zamzar

O software GUI como:
- HandBrake (gratuito)
- Adobe Media Encoder
- Final Cut Pro / Premiere Pro