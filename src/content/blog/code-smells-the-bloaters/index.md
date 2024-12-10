---
title: "Code smells: Los 'bloaters'"
description: "Descubre y elimina los 'bloaters' en tu código."
date: "2024-11-20"
draft: false
---

>Si algo huele mal, hay que cambiarlo

Code smell es un termino acuñado por **Kent Beck** y **Martin Fowler** para referirse a porciones de **código que nos sugiere** (a veces nos pida a gritos) **un refactor**. En este articulo vamos a cubrir un grupo de 'smells' conocidos como bloaters. Los **bloaters** son smells que colaboran a que nuestro **código aumente** en proporciones tan gigantescas que son difíciles de manejar. Por lo general, estos smells **no aparecen de inmediato**, sino que **se acumulan con el tiempo** a medida que nuestro software evoluciona.

## Primitive Obsession

Uno de los errores más comunes en el diseño de software es el uso excesivo de tipos primitivos, también conocido como Primitive Obsession. Aunque los tipos como `String`, `int`, y `double` son versátiles, abusar de ellos para representar conceptos complejos puede llevarnos a un código difícil de entender, mantener y escalar.

### ¿Cómo reconocerlo?
- Uso de tipos primitivos en lugar de objetos pequeños para tareas simples (Por ejemplo: `int` o `double` para dinero, `String` para números telefónicos)
- Uso de constantes para codificar información (como una constante `USER_ADMIN_ROLE = 1` para referirse a usuarios admin).

### ¿Cómo solucionarlo?
- **Reemplazar valores primitivos por objetos:** Crea clases que representen conceptos específicos en lugar de usar tipos primitivos para todo.
- **Extraer una clase:** Si un grupo de datos primitivos representa un concepto lógico, convertirlo en una clase, mejorará la cohesión y la claridad.

### Un ejemplo practico

```java
public record Person(
    UUID id,
    String name,
    String email,
    String address,
    String zipCode,
    String city,
    String country) {}
```

En este diseño inicial, todo parece simple y directo. Sin embargo, pronto aparecen problemas:
- **Falta de intención clara:** `id`, `name`, `email`, `zipCode`, etc., son solo `Strings`. No queda claro si tienen restricciones. Cualquier `String` podría utilizarse para construir este objeto. Incluso podríamos pasar argumentos en el orden equivocado y nuestro código compilaría.
- **Dificultad para validar:** Cada vez que necesitemos asegurarnos de que el `email` es válido o que el `zipCode` cumple un formato específico, tendremos que duplicar esa lógica en distintos lugares.
- **Acoplamiento débil entre datos relacionados:** `address`, `zipCode`, `city` y `country` deberían ser un único concepto (`Address`). Mantenerlos separados abre la puerta a inconsistencias.

Podemos resolver estos problemas encapsulando conceptos en clases propias. Este enfoque no solo mejora la claridad del código, sino que también simplifica su mantenimiento.

```java
public record Person(PersonId id, String name, Email email, Address address) {}

public record PersonId(String value) {
  public Id {
    if (value == null || value.isBlank()) {
      throw new IllegalArgumentException("El ID no puede estar vacío");
    }
  }
}

public record Email(String email) {
  private static final String VALID_EMAIL_REGEX = "^[A-Za-z0-9+_.-]+@(.+)$";

  public Email {
    if (email == null || !email.matches(VALID_EMAIL_REGEX)) {
      throw new IllegalArgumentException("Invalid email address");
    }
  }
}

public record Address(String address, ZipCode zipCode, String city, String country) {}

public record ZipCode(String zipCode) {
  private static final int MAX_ZIP_CODE_LENGTH = 5;

  public ZipCode {
    if (MAX_ZIP_CODE_LENGTH != zipCode.length()) {
      throw new IllegalArgumentException(
          "Zip code must be " + MAX_ZIP_CODE_LENGTH + " characters long");
    }
  }
}
```

¿Por qué es mejor este diseño?
- **Claridad y seguridad:** Definiendo `PersonId`, `Email` y `ZipCode` como tipos, hacemos que nuestro código sea mas expresivo y aprovechamos la verificación de tipos del compilador.
- **Menor duplicación:** La lógica de validación está encapsulada en las clases correspondientes. Ya no necesitas repetir verificaciones en todas partes.

## Long Methods

A long method is hard to understand because of too much detail. They tend to become longer, introduce hard-to-detect duplication and often suffer from Primitive Obsession

### ¿Cómo reconocerlo?

- Long method

### ¿Cómo solucionarlo?

- Replace method with Method object
- Replace Temp with Query
- Decompose Conditional
- Extract Method

## Data Clumps
Data Clumps are repeated list of fields, parameters, or both. Sometimes duplication is not apparent, as the names are different, yet their intent is the same.
Several Rename refactorings may be necessary to make the Data Clumps obvious

### ¿Cómo reconocerlo?

- deja vu in field lists or parameter lists of both

### ¿Cómo solucionarlo?

- Introduce Parameter Object
- Extract Class
- Preserve Whole Object

## Conditional Complexity

Complex conditional statements often grow from a simple if. We should be critical about conditionals and boolean expressions, as they appear more difficult to read and maintain than you might expect.

### ¿Cómo reconocerlo?
- conditionals with primitive boolean expressions

### ¿Cómo solucionarlo?
- Replace conditional with strategy
- Move Embellishment to Decorator
- Decompose Conditional
- Replace State-Altering conditionals with State
- Introduce Null Object 