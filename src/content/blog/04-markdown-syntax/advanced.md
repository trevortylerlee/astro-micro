---
title: "Advanced markdown syntax guide"
description: "A comprehensive guide to advanced markdown syntax, including support for mathematical equations using KaTeX and MathJax."
date: "2024-03-18"
tags:
  - reference
---

---

## Math

Astro supports [adding remark and rehype plugins](https://docs.astro.build/en/guides/markdown-content/#adding-remark-and-rehype-plugins). <!-- [adding remark and rehype plugins (backup link)](https://github.com/withastro/docs/blob/584d89c637e890d9b356407bb251439b149e7d19/src/content/docs/en/guides/markdown-content.mdx#adding-remark-and-rehype-plugins) -->
This allows to add support for equation rendering via KaTeX optional also with MathJax (see [PR #84](https://github.com/trevortylerlee/astro-micro/pull/84)).

Here are some examples

### Inline

```md
This sentence uses `$` delimiters to show math inline: $\sqrt{3x-1}+(1+x)^2$
```

This sentence uses `$` delimiters to show math inline: $\sqrt{3x-1}+(1+x)^2$

<details>
<summary>Click to expand more inline math examples</summary>

```md
Euler's formula is remarkable: $e^{i\pi} + 1 = 0$.
```

Euler's formula is remarkable: $e^{i\pi} + 1 = 0$.

```md
When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are  
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$
```

When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are  
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

</details>

### Block

```md
**The Cauchy-Schwarz Inequality**
$$
\left( \sum_{k=1}^n a_k b_k \right)^2
\leq
\left( \sum_{k=1}^n a_k^2 \right)
\left( \sum_{k=1}^n b_k^2 \right)
$$
```

**The Cauchy-Schwarz Inequality**
$$
\left( \sum_{k=1}^n a_k b_k \right)^2
\leq
\left( \sum_{k=1}^n a_k^2 \right)
\left( \sum_{k=1}^n b_k^2 \right)
$$

<details>
<summary>
Instead of using `$$...$$` delimiters, you can also use a code block with the language `math` to render math equations as a block (` ```math ... ``` `).
</summary>

````md
```math
E = mc^{2}
```
````

```math
E = mc^{2}
```

</details>

</br>

<details>
<summary>Click to expand more block math examples</summary>

```md
$$
\begin{align}
    \dot{x} & = \sigma(y-x) \\
    \dot{y} & = \rho x - y - xz \\
    \dot{z} & = -\beta z + xy
\end{align}
$$
```

$$
\begin{align}
    \dot{x} & = \sigma(y-x) \\
    \dot{y} & = \rho x - y - xz \\
    \dot{z} & = -\beta z + xy
\end{align}
$$

```md
$$
\begin{align}
      \nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} & = \frac{4\pi}{c}\vec{\mathbf{j}} \\
      \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\
      \nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\
      \nabla \cdot \vec{\mathbf{B}} & = 0
\end{align}
$$
```

$$
\begin{align}
      \nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} & = \frac{4\pi}{c}\vec{\mathbf{j}} \\
      \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\
      \nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\
      \nabla \cdot \vec{\mathbf{B}} & = 0
\end{align}
$$

```md
$$
\mathbf{V}_1 \times \mathbf{V}_2 =
  \begin{vmatrix}
        \mathbf{i} & \mathbf{j} & \mathbf{k} \\
        \frac{\partial X}{\partial u} & \frac{\partial Y}{\partial u} & 0 \\
        \frac{\partial X}{\partial v} & \frac{\partial Y}{\partial v} & 0 \\
  \end{vmatrix}
$$
```

$$
\mathbf{V}_1 \times \mathbf{V}_2 =
  \begin{vmatrix}
        \mathbf{i} & \mathbf{j} & \mathbf{k} \\
        \frac{\partial X}{\partial u} & \frac{\partial Y}{\partial u} & 0 \\
        \frac{\partial X}{\partial v} & \frac{\partial Y}{\partial v} & 0 \\
  \end{vmatrix}
$$

</details>

### KaTeX

KaTeX is the default math renderer in astro-micro.
For configuration options, see the [rehype-katex package](https://github.com/remarkjs/remark-math/tree/main/packages/rehype-katex).

Currently MathJax does not support the `\relax` command which is supported by KaTeX
(see [supported commands in KaTeX](https://katex.org/docs/supported)).

```md
$$
\def\f#1#2{#1f(#2)} % defining \f as #1f(#2)

\f\relax{x} = \int_{-\infty}^\infty
    \f\hat\xi\,
    e^{2 \pi i \xi x}\,
    d\xi
$$
```

$$
\def\f#1#2{#1f(#2)} % defining \f as #1f(#2)

\f\relax{x} = \int_{-\infty}^\infty
    \f\hat\xi\,
    e^{2 \pi i \xi x}\,
    d\xi
$$

### MathJax

To use MathJax instead of KaTeX see [PR #84](https://github.com/trevortylerlee/astro-micro/pull/84#issue-2818818155).
For configuration options, see the [rehype-mathjax package](https://github.com/remarkjs/remark-math/tree/main/packages/rehype-mathjax).

MathJax supports the `\eqalign` command which is not supported by KaTeX currently
(see [supported commands in MathJax](https://docs.mathjax.org/en/latest/input/tex/macros/index.html)).

```md
$$
\eqalign{
  3x - 4y &= 5\cr
  x  +  7 &= -2y
}
$$
```

$$
\eqalign{
  3x - 4y &= 5\cr
  x  +  7 &= -2y
}
$$
