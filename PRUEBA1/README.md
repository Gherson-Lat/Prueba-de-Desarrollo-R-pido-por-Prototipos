Bloque 1: Prototipo Front-end en Vue.js 3
Objetivo
Validar manejo de Vue 3 (Composition API), consumo de APIs, estado reactivo,
componentes y control de errores.
Enunciado
Crea un mini-prototipo “Lista de Tareas” que:

1. Consuma GET https://jsonplaceholder.typicode.com/todos.
2. Muestre en una tabla los primeros 10 ítems (título + checkbox de “completed”).
3. Permita filtrar entre “Completadas” y “Pendientes” via dropdown.
4. Maneje errores de red mostrando un mensaje amigable.

src/
├─ components/
│ └─ Table.vue # Componente para mostrar la tabla de tareas
├─ App.vue # Componente raíz que consume la API y maneja estado
└─ main.js # Entrada principal

Tecnologías usadas

    Vue.js 3 (Composition API)

    Fetch API para consumo de datos

    Tailwind CSS (opcional para estilos)

    Estructura modular con compo

Cómo usar

    Clonar el repositorio

    Ejecutar npm install para instalar dependencias

    Ejecutar   npm run dev para levantar la app localmente

    Abrir el navegador en http://localhost:(Por defecto escojera un puerto Disponible)
