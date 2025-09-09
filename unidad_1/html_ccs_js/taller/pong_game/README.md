# Pong — Desafíos 01, 02 y 03

Este archivo describe tres desafíos iniciales para el miniproyecto «Pong» (HTML + CSS + JS, sin backend). El objetivo es que el estudiante mejore la organización del proyecto, personalice los controles y aumente la dificultad de forma progresiva.

---

## Desafío 1: Separar en HTML, CSS y JS

La versión inicial mezcla HTML, estilos y lógica en un solo archivo. El desafío consiste en reorganizar el proyecto en tres archivos independientes, manteniendo el juego funcionando.


## Desafío 2: Controles personalizados con teclas numéricas

Reemplazar los controles por defecto para usar las siguientes teclas:

- **Pala izquierda:** `1` (subir) y `2` (bajar)
- **Pala derecha:** `9` (subir) y `0` (bajar)

Mantener el comportamiento de presionar = moverse, soltar = detenerse. Las teclas indicadas mueven únicamente su pala correspondiente. No deben quedar controles antiguos activos (flechas, W/S).

---

## Desafío 3: Aumentar la velocidad de la pelota con el tiempo

Hacer que la pelota se acelere gradualmente durante la partida para incrementar la dificultad.

**Opciones (elige una o combina):**
1. **Basado en tiempo:** cada *N* segundos aumenta un pequeño porcentaje.
2. **Basado en impactos:** en cada choque con una pala, incrementar levemente.
3. **Al sacar tras un punto:** cada nuevo saque comienza un poco más rápido.

La aceleración es gradual y perceptible, sin saltos bruscos. Documentar en un comentario si la velocidad se reinicia o se acumula tras anotar. Definir y respetar una velocidad máxima razonable.


---