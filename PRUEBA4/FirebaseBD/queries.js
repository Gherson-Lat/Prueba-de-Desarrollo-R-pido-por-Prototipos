// Importa la SDK de Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, orderBy, onSnapshot, getDocs } from 'firebase/firestore';

// Tu configuración de Firebase (reemplaza con tus credenciales)
const firebaseConfig = {
apiKey: "TU_CLAVE_API",
authDomain: "TU_DOMINIO_AUTH",
projectId: "TU_ID_PROYECTO",
storageBucket: "TU_DEPÓSITO_DE_ALMACENAMIENTO",
messagingSenderId: "TU_ID_DE_REMITENTE_DE_MENSAJERÍA",
appId: "TU_ID_DE_APP"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Usa una variable userId para identificar el usuario cuyas tareas se van a consultar
const userId = 'someUserId'; // Reemplaza con el UID real del usuario

// 1. Consulta todas las tareas donde completed == false, ordenadas por dueDate.
async function getPendingTasksOrderedByDueDate() {
  const tasksRef = collection(db, 'users', userId, 'tasks');
  const q = query(tasksRef, where('completed', '==', false), orderBy('dueDate'));

  try {
    const querySnapshot = await getDocs(q);
    console.log("Tareas pendientes (consulta única):");
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().titulo} (Due: ${doc.data().dueDate})`);
    });
  } catch (error) {
    console.error("Error al consultar tareas pendientes:", error);
  }
}

// 2. Establece un listener en tiempo real para las tareas pendientes
function setupRealtimeListenerForPendingTasks() {
  const tasksRef = collection(db, 'users', userId, 'tasks');
  const q = query(tasksRef, where('completed', '==', false), orderBy('dueDate'));

  console.log("\nConfigurando listener en tiempo real para tareas pendientes...");
  const unsubscribe = onSnapshot(q, (snapshot) => {
    console.log("\n--- Actualización en tiempo real de tareas pendientes ---");
    if (snapshot.empty) {
      console.log("No hay tareas pendientes.");
    } else {
      snapshot.forEach((doc) => {
        const data = doc.data();
        console.log(`${doc.id} => ${data.titulo} (Due: ${data.dueDate})`);
      });
    }
  }, (error) => {
    console.error("Error en el listener en tiempo real:", error);
  });

   // Devuelve la función para cancelar el listener si es necesario

    return unsubscribe;

}

// Ejecutar las funciones
// Primero muestra las tareas pendientes actuales.
//Luego, mantiene el listener activo para mostrar cualquier cambio en tiempo real
getPendingTasksOrderedByDueDate();
setupRealtimeListenerForPendingTasks();

