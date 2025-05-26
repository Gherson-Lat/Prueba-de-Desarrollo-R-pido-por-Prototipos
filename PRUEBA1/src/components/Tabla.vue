<template>
  <div>
    <!-- Etiquetamos los campos deseados   -->
    <label for="filtro" class="mb-2 block font-semibold">Filtrar tareas:</label>
    <select id="filtro" v-model="filtro" class="mb-4 p-1 border rounded">
      <option value="todas">Todas</option>
      <option value="completadas">Completadas</option>
      <option value="pendientes">Pendientes</option>
    </select>

    <!-- Muestra error en consumo de api -->
    <div v-if="error" class="text-red-600 font-bold mb-4">{{ error }}</div>

    <!-- Muestra si solo hay errores-->

    <table v-else class="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th class="border border-gray-300 px-4 py-2 text-left">Título</th>
          <th class="border border-gray-300 px-4 py-2 text-left">Completada</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tarea in tareasFiltradas" :key="tarea.id" class="hover:bg-gray-100">
          <!-- Muestra el título de la tarea -->
          <td class="border border-gray-300 px-4 py-2">{{ tarea.title }}</td>
          <td class="border border-gray-300 px-4 py-2 text-center">
            <!-- Checkbox para mostrar si la tarea está completada -->
            <input type="checkbox" :checked="tarea.completed" disabled />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<!--  sintaxis simplificada que te permite usar Composition API   -->

<script setup>
// Importamos las funciones necesarias de Vue
import { ref, onMounted, computed } from 'vue'

// Lista reactiva para almacenar las tareas obtenidas
const tareas = ref([])

// Filtro activo (puede ser 'todas', 'completadas', 'pendientes', etc.)
const filtro = ref('todas')

// Variable reactiva para guardar errores (por ejemplo, errores de red)
const error = ref(null)

// Ejecuta esta función automáticamente cuando el componente se monta
onMounted(async () => {
  try {
    // Hacemos la petición a la API de tareas
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')

    // Verificamos si la respuesta fue exitosa (status 200–299)
    if (!res.ok) throw new Error('Error al obtener tareas')

    // Convertimos la respuesta a JSON
    const data = await res.json()

    // Guardamos solo las primeras 10 tareas en el estado reactivo
    tareas.value = data.slice(0, 10)
  } catch (e) {
    // Si ocurre un error, mostramos un mensaje amigable al usuario
    error.value = 'No se pudieron cargar las tareas. Por favor intenta más tarde.'
  }
})

const tareasFiltradas = computed(() => {
  // Si el filtro está en "completadas", solo devolvemos las tareas completadas
  if (filtro.value === 'completadas') {
    return tareas.value.filter((t) => t.completed)
    // Si el filtro está en "pendientes", devolvemos solo las no completadas
  } else if (filtro.value === 'pendientes') {
    return tareas.value.filter((t) => !t.completed)
  }
  // Si el filtro es "todas" (o no coincide con ninguna opción específica), devolvemos todo
  return tareas.value
})
</script>
