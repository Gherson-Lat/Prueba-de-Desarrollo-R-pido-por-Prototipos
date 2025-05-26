<!-- Formulario de inicio de sesión -->
<template>
  <div class="container">
    <h2>Iniciar Sesión (Ticket 1)</h2>
    <input type="email" v-model="email" placeholder="Email" class="input-field" />
    <input type="password" v-model="password" placeholder="Contraseña" class="input-field" />
    <button @click="login" class="button">Iniciar Sesión</button>
    <!-- Captura de error -->
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>


<!-- Importacion de librerias de autentificaion en firebase -->
<script setup>
import { ref } from 'vue';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/Configuracion'; 

const email = ref('');
const password = ref('');
const errorMessage = ref('');




const login = async () => {
  errorMessage.value = '';
  //Captura errores con exepciones con try/catch

  try {
    //signInWithEmailAndPassword es una función de Firebase Authentication 
    // que permite iniciar sesión usando un correo electrónico y una contraseña.
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log('Usuario autenticado:', userCredential.user);
    alert('¡Inicio de sesión exitoso!');
  } catch (error) {
    console.error('Error de autenticación:', error);
   
    if (error.code === 'auth/user-not-found') {
      errorMessage.value = 'El usuario no existe. Por favor, verifica el correo o regístrate.';
    
    } else if (error.code === 'auth/wrong-password') {
      errorMessage.value = 'Contraseña incorrecta.';
    
    } else if (error.code === 'auth/invalid-email') {
      errorMessage.value = 'El formato del correo electrónico es inválido.';
    
    } else {
      errorMessage.value = `Ocurrió un error inesperado: ${error.message}`;
    }
  }
  
};
</script>