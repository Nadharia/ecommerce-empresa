# 🛒 Proyecto E-commerce para Gestión de Ventas

## 📌 Descripción

Este proyecto es un sistema e-commerce orientado a la gestión de una pequeña empresa de ventas.  
Permite manejar productos, clientes, ventas y usuarios, con un backend en Spring Boot y un frontend en React.

El equipo está compuesto por 5 personas:

- 1 Fullstack
- 1 Backend
- 3 Frontend

---

## ⚙️ Tecnologías utilizadas

- **Backend:** Spring Boot, JPA, MySQL
- **Frontend:** React (o Vite + React)
- **Base de datos:** MySQL
- **Control de versiones:** Git y GitHub

---

## 🌱 Estructura de ramas

| Rama                   | Descripción                                      |
|------------------------|--------------------------------------------------|
| `main`                 | Versión estable para producción                  |
| `dev`                  | Rama de integración de funcionalidades           |
| `feature/backend-base` | Desarrollo inicial del backend                   |
| `feature/frontend-base`| Desarrollo inicial del frontend                  |
| `feature/*`            | Ramas para tareas específicas                    |

---

## 🚀 Cómo contribuir al proyecto

### 1. Clonar el repositorio

git clone https://github.com/tu-usuario/ecommerce-empresa.git
cd ecommerce-empresa

### 2. Cambiar a la rama dev
git checkout dev
git pull origin dev

### 3. Crear una nueva rama para tu tarea
git checkout -b feature/nombre-de-tu-tarea

###4. Realizar tus cambios
Trabajá normalmente en tu editor de código.
No hay bash acá, solo editar archivos.

### 5. Agregar y commitear tus cambios
git add .
git commit -m "✅ [AREA] descripción breve de la tarea"
Ejemplos:
git commit -m "✅ [FRONTEND] Componente login terminado"
git commit -m "🐛 [BACKEND] Fix en validación de productos"

### 6. Subir tu rama a GitHub
git push origin feature/nombre-de-tu-tarea

### Luego, en GitHub:

Hacés click en "Compare & pull request".

Seleccionás dev como rama de destino.

Agregás un título y descripción del cambio.

Asignás un revisor si corresponde.

Esperás aprobación y hacés el merge a dev.


