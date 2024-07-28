---
title: "Using Test Driven Approach to Solve Coding Problems in Python"
date: "2022-07-31"
---

Python is a great language for solving coding problems because of it's easy to comprehend syntax, plethora of helpful
functions, and in-build modules that can help you write tests instantly. One such testing library is
[doctest](https://docs.python.org/3/library/doctest.html).

## How to use `doctest` for coding problems?

If you are familiar with writing `docstrings` inside a function to describe its purpose, arguments it expects, the
values it returns as well as any exceptions that are thrown, you can additionally write texts that look like an
interactive Python session which is then executed by `doctest` module to verify if they are exactly the same as
specified.

Let's define a simple function and save it in `greet.py` to demonstrate this:
```python
def greet(name: str) -> str:
    """Greets a person

    Arguments:
    name: str, name of the person being greeted

    >>> greet("World")
    'Hello, World!'
    >>> greet("Foo")
    'Hello, Foo!'
    >>> assert greet("Bar") != 'Hello, Bar'
    """
    return f"Hello, {name}!"
```

We can use the following approach to make sure that the test cases specified gets executed, please add this block at
the end of `greet.py`:

```python
if __name__ == "__main__":
    import doctest
    doctest.testmod()
```

Now run your code using
```sh
python3 greet.py # Produces nothing if all tests defined in doctest pass
```

You can define -v for verbose output to see what tests cases are executed and their output

```sh
python3 greet.py -v
```

It outputs something like this in terminal:

```sh
Trying:
    greet("World")
Expecting:
    'Hello, World!'
ok
Trying:
    greet("Foo")
Expecting:
    'Hello, Foo!'
ok
Trying:
    assert greet("Bar") != 'Hello, Bar'
Expecting nothing
ok
1 items had no tests:
    __main__
1 items passed all tests:
   3 tests in __main__.greet
3 tests in 2 items.
3 passed and 0 failed.
Test passed.
```

If you were told to `write a function to solve for x` in an interview problem, you can use `doctest` to define tests and
edge cases before you think about an approach to solve the problem, your interviewer will be impressed, it also shows
that you know about this cool module that Python provides, and when you are done writing the solution your test cases
are automatically executed.

You get into the mindset of solving the problem by coming up with examples, their output,
identify some edges cases, and of course earn some brownie points from your interviewer.

---

Let's solve a real problem that maybe asked in a real interview. There is a fairly simple algorithm that a lot of
organizations use including credit card companies to verify that when you entered a credit card number to make a payment
it's the correct number, it's called Luhn's Algorithm after its creator Hans Peter Luhn.

We will solve a simple version of that algorithm, you can of course you can read it in detail
[at Wikepedia](https://en.wikipedia.org/wiki/Luhn_algorithm)

```md
Problem: Given a number as input

* Start from the rightmost digit and double every second number
* Sum the digits of the resulting value in each position (including where it was not doubled)
* Perform modulo operation on total sum calculated in step 2, if the result is 0 return True else False

e.g. 123456 -> (2)2(6)4(10)6 -> 21 % 10 = 1 -> False
```

```python

def check_luhn(purported_luhn_number: str) -> bool:
    """
    Given the string purported to be a Luhn number, return True if it is False otherwise

    >>> check_luhn('0')
    True
    >>> check_luhn('1')
    False
    >>> check_luhn('2')
    False
    >>> check_luhn('3')
    False
    >>> check_luhn('4')
    False
    >>> check_luhn('5')
    False
    >>> check_luhn('10')
    False
    >>> check_luhn('18')
    True
    >>> check_luhn('19')
    False
    >>> check_luhn('26')
    True
    >>> check_luhn('50')
    False
    >>> check_luhn('91')
    True
    >>> check_luhn('182')
    True
    >>> check_luhn('183')
    False
    >>> check_luhn('505')
    True
    >>> check_luhn('992')
    True
    >>> check_luhn('999')
    False
    >>> check_luhn('123455')
    True
    >>> check_luhn('123456')
    False
    """
    digit_length = len(purported_luhn_number)

    # edge cage for length 1, verify the edge case
    if digit_length == 1:
        return int(purported_luhn_number) == 0

    _sum = 0
    digit = 0
    # To identify which digit to multiply if iterating from start
    parity = (digit_length - 2) % 2
    for i in range(digit_length):
        digit = int(purported_luhn_number[i])
        if i % 2 == parity:
            digit = 2 * digit

        if digit > 9:
            digit -= 9 # 2 * 9 = 18 -> sum of digits (1+8) = 9, neat trick

        _sum += digit

    return _sum % 10 == 0
```

---

Reference:

[https://docs.python.org/3/library/doctest.html](https://docs.python.org/3/library/doctest.html)
[https://en.wikipedia.org/wiki/Luhn_algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm)
