// src/firebase/Configuracion.js

// Importa las funciones necesarias del SDK de Firebase (SOLO UNA VEZ)
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';           // Para el módulo de Autenticación
import { getFirestore } from 'firebase/firestore'; // Para el módulo de Firestore
import { getStorage } from 'firebase/storage';     // Para el módulo de Storage

// ***  VALORES  DE FIREBASE ***
const firebaseConfig = {
  apiKey: "AIzaSyAGrHp1i4N--u6oEcYHGf9vyNar_skjV_o",
  authDomain: "outsystem-ejer.firebaseapp.com", // Se deriva del projectId
  projectId: "outsystem-ejer",
  storageBucket: "outsystem-ejer.appspot.com", // Se deriva del projectI
  messagingSenderId: "602290359862", // Generalmente es el Número del proyecto
  appId: "1:602290359862:web:GENERAR_EN_CONSOLA" // Este valor específico se obtiene al añadir la app web
};


// Inicializar la aplicación de Firebase con tu configuración
const app = initializeApp(firebaseConfig);

// Obtener las instancias de los servicios de Firebase que vas a usar
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Exportar estas instancias para que puedan ser importadas y usadas
// en cualquier componente de tu aplicación Vue
export { auth, db, storage };