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
Team (equipo con modal expandible)
  ↓
Projects
  ↓
About
  ↓
CTASection (contacto + newsletter)
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

### 5. CTA Section (Contact + Newsletter)
**Ubicación:** `src/components/page_components/CTASection.tsx`

**Características:**
- Toggle entre formulario de contacto y newsletter
- Floating labels con animación suave
- Validación de formularios
- Mensajes de éxito animados
- Grid de características con iconos
- Social proof con métricas
- CTA card con gradiente
- Background animado con grid decorativo

**Datos:** `src/data/ctaData.ts`

**Formulario de Contacto:**
- Campos: Nombre, Email, Mensaje
- Labels flotantes que se elevan al focus
- Iconos en cada campo
- Validación HTML5
- Animación de envío exitoso

**Newsletter:**
- Input de email con botón integrado
- Lista de beneficios con checkmarks
- Nota de privacidad
- Confirmación animada

**Características destacadas:**
- Respuesta rápida (< 24h)
- 100% Confidencial
- Consultoría gratuita

**Social Proof:**
- 2,500+ suscriptores
- 4.9/5 calificación
- 150+ proyectos

---

### 6. Team Section
**Ubicación:** `src/components/page_components/Team.tsx`

**Características:**
- Grid de 4 miembros del equipo
- Cards interactivas con hover effects
- Modal expandible con detalles completos
- Barras de expertise animadas
- Social media icons con hover
- Fun facts y quotes personales
- Valores del equipo destacados
- Imágenes con overlay gradient

**Datos:** `src/data/teamData.ts`

**Miembros del equipo:**
1. **Alejandro Torres** - CEO & Founder
   - Estrategia Digital, Liderazgo, Innovación
   - Fun fact: Ha escalado 3 startups

2. **María Rodríguez** - Lead Designer
   - UI/UX Design, Branding, Design Systems
   - Fun fact: Colecciona fuentes tipográficas

3. **Carlos Mendoza** - Full Stack Developer
   - React, Node.js, Cloud Architecture
   - Fun fact: Resuelve bugs mientras hace yoga

4. **Laura Sánchez** - Marketing Strategist
   - Digital Marketing, Content Strategy, Analytics
   - Fun fact: Predice tendencias

**Interacciones:**
- Hover en card: Muestra social icons y skills
- Click en card: Abre modal con detalles completos
- Modal incluye: Bio, quote, fun fact, expertise bars, social links

**Valores destacados:**
- Colaboración
- Creatividad
- Excelencia
- Compromiso

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
