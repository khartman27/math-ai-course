# Taylor Series

## Definition
The Taylor series is defined as a representation of a function as an infinite sum of terms calculated from the values of the function's derivatives at a single point. The general form of the Taylor series for a function $f(x)$ around the point $a$ is: 

$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!} (x-a)^n
$$

where $f^{(n)}(a)$ denotes the $n$-th derivative of $f$ evaluated at the point $a$.

## Example 
Consider the function $f(x) = \ln(x)$ around the point $a = 1$. To find the Taylor series, we need to compute the derivatives of $f(x)$ at $x = 1$:

- $f(1) = \ln(1) = 0$
- $f'(x) = \frac{1}{x}$, so $f'(1) = 1$
- $f''(x) = -\frac{1}{x^2}$, so $f''(1) = -1$
- $f'''(x) = \frac{2}{x^3}$, so $f'''(1) = 2$
- In general, the $n$-th derivative is $f^{(n)}(x) = (-1)^{n+1} \frac{(n-1)!}{x^n}$, so $f^{(n)}(1) = (-1)^{n+1} (n-1)!$

Substituting these into the Taylor series formula:
$$
\ln(x) = \sum_{n=0}^{\infty} \frac{(-1)^{n+1} (n-1)!}{n!} (x-1)^n
$$

Simplifying the factorial terms:
$$
\ln(x) = \sum_{n=0}^{\infty} \frac{(-1)^{n+1}}{n} (x-1)^n
$$

The importance of the Taylor series is understated. With it, we re able to approximate any differentiable function by polynomials to any desired accuracy. This allows for much easier function evaluation and analysis.