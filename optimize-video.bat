@echo off
echo Optimizando video para web y móviles...

REM Asegúrate de que FFmpeg esté instalado y en el PATH
REM También puedes usar la ruta completa a ffmpeg.exe

REM Crear versión móvil optimizada (480p, bitrate bajo)
ffmpeg -i public\tech4k.mp4 -vf "scale=854:480" -c:v libx264 -preset fast -crf 28 -maxrate 1M -bufsize 2M -c:a aac -b:a 128k -movflags +faststart public\tech-mobile.mp4

REM Optimizar versión desktop (1080p, mejor calidad pero optimizada)
ffmpeg -i public\tech4k.mp4 -vf "scale=1920:1080" -c:v libx264 -preset medium -crf 23 -maxrate 3M -bufsize 6M -c:a aac -b:a 192k -movflags +faststart public\tech-desktop.mp4

echo Optimización completada!
echo tech-mobile.mp4 - Para móviles (aproximadamente 70% más pequeño)
echo tech-desktop.mp4 - Para desktop (aproximadamente 40% más pequeño)
pause