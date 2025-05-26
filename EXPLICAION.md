## NOTA 
Cada uno de los puntos tiene su Explicaion.md  (README.md)
    1.Su explicaion detallada 
    2.instruciones de instacion 
    
## RECORDAROTIA
Tener encuanta las versiones de instacion     
    1. Node.js v22.11.0
    2. Vite 3


## Prueba de Desarrollo Rápido por Prototipos

**Formato de entrega: un solo ZIP con subcarpetas por bloque y un README general**

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
5. Organiza el código usando <script setup>, un componente <TaskTable> y
Composition API.

Entrega
● Ruta a una url donde se vea el prototipo funcionando
● El código en zip y README con pasos de instalación y ejecución (npm install /
npm run dev).

Bloque 2: Soporte Técnico (Vue 3 + Firebase)
Objetivo
Evaluar capacidad de diagnóstico y resolución de incidencias reales, y la habilidad de
comunicar soluciones al cliente.
Enunciado
Tienes estos 3 tickets de usuario:
1. Auth: al hacer login obtienen Error [auth/user-not-found].
2. Firestore: la lista de documentos nunca carga (spinner infinito) sin errores en
consola.
3. Storage: la subida de archivos falla con FirebaseError:
[storage/invalid-argument].

Para cada ticket:
● Describe tu proceso de diagnóstico (qué logs o herramientas usarías).
● Proporciona la solución (fragmentos de código o ajustes de configuración).
● Redacta el mensaje al usuario explicando la causa y el arreglo, sin jerga innecesaria.

Entrega
Documento .docx con las 3 resoluciones y las 3 comunicaciones finales.

Bloque 3: Documentación y Buenas Prácticas
Objetivo
Medir la habilidad de sintetizar requisitos, organizar el trabajo y registrar decisiones para el
equipo.
Enunciado
A partir del prototipo de Vue (Bloque 1):
1. Redacta 3 historias de usuario (formato “Como <rol>..., quiero... para...”), con
criterios de aceptación (Gherkin opcional).
2. Dibuja un diagrama ligero de flujo de usuario para la función de filtrado. (puede
ser ASCII o boceto en enlace).
3. Genera 1 Architecture Decision Record (ADR) donde expliques por qué elegiste
Vue 3 y JSONPlaceholder para el prototipo.

Entrega
Un sólo documento Markdown que incluya historias, diagrama y ADR.

Bloque 4: SQL (MariaDB) y NoSQL (Firestore)
Objetivo
Comprobar diseño y consultas en bases de datos relacionales y NoSQL.
Parte A – MariaDB
● Diseña un esquema con tablas usuarios(id, nombre, email) y tareas(id,
titulo, estado, usuario_id).
● Escribe un script SQL que:
1. Inserte 3 usuarios y 5 tareas.
2. Liste cada usuario con el número de tareas estado='pendiente'.
3. Marque como completada todas las tareas de un usuario por su id.

Parte B – Firestore
● Define la estructura de colección users/{uid}/tasks/{taskId}.
● En un archivo JS/TS con la SDK de Firebase:
1. Consulta todas las tareas donde completed == false, ordenadas por
dueDate.
2. Establece un listener en tiempo real para esa misma ruta.

Entrega
● Archivo schema.sql con DDL + DML.
● Archivo queries.js con los dos fragmentos de código de Firestore y breve nota
sobre índices necesarios.