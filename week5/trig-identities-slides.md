---
title: Trigonometric Identities
theme: default
paginate: true
---

# Trigonometric Identities

Undergraduate precalculus lecture on right-triangle ratios, the unit circle, identities, inverse trig, and modeling periodic phenomena.

---

# Trigonometric Relationships in Right Triangles

- For an acute angle \(\theta\) in a right triangle:
  - \(\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}}\)
  - \(\cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}}\)
  - \(\tan\theta = \frac{\text{opposite}}{\text{adjacent}}\)

- These definitions connect angles with side lengths immediately.

---

# Right-Triangle Definitions Explained

- Example triangle with hypotenuse \(r\), adjacent side \(x\), opposite side \(y\):

\[
\sin\theta = \frac{y}{r},\qquad \cos\theta = \frac{x}{r},\qquad \tan\theta = \frac{y}{x}
\]

- The ratios are independent of scale: any similar triangle gives the same trig values.

---

# The Unit Circle and Trigonometric Functions

- The unit circle has radius 1 and center at the origin.
- A point on the circle at angle \(\theta\) has coordinates \((\cos\theta,\,\sin\theta)\).

\[
\cos\theta = x, \qquad \sin\theta = y
\]

- This extends trig functions to all angles, not just acute ones.

---

# Connecting Unit Circle and Right Triangles

- Drop a perpendicular from the point \((\cos\theta,\sin\theta)\) to the x-axis.
- The resulting right triangle has hypotenuse 1, adjacent \(\cos\theta\), opposite \(\sin\theta\).
- This matches the triangle definitions for acute angles.

---

# Pythagorean Identities

- Because \(x^2 + y^2 = 1\) on the unit circle:

\[
\cos^2\theta + \sin^2\theta = 1
\]

- Divide by \(\cos^2\theta\) and \(\sin^2\theta\) to derive:

\[
1 + \tan^2\theta = \sec^2\theta, \qquad 1 + \cot^2\theta = \csc^2\theta
\]

---

# Cofunction and Reciprocal Identities

- Basic cofunction relationships:

\[
\sin(\tfrac{\pi}{2} - \theta) = \cos\theta, \qquad \cos(\tfrac{\pi}{2} - \theta) = \sin\theta
\]

- Reciprocal identities:

\[
\sec\theta = \frac{1}{\cos\theta}, \qquad \csc\theta = \frac{1}{\sin\theta}, \qquad \cot\theta = \frac{1}{\tan\theta}
\]

---

# Inverse Trigonometric Functions

- Inverse trig functions return angles from ratios:

\[
\sin^{-1}x, \quad \cos^{-1}x, \quad \tan^{-1}x
\]

- Domains and ranges:
  - \(\sin^{-1}x:\ [-1,1]\to[-\frac{\pi}{2},\frac{\pi}{2}]
  - \(\cos^{-1}x:\ [-1,1]\to[0,\pi]\)
  - \(\tan^{-1}x:\ \mathbb{R}\to(-\frac{\pi}{2},\frac{\pi}{2})\)

---

# Properties of Inverse Trig Functions

- Key identities:

\[
\sin(\sin^{-1}x) = x, \qquad \cos(\cos^{-1}x) = x, \qquad \tan(\tan^{-1}x) = x
\]

- But:

\[
\sin^{-1}(\sin\theta) \neq \theta \ \text{for all }\theta
\]

- The inverse output must lie in the principal range.

---

# Solving Trigonometric Equations

- Use identities to simplify equations.

Example:

\[
\sin^2\theta + \sin\theta - 2 = 0 \Rightarrow (\sin\theta - 1)(\sin\theta + 2) = 0
\]

- Only \(\sin\theta = 1\) is valid, giving \(\theta = \frac{\pi}{2} + 2\pi k\).

---

# Periodic Modeling with Trig Identities

- Sine and cosine model repeating phenomena such as waves and cycles.

- General form:

\[
y = A\sin(Bx - C) + D
\]

- Identities let us rewrite and simplify models, e.g. using angle-sum formulas.

---

# Summary and Takeaways

- Right-triangle definitions give the foundation for \(\sin,\cos,\tan\).
- The unit circle extends trig to all angles and gives the Pythagorean identity.
- Inverse trig functions are used to recover angles from ratios.
- Trig identities are essential for solving equations and modeling periodic behavior.

- Practice
  - Verify \(\cos^2\theta + \sin^2\theta = 1\) for \(\theta = 150^\circ\).
  - Solve \(2\cos^2\theta - 1 = 0\).
