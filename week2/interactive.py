# Compute the nth partial sum of the Fourier series 
# for a square wave on [-pi,pi] and plot the partial sums for 
# n=1, 3, 5 and 10 against the original square wave. 
# Finally, plot the L2 error between the partial sum and target function as
# a function of n.

# %%
import matplotlib.pyplot as plt
import numpy as np

# %%
# Define the square wave function
def square_wave(x):
    return np.sign(np.sin(x))

# %%
# Define the Fourier series partial sum function
def fourier_partial_sum(x, n):
    # Compute the nth partial sum of the Fourier series
    # for a square wave on [-pi,pi]
    sum = 0
    for k in range(1, n+1):
        sum += (4/(np.pi * (2*k - 1))) * np.sin((2*k - 1) * x)
    return sum

# Generate x values
x = np.linspace(-np.pi, np.pi, 1000)

# %%
# Compute the partial sums for n=1, 3, 5, and 10
n_values = [1, 3, 5, 10]
partial_sums = [fourier_partial_sum(x, n) for n in n_values]

# Plot the partial sums
plt.figure(figsize=(10, 6))
for i, (n, sum) in enumerate(zip(n_values, partial_sums)):
    plt.plot(x, sum, label=f'n={n}')
plt.plot(x, square_wave(x), label='Original square wave', linestyle='--')
plt.xlabel('x')
plt.ylabel('y')
plt.title('Fourier Series Partial Sums')
plt.legend()
plt.grid(True)
plt.show()

# %%
# Compute the L2 error between the partial sum and the target function
l2_errors = []
for n in n_values:
    partial_sum = fourier_partial_sum(x, n)
    error = np.sqrt(np.mean((partial_sum - square_wave(x))**2))
    l2_errors.append(error)

# Plot the L2 error as a function of n
plt.figure(figsize=(10, 6))
plt.plot(n_values, l2_errors, 'o-')
plt.xlabel('n')
plt.ylabel('L2 Error')
plt.title('L2 Error vs. n')
plt.grid(True)
plt.show()

