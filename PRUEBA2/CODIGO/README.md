Aquí tienes una versión más corta y simple del README, manteniendo la información esencial:
Bloque 2: Ejercicio de Soporte Técnico (Vue 3 + Firebase)

Este proyecto simula la resolución de tres tickets de soporte para una aplicación Vue 3 con Firebase. El objetivo es mostrar el diagnóstico, la solución y la comunicación al usuario para cada incidencia.


1 repositorio.
2 Instala las dependencias: npm install
ajsuta es la  confuiguracion 
Crea src/firebase/Configuracion.js con tus claves de Firebase (Auth, Firestore, Storage)



//EN  SPINER 
Ajsuta los permsios de firebaje 
El false ponlo en terue para poner los datos publiscos


rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}

