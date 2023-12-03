# 1. ¿Cuáles son los style encapsulation de los componentes? Pon un ejemplo de uso de cada uno de ellos.
* `ViewEncapsulation.Emulated`: Es el predeterminado. Se utiliza para encapsular los estilos del componente para evitar que afecten a otros componentes.
* `ViewEncapsulation.None`: Se usa en casos muy específicos donde se necesita que los estilos del componente afecten a toda la aplicación sin restricciones. Por ejemplo, en una aplicación donde todos los estilos se gestionan globalmente.
* `ViewEncapsulation.Native`: Este solo funcionará en navegadores y plataformas que lo admitan nativamente.

# 2. ¿Qué es el shadow DOM?
Es una forma de encapsulamiento que permite crear componentes web más autónomos y aislados.La idea principal del shadow DOM es que los elementos y estilos de un componente estén encerrados dentro de un "dominio" separado para que no colisionen con el resto del documento.

# 3. ¿Qué es el changeDetection?
 Es un mecanismo en Angular que se encarga de identificar y aplicar los cambios en los datos de la aplicación y luego actualizar la interfaz de usuario. Es el proceso mediante el cual Angular detecta cambios en el estado de la aplicación y refresca la vista para que refleje esos cambios.

# 4. ¿Qué diferencias existen entre las estrategias Default y OnPush? ¿Cuándo debes usar una y otra? Ventajas e inconvenientes.
* **Default**: Es la estrategia predeterminada de Angular. Todos los componentes se verifican en cada ciclo de detección de cambios, independientemente de si han experimentado cambios o no. Se debe utilizar cuando la aplicación es pequeña o mediana.
    * **Ventajas**: Es más sencillo y es el comportamiento esperado por defecto.
    * **Inconvenientes**: Si hay muchos componentes genera más trabajo de detección de cambios incluso si alguno de ellos no ha cambiado.
* **OnPush**: Se utiliza cuando se desea optimizar la detección de cambios y solo actualizar componentes cuando sea necesario. 
Se debe utilizar cuando la aplicación es más grande y se desea mejorar el rendimiento de esta, sobre todo si tiene componentes que no necesitan actualizarse constantemente.
    * **Ventajas**: Mejora significativamente el rendimiento al evitar la verificación innecesaria de componentes que no han cambiado.
    * **Inconvenientes**: Puede requerir cambios en la forma en que se gestiona el estado y las actualizaciones de datos.

# 5. Explica con detalle el ciclo de vida de los componentes. Haz hincapié en cuándo se disparan los hooks OnChanges, OnInit, AfterViewInit y OnDestroy, puesto que son los más utilizados.
