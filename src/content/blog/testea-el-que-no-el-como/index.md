---
title: "Testea el 'qué', no el 'cómo'"
description: "Estructura para definir pruebas centradas en comportamiento."
date: "2024-11-01"
draft: false
tags:
  - test
---

## Given-When-Then y Arrange-Act-Assert

¿Cómo podemos pensar nuestros tests para que sean comprensibles y se enfoquen en el comportamiento? **Given-When-Then** y **Arrange-Act-Assert** son dos formas similares de estructurar los tests para que sean más fáciles de entender a primera vista.

Ambas estrategias tienen como objetivo expresar nuestros tests en un lenguaje más intuitivo, el cual nos dirija el pensamiento hacia el comportamiento en lugar de hacia los detalles de la implementación. La idea es simple. Debemos dividir nuestros tests en **tres secciones**:

- **Given** o **Arrange**: Describe el estado inicial o las precondiciones antes de ejecutar el comportamiento especificado en la prueba.

- **When** o **Act**: Representa la acción o evento que desencadena el comportamiento a probar.

- **Then** o **Assert**: Verifica el resultado esperado (assert) o la interacción con algún colaborador (mock verify).

Para ilustrar este concepto con un ejemplo en código, analicemos el siguiente caso:

```java
@Test
void haveTheBalanceIncreasedAfterDeposit() {
    // Given a new bank account
    var bankAccount = new BankAccount();

    // When a deposit is made
    bankAccount.deposit(10);

    // Then the balance is increased
    assertThat(bankAccount.balance()).isEqualTo(10);
}
```

Al estructurar nuestros test de esta manera, logramos que sean **mas claros** y **comprensibles**, haciendo mas fácil identificar el **contexto**, la **acción** y la **verificación** del resultado. Si sentimos que alguna de las secciones es muy grande, es un signo de que nuestro test esta haciendo mucho y necesita mas enfoque.

## Enfocate en el comportamiento, no en la implementación.

Un test debería comprobar una sola cosa y hacerlo bien, comunicando claramente su intención. Los enfoques **Given-When-Then** y **Arrange-Act-Assert** nos invitan a diseñar nuestras pruebas en función del comportamiento esperado, en lugar de enfocarnos en los detalles internos de cada interacción. Al centrarnos en **"qué"** debe hacer el sistema, en lugar de **"cómo"** lo hace, nuestras pruebas se vuelven **más robustas** y menos propensas a **fallar por cambios menores** en la implementación. Esto nos ayuda a escribir tests que no solo se mantienen útiles a lo largo del tiempo, sino que también funcionan como documentación actualizada del propósito de nuestro código.

## Referencias

- <a href="https://martinfowler.com/bliki/GivenWhenThen.html" target="_blank">Martin Fowler - Given When Then</a>
- <a href="https://xp123.com/3a-arrange-act-assert/" target="_blank">Bill Wake - 3A – Arrange, Act, Assert</a>
- <a href="https://www.manning.com/books/effective-unit-testing/" target="_blank">Lasse Koskela - Effective Unit Testing</a>
