# Linear Systems as Matrices and Row Reduction
Given a system of linear equations,
$$\begin{aligned}
ax + by +cz &= d \\
ex + fy + gz &= h \\
jx + ky + lz &= m
\end{aligned}
$$

we can represent the system as a matrix $A$ where
$$A=\begin{bmatrix}
a & b & c & d \\
e & f & g & h \\
j & k & l & m
\end{bmatrix}
$$

When we include the right side of the equal sign in the matrix, we call the matrix *augmented*.

We can perform operations on the rows $R_i$ of $A$. These are called *row operations*.

The row operations, given a scalar $w$, are:
1. $wR_i=R_i$
2. $R_i + wR_j = R_i$
3. $R_i \leftrightarrow R_j$

Operation 3 is called "row interchange."

Row Echelon Form: Matrix is upper triangular with any leading entry.

$$\begin{bmatrix}
1 & 2 & 3 \\
0 & 4 & 5 \\
0 & 0 & 0
\end{bmatrix}
$$

Reduced Row Echelon Form: Matrix is upper triangular with a 1 as every leading entry and entries above and below the leading 1 are 0.

$$\begin{bmatrix}
1 & 0 & 3 \\
0 & 1 & 5 \\
0 & 0 & 0
\end{bmatrix}
$$

## Example

Let 

$$A = \begin{bmatrix} 
2 & 3 & 5 \\
1 & 4 & 2 \\
\end{bmatrix}$$ 
and assume $A$ is an augmented matrix

1. Operation 1: $R_2 \leftrightarrow R_1$

$$A \rightarrow \begin{bmatrix} 
1 & 4 & 2 \\
2 & 3 & 5 \\
\end{bmatrix}$$

2. Operation 2: $R_2-2R_1 = R_2$
   
$$\begin{bmatrix} 
1 & 4 & 2 \\
2 & 3 & 5 \\
\end{bmatrix} \rightarrow \begin{bmatrix} 
1 & 4 & 2 \\
0 & -5 & 1 \\
\end{bmatrix}$$

1. Operation 3: $-\frac{1}{5}R_2=R_2$

$$\begin{bmatrix} 
1 & 4 & 2 \\
0 & -5 & 1 \\
\end{bmatrix} \rightarrow 
\begin{bmatrix} 
1 & 4 & 2 \\
0 & 1 & -\frac{1}{5} \\
\end{bmatrix}$$

4. Operation 4: $R_1 - 4R_2 = R_1$
$$\begin{bmatrix} 
1 & 4 & 2 \\
0 & 1 & -\frac{1}{5} \\
\end{bmatrix}\rightarrow
\begin{bmatrix} 
1 & 0 & \frac{14}{5} \\
0 & 1 & -\frac{1}{5} \\
\end{bmatrix}$$

This final matrix is the reduced row echelon form.

We can reconstruct the system from this reduced matrix by 
$$\begin{bmatrix} 
1 & 0 & \frac{14}{5} \\
0 & 1 & -\frac{1}{5} \\
\end{bmatrix} \hspace{1cm} \longrightarrow \hspace{1cm}\begin{aligned}
x &= \frac{14}{5} \\
y &= -\frac{1}{5}
\end{aligned}$$

This solution is equivalent to the solution of the original matrix.