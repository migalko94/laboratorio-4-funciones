# Laboratorio 4 - Funciones

> Aquí describimos la realización del proyecto
>
> A efectos prácticos, utilizaremos el enunciado como guía

## Introducción

En primer lugar, hemos empezado copiando la _sandbox_ de _TS_ corrigiendo el error de los anteriores módulos.

Cogemos el material ejemplo de marcador de turnos y lo sustituimos en nuestro HTML. Hemos cambiado `<h1 class="numero-turno">01</h1>`por una clase, pero también un _id_, ya que nos era más sencillo tomar _id_ más que _class_ para trabajar con el DOM.

## Enunciado

Queremos implementar una pantalla en la que aparezca un _display_ con el turno actual de una clínica y un botón para pasar al siguiente turno y otro para volver al anterior.

### Básico

- En grande se muestra el turno.
- El operario puede ir dándole a siguiente o anterior y el turno cambia.
- Además de esto vamos a añadir un botón de reset que pone el turno a 0.

### Avanzado

- Como _challenge_ puedes añadir una caja de texto y un botón que permita cambiar el turno a un valor que ponga el operario.

### _Challenge_

- Sea el número que sea, lo queremos mostrar siempre con dos digitos (es decir el 1 -> 01, el 2 -> 02, el 10 -> 10, el 11 -> 11, etc). Nos piden que investiguemos como podemos formatear un número para que siempre tenga dos dígitos y, como pista, nos dicen que podemos usar la función _padStart_, la cual nos ayuda a añadir ceros o cualquier otro carácter que queramos al principio de una cadena de texto.

## Implementación

Con suerte, hemos implementado todas las funcionalidades. Lo hemos implementado en TypeScript modo estricto.

### HTML

Hemos creado tres botones + un botón con un campo para introducir valores numéricos. Los botones se corresponden con las funcionalidades requeridas de avanzar y retroceder el número de turno, ponerlo a "0" (será "00") y permitir que se muestre en pantalla el número de turno libremente (con restricciones, como veremos) seleccionado por el operario.

### TypeScript

En el "main.ts", hemos creado las funciones que realizarán los resultados esperados cuando el operario (usuario) interactúe con el _display_.

Pasamos a describirlas:

#### `function` `avanzarTurno`

Se trata de la función para que el operario avance el número de turno al "Siguiente".

Hemos tipado explícitamente el valor de retorno de la función como _void_.

La función lee el número de turno contenido en el `h1`con `id` `numero-turno"`a través del `getElementById("").innerHTML`. Hemos tenido que utilizar `as HTMLElement` para que _TypeScript_ no nos diera error.Entendemos que estamos obteniendo en cualquier caso un elemento del HTML y el _casting_ no debiera ser problemático. Lo asignamos a la variable _turnoActual_.

Después viene el objetivo de la función propiamente dicho. Queremos que el número de turno avance 1. Para ello, al número de turno, tendremos que "sumarle" 1 (+1). En nuestro caso, `getElementById ("numero-turno").innerHTML` (ahora, `turnoActual`) es un _string_, por lo que tendremos que convertirlo a _number_ con `parseInt`.

Con posterioridad, asignamos nuevamente `getElementById ("numero-turno")` a una variable `resultadoElement`. No utilizamos la variable definida `turnoActual`porque nos interesa que funcione como elemento del objeto documento y no como _string_. Dándole la asignación, nos devolvía un error.

Sigue que convertimos el elemento del objeto llamado en el resultado de la operación +1. Para evitar problemas con TypeScript introducimos las condicionales a propósito de _null_ y _undefined_, el añadido `.toString()` así como implementamos `padStart`para que luzca con dos números en vez de uno.

Por último, llamamos a la función cuando se produce el evento del click sobre el botón. Definimos con una variable el botón y acto seguido vinculamos el evento de clickar en el botón con la activación de la función. Hemos utilizado `?`para evitar problema con TypeScript.

