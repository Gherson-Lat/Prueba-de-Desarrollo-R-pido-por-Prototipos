//

<!-- Diseño de navegación y enrutamiento simple para una aplicación de
  "Soporte Técnico Firebase". Permite al usuario alternar entre diferentes "vistas" 
  o secciones de la aplicación (Login, Firestore y Storage) sin recargar la página 
  completa. -->
<template>
  <div id="app">
    <h1>Soporte Técnico Firebase</h1>
    <nav>
      <button @click="currentView = 'LoginView'" :class="{ active: currentView === 'LoginView' }">Login (Ticket 1)</button>
      <button @click="currentView = 'FirestoreView'" :class="{ active: currentView === 'FirestoreView' }">spinner infinito (Ticket 2)</button>
      <button @click="currentView = 'StorageView'" :class="{ active: currentView === 'StorageView' }">Storage (Ticket 3)</button>
    </nav>

    <main>
      <component :is="currentViewComponent" />
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
//  rutas  de naveaionentre interfaz de usuario
import LoginView from './Vistas/Login.vue'; // 
import FirestoreView from './Vistas/Firestore.vue'; 
import StorageView from './Vistas/Storage.vue'; 

const currentView = ref('LoginView');

//componente de vista se debe mostrar en la interfaz de usuario
const currentViewComponent = computed(() => {
  switch (currentView.value) {
    case 'LoginView':
      return LoginView;
    case 'FirestoreView':
      return FirestoreView;
    case 'StorageView':
      return StorageView;
    default:
      return LoginView;
  }
});
</script>
