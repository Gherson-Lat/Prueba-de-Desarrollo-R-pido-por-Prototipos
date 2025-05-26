 ## Breve nota sobre índices necesarios:

  Para las consultas anteriores, específicamente para la consulta que filtra por `completed == false` y ordena por `dueDate`,
  Firestore **requerirá un índice compuesto**.

  El índice necesario sería:
  - Colección: `tasks` (dentro de la subcolección de cada usuario)
  - Campos indexados: `completed` (ascendente) y `dueDate` (ascendente)

  Sin este índice, Firebase te advertirá en la consola de tu navegador o en los logs de tu servidor
  y te proporcionará un enlace para crear automáticamente el índice en la consola de Firebase.
  Es fundamental crear estos índices para garantizar un rendimiento óptimo de las consultas,
  especialmente a medida que tu base de datos crece.