#### `function` `retrocederTurno`

Se trata de la función para que el operario retrase el número de turno al "Anterior".

Hemos tipado explícitamente el valor de retorno de la función como _void_.

La función lee el número de turno contenido en el `h1`con `id` `numero-turno"`a través del `getElementById("").innerHTML`. Hemos tenido que utilizar `as HTMLElement` para que _TypeScript_ no nos diera error.Entendemos que estamos obteniendo en cualquier caso un elemento del HTML y el _casting_ no debiera ser problemático. Lo asignamos a la variable _turnoActual_.

Después viene el objetivo de la función propiamente dicho. Queremos que el número de turno retroceda 1. Para ello, al número de turno, tendremos que "restarle" 1 (-1). En nuestro caso, `getElementById ("numero-turno").innerHTML` (ahora, `turnoActual`) es un _string_, por lo que tendremos que convertirlo a _number_ con `parseInt`. **La variable que definimos lo hacemos con `let` y no `const` porque, caso contrario, no la podremos modificar.**

**Aquí viene.** Queremos evitar que aparezcan números negativos en el display si el operario sigue pulsando "Anterior". Es por eso que implementamos un condicional con el que si el resultado de la operación es igual o inferior a 0, se tiene que revalorizar a 0. Sólo cabe que no haya turno todavía (0) y no que haya turnos negativos.

Con posterioridad, asignamos nuevamente `getElementById ("numero-turno")` a una variable `resultadoElement`. Lo mismo de por qué no vamos a la variable `turnoActual` es predicable de esta función de restar.

Sigue que convertimos el elemento del objeto llamado en el resultado de la operación -1. Para evitar problemas con TypeScript introducimos las condicionales a propósito de _null_ y _undefined_, el añadido `.toString()` así como implementamos `padStart`para que luzca con dos números en vez de uno.

Por último, llamamos a la función cuando se produce el evento del click sobre el botón. Definimos con una variable el botón y acto seguido vinculamos el evento de clickar en el botón con la activación de la función. Hemos utilizado `?`para evitar problema con TypeScript.

#### `function` `reiniciarTurno`

Se trata de la función para que el operario reinicie el número de turno a 0 ("00").

Hemos tipado explícitamente el valor de retorno de la función como _void_.

Esta función es más sencilla. Definimos la variable resultado = 0 y la asignamos al número de turno en el _display_. Idénticas apreciaciones respecto a la compatibilidad con TypeScript y a la implementación de `padStart`. También en cuanto al botón, nada diferencial.

#### `function` `seleccionarTurno`

Se trata de la función para que el _display_ refleje el turno elegido por el operario y que introduce en la caja una vez el mismo le dé al botón de "Mostrar en pantalla".

Hemos tipado explícitamente el valor de retorno de la función como _void_.

Aquí, como en el ejemplo del módulo de los sumandos, nos vamos a un _input_ tipo _number_ con su _label_ asociada a un _button_. Destacar que, como lo conocemos, nos vamos a un `HTMLInputElement` y a un `.value`. Nuevamente la operación la asignamos a una variable _let_ y no _const_ porque vamos a querer redeclarar el valor. En la operación, no sustraemos ni añadimos nada. Simplemente hacemos la conversión a número. Volvemos con una condicional a evitar que el _display_ nos valide números de turno negativos.

Asimismo, advertimos en nuestras pruebas con el _display_ que si no introducimos ningún valor nos da `NaN`. Hemos investigado sobre qué es y diferentes formas de cómo enfrentar esto y, finalmente, encontramos la función `isNaN`, que determina si el valor es `NaN`. Por tanto, lo implementamos con una condicional: si lo que resulta es que resultado es NaN, pues devuelve "0". Más estético que NaN en el _display_ y preferimos no introducir un mensaje de `alert`, que es algo que también hemos encontrado.

De lo demás, en esta función, nada nuevo.

> Fin del laboratorio
