const usuarios = [
  {
    id: 1,
    nombre: "Andrés",
    apellido: "Pérez",
    correo: "andres.perez@example.com",
    telefono: "1234567890",
    comentario: "Comentario 1",
  },
  {
    id: 2,
    nombre: "María",
    apellido: "Gómez",
    correo: "maria.gomez@example.com",
    telefono: "0987654321",
    comentario: "Comentario 2",
  },
  {
    id: 3,
    nombre: "Juan",
    apellido: "López",
    correo: "juan.lopez@example.com",
    telefono: "1122334455",
    comentario: "Comentario 3",
  },
  {
    id: 4,
    nombre: "Ana",
    apellido: "Martínez",
    correo: "ana.martinez@example.com",
    telefono: "2233445566",
    comentario: "Comentario 4",
  },
  {
    id: 5,
    nombre: "Luis",
    apellido: "Hernández",
    correo: "luis.hernandez@example.com",
    telefono: "3344556677",
    comentario: "Comentario 5",
  },
  {
    id: 6,
    nombre: "Sofía",
    apellido: "Ramírez",
    correo: "sofia.ramirez@example.com",
    telefono: "4455667788",
    comentario: "Comentario 6",
  },
  {
    id: 7,
    nombre: "Carlos",
    apellido: "Torres",
    correo: "carlos.torres@example.com",
    telefono: "5566778899",
    comentario: "Comentario 7",
  },
  {
    id: 8,
    nombre: "Laura",
    apellido: "Vargas",
    correo: "laura.vargas@example.com",
    telefono: "6677889900",
    comentario: "Comentario 8",
  },
  {
    id: 9,
    nombre: "Pedro",
    apellido: "Castro",
    correo: "pedro.castro@example.com",
    telefono: "7788990011",
    comentario: "Comentario 9",
  },
  {
    id: 10,
    nombre: "Elena",
    apellido: "Morales",
    correo: "elena.morales@example.com",
    telefono: "8899001122",
    comentario: "Comentario 10",
  },
];

tabla = document.querySelector("#tabla");

function crearTabla() {
  var cadena = "<table><thead>";
  cadena = cadena + "<tr><th>ID</th>";
  cadena = cadena + "<th>Nombre</th>";
  cadena = cadena + "<th>Apellido</th>";
  cadena = cadena + "<th>Correo</th>";
  cadena = cadena + "<th>Telefono</th>";
  cadena = cadena + "<th>Comentario</th></tr></thead>";
  cadena = cadena + "<tbody>";

  for (const usuario of usuarios) {
    cadena = cadena + "<tr>";
    cadena = cadena + "<td>" + usuario.id + "</td>";
    cadena = cadena + "<td>" + usuario.nombre + "</td>";
    cadena = cadena + "<td>" + usuario.apellido + "</td>";
    cadena = cadena + "<td>" + usuario.correo + "</td>";
    cadena = cadena + "<td>" + usuario.telefono + "</td>";
    cadena = cadena + "<td>" + usuario.comentario + "</td>";
    cadena = cadena + "</tr>";
  }

  cadena = cadena + "</tbody>";
  cadena = cadena + "</table>";
  tabla.innerHTML = cadena;
}

crearTabla();