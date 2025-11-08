# 🎨 LottieAnimation Component

Componente reutilizable para renderizar animaciones Lottie en tu aplicación Next.js.

## 📦 Instalación

El componente ya está instalado y listo para usar. Solo necesitas tener `lottie-react` en tus dependencias (ya instalado).

## 🚀 Uso Básico

```tsx
import LottieAnimation from "@/components/ui/LottieAnimation"

function MiComponente() {
  return (
    <div className="w-64 h-64">
      <LottieAnimation animationPath="business-analysis.json" />
    </div>
  )
}
```

## 📋 Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `animationPath` | `string` | **requerido** | Nombre del archivo JSON o ruta completa |
| `loop` | `boolean` | `true` | Si la animación debe repetirse |
| `autoplay` | `boolean` | `true` | Si la animación debe iniciar automáticamente |
| `className` | `string` | `""` | Clases CSS adicionales |
| `style` | `React.CSSProperties` | `undefined` | Estilos inline |
| `fallback` | `React.ReactNode` | `undefined` | Componente a mostrar si hay error |

## 💡 Ejemplos de Uso

### Ejemplo 1: Uso Simple
```tsx
<LottieAnimation animationPath="business-analysis.json" />
```

### Ejemplo 2: Con Clases CSS
```tsx
<LottieAnimation 
  animationPath="business-analysis.json"
  className="w-full h-full"
/>
```

### Ejemplo 3: Sin Loop
```tsx
<LottieAnimation 
  animationPath="business-analysis.json"
  loop={false}
  autoplay={true}
/>
```

### Ejemplo 4: Con Ruta Completa
```tsx
<LottieAnimation 
  animationPath="/lottie/mi-animacion.json"
/>
```

### Ejemplo 5: Con Fallback Personalizado
```tsx
<LottieAnimation 
  animationPath="business-analysis.json"
  fallback={
    <div className="flex items-center justify-center">
      <p>No se pudo cargar la animación</p>
    </div>
  }
/>
```

### Ejemplo 6: En un Contenedor con Estilos
```tsx
<div className="relative w-96 h-96 bg-zinc-900 rounded-xl p-8">
  <LottieAnimation 
    animationPath="business-analysis.json"
    loop={true}
    autoplay={true}
  />
</div>
```

## 📁 Estructura de Archivos

Coloca tus archivos JSON de Lottie en:
```
public/
  └── lottie/
      ├── business-analysis.json
      ├── loading-animation.json
      └── success-animation.json
```

## 🎯 Cómo Agregar Nuevas Animaciones

1. **Descarga** una animación de [LottieFiles.com](https://lottiefiles.com/)
2. **Guarda** el archivo JSON en `public/lottie/`
3. **Usa** el componente con el nombre del archivo:

```tsx
<LottieAnimation animationPath="nombre-de-tu-animacion.json" />
```

## ⚡ Características

- ✅ Carga automática de animaciones
- ✅ Manejo de errores integrado
- ✅ Estado de carga con placeholder
- ✅ Optimizado para SSR (Server-Side Rendering)
- ✅ TypeScript completo
- ✅ Totalmente personalizable

## 🔧 Notas Técnicas

- El componente usa `dynamic import` para evitar problemas con SSR
- Las animaciones se cargan mediante `fetch` desde la carpeta `public`
- Si no especificas `/` al inicio, automáticamente busca en `/lottie/`
- El componente maneja estados de carga y error automáticamente

## 🎨 Ejemplo Completo en un Componente

```tsx
"use client"

import LottieAnimation from "@/components/ui/LottieAnimation"

export default function MiPagina() {
  return (
    <div className="min-h-screen bg-zinc-950 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">
          Mi Página con Animaciones
        </h1>
        
        {/* Animación Hero */}
        <div className="w-full h-96 bg-zinc-900 rounded-2xl p-8 mb-8">
          <LottieAnimation 
            animationPath="business-analysis.json"
            loop={true}
            autoplay={true}
          />
        </div>
        
        {/* Animación pequeña */}
        <div className="w-32 h-32">
          <LottieAnimation 
            animationPath="loading-animation.json"
          />
        </div>
      </div>
    </div>
  )
}
```

## 🐛 Troubleshooting

**Problema:** La animación no se muestra
- Verifica que el archivo JSON existe en `public/lottie/`
- Revisa la consola del navegador para ver errores
- Asegúrate de que el nombre del archivo es correcto

**Problema:** Error de TypeScript
- Asegúrate de que `lottie-react` está instalado: `npm install lottie-react`

**Problema:** La animación se ve cortada
- Agrega `className="w-full h-full"` al componente
- Asegúrate de que el contenedor padre tiene dimensiones definidas
