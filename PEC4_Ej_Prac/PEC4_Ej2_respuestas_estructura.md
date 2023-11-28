# Ejercicio 2

## 1. ¿Qué comando debes utilizar para crear un nuevo proyecto Angular utilizando Angular CLI denominado ecommerce? 
* `ng new ecommerce`
  
## Explica brevemente la estructura y ficheros que ha generado Angular CLI
* Ficheros de configuración en la raíz del proyecto:
  * **tsconfig.app.json**: Archivo que se encarga de configurar el compilador Typescript según los requisitos del proyecto Anular.
  * **angular.json**: Es esencial para la configuración de un proyecto Angular. Contiene la información sobre cómo se compila, construye y sirve la aplicación.
  * **package.json**: Es esencial en proyectos Node.js y Angular. Contiene información sobre las dependencias, scripts personalizados, configuraciones del proyecto y otras configuraciones relevantes. Es un archivo crucial para la gestión y ejecución de tareas de un proyecto.
  * **.editorconfig**: Se utiliza para mantener configuraciones de estilo y formato entre diferentes editores de código y entornos de desarrollo.
  * **.gitignore**: Se utiliza para especificar qué archivos y directorios Git debe ignorar al registrar los cambios en un proyecto.
  * **tsconfig.json**: Archivo de configuración utilizado por TypeScript, define las opciones de compilación para el compilador de TypeScript.
  * **package-lock.json**: Registra de manera precisa las versiones exactas de cada módulo y sus dependencias. Incluye información detallada como las versiones exactas de cada paquete y otros metadatos.
  * **tsconfig.spec.json**: Es el archivo de configuración Typescript que se utiliza para definir la configuración del compilador TypeScript para los archivos de prueba de la aplicación.

* Directorio `node_modules` : Es una carpeta donde se encuentran todas las dependencias del proyecto.
* Directorio `src`:
  * **index.html**: Es el punto de entrada principal de la aplicación. Actúa como plantilla base y es el primer archivo que se carga en el navegador.
  * **main.ts**: Es el punto de entrada desde el cual Angular arranca y carga el módulo principal, iniciando así la aplicación.
  * **styles.css**: Es el archivo principal de estilos globales. Se utiliza para definir estilos que afectan a toda la aplicación.
* Directorio `app` :
  * Ficheros **app.component.**:
    * **app.component.css**: Es donde se definen los estilos específicos del componente raíz de la aplicación.
    * **app.component.html**: Es el archivo de plantilla asociado al componente raíz de la aplicación.
    * **app.component.spec.ts**: Es un archivo de pruebas unitarias asociado al componente raíz de la aplicación.
    * **app.component.ts**: Es un archivo TypeScript que contiene la implementación del componente raíz de la aplicación.
  * Fichero **app.module.ts**: Define y configura el módulo principal de la aplicación.

## 2. Explica cada uno de los siguientes decoradores generados por Angular CLI, detallando cada una de las propiedades que se definen en:

* `app.module.ts - @NgModule (declarations, imports, providers, bootstrap).` 
  * **@NgModule** define cómo se organiza la aplicación en términos de módulos:
    * **declarations**: Especifica los componentes, directivas y pipes que pertenecen al módulo.
    * **imports**: Se definen los módulos que deben ser importados por este módulo.
    * **providers**: Contiene los servicios que proporciona el módulo.
    * **bootstrap**: Especifica el componente principal que se debe cargar al iniciar la aplicación.


* `app.component.ts - @Component (selector, templateUrl, styleUrls).` 
  * **@Component** define la estructura y comportamiento de los componentes individuales:
    * **selector**: Es un selector de CSS que identifica la etiqueta HTML en la que se renderizará el componente.
    * **templateUrl**: Especifica la ubicación del archivo HTML que contiene la plantilla del componente.
    * **styleUrls**: Se especifica la ubicación del archivo o archivos CSS que contienen los estilos específicos del componente.

## 3. ¿Es posible poder inyectar el template y los estilos en línea de un componente sin necesidad de especificarlos en templateUrl, styleUrls? ¿Es recomendable hacer esto?
Sí, es posible, sin embargo no es recomendable hacerlo a menos que sean casos muy simples, es importante considerar la mantenibilidad y reusabilidad del código y si las aplicaciones son muy grandes y complejas es preferible mantener los archivos por separado.