<!--Interfaz de carga de spinner infinito -->

<template>
  <div class="container">
    <h2>Lista de Documentos (Ticket 2)</h2>
    <div v-if="loading" class="spinner">🔃...</div>
    <div v-else-if="items.length > 0">
      <ul class="item-list">
        <li v-for="item in items" :key="item.id" class="item-card">
          <h3>{{ item.nombre || 'Sin nombre' }}</h3>
          <p>Teléfono: {{ item.telefono || 'Sin teléfono' }}</p>
          <small>ID: {{ item.id }}</small>
        </li>
      </ul>
    </div>
    <div v-else class="no-data-message">
      No hay documentos para mostrar en la colección 'tu_coleccion'.
      <br/>Por favor, verifica tus reglas de Firestore y que existan datos.
    </div>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>



<script setup>
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
// ¡IMPORTANTE! Ajuste para usar el alias @ y el nombre Configuracion.js
import { db } from '@/firebase/Configuracion'; 

const items = ref([]);
const loading = ref(true);
const errorMessage = ref('');

onMounted(async () => {
  try {
    // *** IMPORTANTE: Cambia 'tu_coleccion' por el nombre REAL de tu colección en Firestore ***
    const querySnapshot = await getDocs(collection(db, 'usuarios')); // Usa el nombre real de tu colección(Tabla de ususarios)
    items.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    errorMessage.value = '';
  } catch (error) {
    console.error('Error al cargar documentos de Firestore:', error);
    errorMessage.value = 'Ocurrió un error al cargar la información. Esto puede deberse a problemas de permisos en Firestore o a que la colección no existe/está vacía. Revisa la consola del navegador (F12) para más detalles.';
  } finally {
    loading.value = false;
  }
});
</script>
