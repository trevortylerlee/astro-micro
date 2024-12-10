---
title: "Como configurar un entorno Java"
description: "Guía completa para configurar tu entorno de desarrollo Java. Desde la instalación del JDK hasta la creación de proyectos avanzados, aquí encontrarás todo lo que necesitas para comenzar a programar en Java."
date: "2024-08-21"
draft: true
---

## Introduccion

En este tutorial, aprenderás cómo configurar un entorno de desarrollo en Linux y Mac, usando herramientas clave como SDKMAN! para instalar Java y Maven. Al final de este tutorial, tendrás un entorno configurado para empezar a desarrollar aplicaciones en Java independientemente de tu sistema operativo.

## Configurar un entorno de desarrollo en Linux y MacOS

### Instalar SDKMAN!

Para instalar todas nuestras herramientas de desarrollo utilizaremos **SDKMAN!**, una poderosa utilidad que facilita la instalación, actualización y gestión de versiones con comandos simples, sin necesidad de configuraciones manuales complejas. Todo se configura automáticamente y estará listo para usarse de inmediato.

#### Ejecutar el comando de instalación

Primero, abre una terminal en tu sistema y ejecuta el siguiente comando para instalar **SDKMAN!**:

```bash
curl -s "https://get.sdkman.io" | bash
```

Este comando requiere que tengas instalados `curl`, `unzip`, `zip` y `sed`. Estas herramientas suelen venir preinstaladas en la mayoría de los sistemas operativos. En caso de que alguna falte, el instalador te informará cuál es necesaria para completar el proceso.

#### Verificar la instalación

Una vez que **SDKMAN!** esté instalado, abre una nueva terminal o ejecuta el siguiente comando en la terminal actual para inicializar el entorno:

```bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
```

Asegúrate de que **SDKMAN!** se haya instalado correctamente ejecutando el siguiente comando:

```bash
sdk version
```

Deberías ver un resultado similar a este:

```
SDKMAN!
script: 5.18.2
native: 0.4.6
```

#### Informacion adicional

Con **SDKMAN!** no solo puedes instalar el JDK y otras herramientas relacionadas, sino que también puedes gestionar múltiples versiones de estas herramientas desde distintos proveedores. Esto te permite cambiar fácilmente entre versiones según las necesidades de cada proyecto. Aunque un uso más avanzado de esta herramienta queda fuera del alcance de este tutorial, podes explorar más sobre sus funcionalidades en la [documentación oficial de SDKMAN!](https://sdkman.io/).

---

### Instalar Java

Con **SDKMAN!** ya instalado, podemos proceder a instalar el **JDK** (Java Development Kit). El **JDK** es un conjunto de herramientas esenciales para desarrollar aplicaciones en Java. Incluye el compilador, la máquina virtual de Java (JVM) y las bibliotecas estándar de Java.

#### Ejecutar el comando de instalación

Para instalarlo, ejecuta el siguiente comando en tu terminal:

```bash
sdk install java
```

Este comando instalará la última versión estable del **JDK**. Gracias a **SDKMAN!** la configuracion del mismo se realizará de forma automática.

#### Verificar la instalación

Una vez completada la instalación, puedes verificar que Java se haya instalado correctamente con el siguiente comando:

```bash
java -version
```

Deberías ver una salida similar a la siguiente en tu terminal:

```
openjdk version "21.0.2" 2024-01-16
OpenJDK Runtime Environment GraalVM CE 21.0.2+13.1 (build 21.0.2+13-jvmci-23.1-b30)
OpenJDK 64-Bit Server VM GraalVM CE 21.0.2+13.1 (build 21.0.2+13-jvmci-23.1-b30, mixed mode, sharing)
```

---

### Instalar Maven

Al igual que con **Java**, podemos instalar **Maven** utilizando **SDKMAN!**. **Maven** es una herramienta clave para construir y gestionar proyectos **Java**. Con **Maven**, podrás gestionar las dependencias de tu proyecto, compilar el código, ejecutar pruebas y empaquetar la aplicación en archivos ejecutables como .jar.

#### Ejecutar el comando de instalación

Para instalar **Maven**, ejecuta el siguiente comando en tu terminal:

```bash
sdk install maven
```

Este comando descargará e instalará la última versión estable de **Maven**. **SDKMAN!** se encargará de configurar **Maven** correctamente, utilizando la versión de **Java** que instalaste previamente.

#### Verificar la instalación

Para comprobar que **Maven** se instaló correctamente, puedes ejecutar el siguiente comando:

```bash
mvn -v
```

La salida en la consola debería ser algo similar a:

```
Apache Maven 3.9.8 (36645f6c9b5079805ea5009217e36f2cffd34256)
Maven home: /Users/user/.sdkman/candidates/maven/current
Java version: 21.0.2, vendor: GraalVM Community, runtime: /Users/user/.sdkman/candidates/java/21.0.2-graalce
```

---

## Configurar un entorno de desarrollo Java en Windows

### Instalar Java

TBD

### Instalar Maven

TBD

```

```
