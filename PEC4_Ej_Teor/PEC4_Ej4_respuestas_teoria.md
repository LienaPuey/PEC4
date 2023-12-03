# 1. Explica qué son y cuándo se deberían utilizar las siguientes variables locales de la directiva estructural `NgFor`:
Las variables locales que proporciona la directiva estructural NgFor en Angular son útiles cuando se está utilizando un bucle `ngFor` para iterar sobre una colección de elementos en una plantilla. Estas variables permiten acceder a información adicional sobre la iteración actual.

* `index`: Hace referencia al index del elemento.
* `even`: Es `true` si el elemento tiene un index par.
* `odd`: Es `true`  si el elemento tiene un index impar.
* `first`: Es `true` si es el elemento es el primero del array.
* `last`: Es `true` si es el último elemento del array.

# 2. ¿Para qué sirve la opción trackBy de la directiva estructural NgFor? Pon ejemplos de uso:

`trackBy` se utiliza para mejorar el rendimiento y la eficiencia cuando se están iterando sobre arrays. Con `trackBy` se puede realizar un seguimiento de los elementos individuales de la colección, permitiendo una actualización más eficiente de la interfaz de usuario cuando la colección cambia. Además no necesita volver a crear y renderizar todos los elementos de la lista cuando hay cambios, puede identificar de manera única los elementos y actualizar solo aquellos que han cambiado. 

* # Ejemplo:
Utilizamos `ngFor` para iterar sobre una lista de productos y mostrarlos en la interfaz. Además, queremos asegurarnos de que Angular pueda rastrear de manera eficiente los cambios en la lista de productos para mejorar el rendimiento de la aplicación.
En este contexto, podríamos utilizar la opción `trackBy` para indicar a Angular cómo realizar el seguimiento de los elementos en la lista.

# 3. ¿Es posible ejecutar dos directivas estructurales simultáneamente? Explica la razón tanto si es si posible como si no lo es.

No se pueden ejecutar dos directivas estructurales simultáneamente porque puede haber conflictos o ambigüedades en cuanto a cómo deberían interactuar y modificar la estructura del DOM. Sin embargo, se pueden anidar directivas estructurales unas dentro de otras.