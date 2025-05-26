<template>
  <div class="container">
    <h2>Subir Archivo (Ticket 3)</h2>
    <input type="file" @change="onFileSelected" class="file-input" />
    <button @click="uploadFile" :disabled="!selectedFile" class="button">Subir Archivo</button>
    <p v-if="uploadMessage" :class="uploadStatusClass">{{ uploadMessage }}</p>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ref as storageRef, uploadBytes } from 'firebase/storage';
// ¡IMPORTANTE! Ajuste para usar el alias @ y el nombre Configuracion.js
import { storage } from '@/firebase/Configuracion'; 

const selectedFile = ref(null);
const uploadMessage = ref('');
const errorMessage = ref('');
const uploadStatusClass = ref('');

const onFileSelected = (event) => {
  selectedFile.value = event.target.files[0];
  uploadMessage.value = '';
  errorMessage.value = '';
};
//Seleccionar un archivo: Mediante un campo de entrada de tipo file.
const uploadFile = async () => {
  if (!selectedFile.value) {
    errorMessage.value = 'Por favor, selecciona un archivo antes de subirlo.';
    return;
  }
//Visualizar el estado: Muestra mensajes informativos durante la subida (cargando, éxito, error).
  const file = selectedFile.value;
  if (!(file instanceof File) || !file.type || !file.name) {
    errorMessage.value = 'El elemento seleccionado no es un archivo válido. Por favor, elige uno desde tu dispositivo.';
    selectedFile.value = null;
    return;
  }
  //establecer una conexión, o "puntero", a un archivo o carpeta dentro de un sistema de almacenamiento en la nube
  const fileReference = storageRef(storage, `uploads/${file.name}`);

  uploadMessage.value = 'Subiendo archivo...';
  uploadStatusClass.value = 'info-message';


  // try/catch  Captura cualquier error que ocurra durante la subida. 
  try {
    await uploadBytes(fileReference, file);
    uploadMessage.value = '¡Archivo subido con éxito!';
    uploadStatusClass.value = 'success-message';
    selectedFile.value = null;
    document.querySelector('.file-input').value = '';
  } catch (error) {
    console.error('Error al subir el archivo:', error);
    if (error.code === 'storage/invalid-argument') {
      errorMessage.value = 'El archivo que intentaste subir no era válido o estaba incompleto. Asegúrate de elegir un archivo correcto desde tu dispositivo.';
    } else {
      errorMessage.value = `Ocurrió un error inesperado al subir el archivo: ${error.message}`;
    }
    uploadMessage.value = '';
    uploadStatusClass.value = 'error-message';
  }
};
</script>