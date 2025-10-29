# Guía de Componentes - Artag Website

## Nuevos Componentes Agregados

### 1. StatsSection (Mejorado)
**Ubicación:** `src/components/page_components/stats-section.tsx`

**Características:**
- Contador animado que sube desde 0 hasta el valor final
- Animación suave de 2 segundos con easing
- Soporta sufijos como "+", "K", "M"
- Se activa al entrar en viewport
- Diseño responsivo con efectos hover

**Uso:**
```tsx
<StatsSection
  title={"Estadisticas"}
  description={"algunas estadisticas de nuestro trabajo"}
  stats={[
    { value: "100+", label: "Proyectos completados" },
    { value: "50+", label: "Clientes felices" },
    { value: "10+", label: "Premios ganados" },
  ]}
/>
```

---

### 2. Services Section
**Ubicación:** `src/components/page_components/Services.tsx`

**Características:**
- Grid de 2 columnas (imagen + lista de servicios)
- Transiciones suaves con blur + scale + fade
- Hover en desktop, click en mobile
- Animaciones de entrada escalonadas
- Imágenes optimizadas con Next/Image

**Datos:** `src/data/servicesData.ts`

**Servicios incluidos:**
- Identidad de marca
- Desarrollo web
- Creación de contenido
- Motion & Modelado 3D

---

### 3. Why Choose Us Section
**Ubicación:** `src/components/page_components/WhyChooseUs.tsx`

**Características:**
- Estadísticas con contador animado
- Grid de razones con iconos
- Testimonios de clientes con imágenes
- Logos de clientes con efecto grayscale
- Diseño fluido y moderno
- Totalmente responsivo

**Datos:** `src/data/whyChooseUsData.ts`

**Secciones incluidas:**
- Header con descripción
- 4 estadísticas animadas
- 4 razones principales
- 2 testimonios con fotos
- Logos de clientes

---

## Estructura de la Página Principal

```
Hero
  ↓
StatsSection (con contadores animados)
  ↓
Services (hover con imágenes)
  ↓
WhyChooseUs (testimonios + razones)
  ↓
Pricing (planes con toggle mensual/anual)
  ↓
Projects
  ↓
About
  ↓
Contact
  ↓
Footer
```

---

### 4. Pricing Section
**Ubicación:** `src/components/page_components/Pricing.tsx`

**Características:**
- Toggle mensual/anual con badge de descuento
- 3 planes de precios (Starter, Business, Premium)
- Plan "Más Popular" destacado y escalado
- Lista de características con iconos check/x
- Cálculo automático de ahorro anual
- Sección de beneficios con iconos
- FAQs expandibles con animación
- Diseño totalmente responsivo

**Datos:** `src/data/pricingData.ts`

**Planes incluidos:**
- **Starter** ($299/mes) - Para emprendedores
- **Business** ($599/mes) - Más popular, para empresas en crecimiento
- **Premium** ($999/mes) - Solución enterprise completa

**FAQs incluidos:**
- Qué incluye el soporte
- Cambio de planes
- Garantía de devolución
- Dominio y hosting
- Métodos de pago

---

## Tecnologías Utilizadas

- **Next.js 15** - Framework React
- **Framer Motion** - Animaciones fluidas
- **TypeScript** - Type safety
- **TailwindCSS** - Estilos
- **Lucide React** - Iconos

---

## Personalización

### Cambiar imágenes de servicios:
Edita `src/data/servicesData.ts` y reemplaza las URLs de Unsplash con tus propias imágenes.

### Cambiar testimonios:
Edita `src/data/whyChooseUsData.ts` y actualiza los datos de testimonios.

### Cambiar estadísticas:
Edita los props de `<StatsSection>` en `src/app/page.tsx`.

---

## Notas de Rendimiento

- Todas las imágenes usan Next/Image para optimización automática
- Animaciones solo se activan cuando entran en viewport
- Lazy loading de componentes
- Transiciones GPU-accelerated con Framer Motion
