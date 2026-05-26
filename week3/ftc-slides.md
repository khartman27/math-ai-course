---
marp: true
theme: default
paginate: true
---

# Fundamental Theorem of Calculus

---

## FTC — Part 1: Accumulation & Differentiation

A **definite integral** $\int_a^b f(x)\,dx$ measures the net accumulation—the total net change—of a quantity $f(x)$ over the interval $[a,b]$. For instance, if $f(x)$ is velocity, the definite integral gives total displacement.

An **accumulation function** is defined as $F(x)=\int_a^x f(t)\,dt$, which computes the accumulated net change from a starting point $a$ to any variable point $x$.

If $f$ is **continuous** on $[a,b]$ (meaning no breaks or jumps in the function), then the Fundamental Theorem of Calculus Part 1 states:

$$F'(x) = f(x)$$

In words: the **derivative** (instantaneous rate of change) of the accumulation function equals the original function $f$.

---

## Understanding Accumulation Through Example

**Accumulation** means total net change. If $f(x)$ is velocity at time $x$, then $F(x) = \int_a^x f(t)\,dt$ accumulates all the velocity data from time $a$ to time $x$, giving net displacement. As $x$ increases, more velocity is accumulated, and the rate at which displacement increases is exactly the velocity $v(x)$.

Mathematically: If position is $s(x)=\int_a^x v(t)\,dt$, then differentiating gives $s'(x)=v(x)$.

---

## FTC — Part 2: Antiderivatives & Evaluation

An **antiderivative** of $f(x)$ is any function $F(x)$ such that $F'(x)=f(x)$. Note that antiderivatives are not unique; adding any constant gives another antiderivative.

A **Riemann sum** is a finite sum of the form $\sum_{i=1}^n f(x_i^*)\Delta x_i$, which approximates the net accumulation by slicing the interval into pieces. The definite integral is the limit of Riemann sums as the pieces shrink to zero width.

The Fundamental Theorem of Calculus Part 2 states: If $F$ is any antiderivative of $f$ on $[a,b]$, then

$$\int_a^b f(x)\,dx = F(b) - F(a)$$

This is the **Evaluation Theorem**: compute a definite integral by finding an antiderivative and evaluating it at the endpoints.

---

## Summary: Two Inverse Processes

- **Part 1** (Accumulation → Derivative): The derivative of an accumulation function recovers the original rate. Starting with a rate $f(x)$ and accumulating to get $F(x)$, differentiation gives back $f(x)$.

- **Part 2** (Antiderivative → Definite Integral): The definite integral of a rate function equals the total net change. By finding an antiderivative $F$ and evaluating $F(b)-F(a)$, we compute the net accumulation without summing infinitely many infinitesimal pieces.

- **Key insight:** Differentiation and integration are inverse processes, connecting instantaneous rates to total accumulation.

