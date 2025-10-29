[10:03, 28/10/2025] Justin: <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Curso de Ajedrez Online con el Maestro Marcos</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Aprende ajedrez con el Maestro Marcos. Clases online para principiantes y jugadores avanzados. Domina aperturas, tácticas y estrategia con un tablero interactivo.">
  <meta name="keywords" content="ajedrez online, curso de ajedrez, clases de ajedrez, aprender ajedrez, estrategias de ajedrez, maestro de ajedrez, ajedrez para principiantes, ajedrez avanzado">
  <link rel="stylesheet" href="https://unpkg.com/chessboardjs@1.0.0/dist/chessboard-1.0.0.min.css" />
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/chess.js/0.13.4/chess.min.js"></script>
  <script src="https://unpkg.com/chessboardjs@1.0.0/dist/chessboard-1.0.0.min.js"></script>
  <style>
    /* -------------------- ESTILOS GENERALES -------------------- */
    body {
      margin: 0;
      font-family: 'Segoe UI', sans-serif;
      background: radial-gradient(circle at top, #1a1a1a, #000);
      color: #eee;
      text-align: center;
      overflow-x: hidden;
    }

    header {
      background: linear-gradient(90deg, #000, #333);
      color: gold;
      padding: 20px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.6);
    }

    header h1 {
      font-size: 2.5em;
      margin: 0;
    }

    header h2 {
      font-weight: normal;
      color: #ccc;
    }

    nav {
      background: #111;
      padding: 10px 0;
    }

    nav a {
      color: #fff;
      text-decoration: none;
      margin: 0 20px;
      font-weight: bold;
      transition: color 0.3s;
    }

    nav a:hover {
      color: gold;
    }

    section {
      padding: 40px 20px;
    }

    h3 {
      color: gold;
      text-shadow: 1px 1px 2px black;
    }

    .boton {
      background: gold;
      color: black;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;
      font-weight: bold;
    }

    .boton:hover {
      background: orange;
    }

    footer {
      background: #111;
      color: #aaa;
      padding: 20px;
      font-size: 14px;
    }

    /* -------------------- LECCIONES -------------------- */
    .leccion {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 8px;
      padding: 20px;
      margin: 15px 0;
      transition: transform 0.3s;
    }

    .leccion:hover {
      transform: translateY(-5px);
      background: rgba(255,255,255,0.08);
    }

    /* -------------------- MAESTRO INFO -------------------- */
    .maestro {
      text-align: center;
      margin-top: 40px;
    }

    .maestro img {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      border: 3px solid gold;
      margin-bottom: 10px;
    }

    #board {
      width: 480px;
      margin: 40px auto;
      box-shadow: 0 10px 25px -5px rgba(0,0,0,.8);
      border-radius: 8px;
    }
  </style>
</head>

<body>
  <header>
    <h1>♟ Curso de Ajedrez Online</h1>
    <h2>Dirigido por el Maestro Marcos</h2>
  </header>

  <nav>
    <a href="#inicio">Inicio</a>
    <a href="#tablero">Tablero</a>
    <a href="#lecciones">Lecciones</a>
    <a href="#contacto">Contacto</a>
  </nav>

  <section id="inicio">
    <div class="contenedor">
      <h3>Bienvenido al Curso de Ajedrez Profesional</h3>
      <p>El <strong>Maestro Marcos</strong> te guiará paso a paso desde los fundamentos hasta las estrategias avanzadas.  
      Ideal tanto para principiantes como para jugadores experimentados que quieren perfeccionar su juego.</p>
      <button class="boton" onclick="saludar()">Comenzar ahora</button>
    </div>
  </section>

 …
[10:06, 28/10/2025] Justin: <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Curso de Ajedrez Online con el Maestro Marcos</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Aprende ajedrez online con el Maestro Marcos. Clases para principiantes y avanzados. Domina aperturas, tácticas y estrategia con tablero interactivo.">
  <meta name="keywords" content="curso de ajedrez, ajedrez online, clases de ajedrez, aprender ajedrez, estrategia, aperturas, maestro de ajedrez, ajedrez avanzado, ajedrez para principiantes">

  <!-- LIBRERÍAS DEL TABLERO -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/chessboardjs@1.0.0/dist/chessboard-1.0.0.min.css" />
  <script src="https://code.jquery.com…
[10:09, 28/10/2025] Justin: <header>
  <h1>♟ Curso de Ajedrez Online</h1>
  <h2>Dirigido por el Maestro Marcos</h2>
</header>

<nav>
  <a href="#inicio">Inicio</a>
  <a href="#tablero">Tablero</a>
  <a href="#lecciones">Lecciones</a>
  <a href="#contacto">Contacto</a>
</nav>

<section id="inicio" class="contenedor">
  <h2>Aprende Ajedrez con el Maestro Marcos</h2>
  <p>Clases online personalizadas para principiantes y jugadores avanzados. Mejora tu estrategia, domina aperturas y tácticas reales con un tablero interactivo.</p>
  <button class="boton" onclick="saludar()">Comenzar ahora</button>
</section>

<section id="tablero" class="contenedor">
  <h2>Tablero Interactivo</h2>
  <p>Practica movimientos legales siguiendo las reglas oficiales del ajedrez.</p>
  <div id="board"></div>
  <b…
[10:09, 28/10/2025] Justin: body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: radial-gradient(circle at top, #1a1a1a, #000);
  color: #eee;
  text-align: center;
}

header {
  background: linear-gradient(90deg, #000, #333);
  color: gold;
  padding: 25px 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.6);
}

header h1 {
  font-size: 2.4em;
  margin: 0;
}

header h2 {
  color: #ccc;
  margin: 5px 0 0;
}

nav {
  background: #111;
  padding: 12px 0;
}

nav a {
  color: #fff;
  text-decoration: none;
  margin: 0 20px;
  font-weight: bold;
  transition: color 0.3s;
}

nav a:hover {
  color: gold;
}

.contenedor {
  max-width: 1000px;
  margin: 50px auto;
  text-align: center;
}

h2 {
  color: gold;
  text-shadow: 1px 1px 2px black;
  margin-bottom: 20px;
}

.boton {
  ba…
[10:09, 28/10/2025] Justin: function saludar() {
  alert("¡Bienvenido al curso del Maestro Marcos! Prepárate para dominar el tablero ♞");
}

// Inicializa el tablero y las reglas de juego
const game = new Chess();
const board = Chessboard('board', {
  draggable: true,
  position: 'start',
  onDrop: (source, target) => {
    const move = game.move({
      from: source,
      to: target,
      promotion: 'q'
    });
    if (move === null) return 'snapback';
  }
});

function resetGame() {
  game.reset();
  board.start();
}
