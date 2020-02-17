# Polybius checkerboard

## Cypher overview

Invented by a Greek historian and cryptographer in the second century BC.
Each of the letters has an equivalent pair of numerical coordinates derived from the numbers of the row and column in which it was located.
Note that i and j have to be combined to fit in a 5x5 board on the original board. For the sake of simplicity, we are going to convert that table to add another row, so we can generate the table, not hardcode it and also add few more signs, to extend the functionality.

| Original |  1  |  2  |  3  |  4  |  5  |
| :------: | :-: | :-: | :-: | :-: | :-: |
|    1     |  a  |  b  |  c  |  d  |  e  |
|    2     |  f  |  g  |  h  | ij  |  k  |
|    3     |  l  |  m  |  n  |  o  |  p  |
|    4     |  q  |  r  |  s  |  t  |  u  |
|    5     |  v  |  w  |  x  |  y  |  z  |

| Ours |  1  |  2  |  3  |  4  |  5  |
| :--: | :-: | :-: | :-: | :-: | :-: |
|  1   |  a  |  b  |  c  |  d  |  e  |
|  2   |  f  |  g  |  h  |  i  |  j  |
|  3   |  k  |  l  |  m  |  n  |  o  |
|  4   |  p  |  q  |  r  |  s  |  t  |
|  5   |  u  |  v  |  w  |  x  |  y  |
|  6   |  z  |  ,  |  .  |  ?  |  !  |

33 51 44 44 11 22 51

## Task

Write a program that encodes a given string using that cipher with the 'Ours' table
Any characters that are not in the table should be ignored.

## Examples

Ciphers are confusing! -> 31 42 13 32 51 33 44 11 33 51 31 53 43 11 14 44 42 43 22 55

42 13 32 51 33 44 11 33 51 31 53 43 11 14 44 42 43 22 55

_Source: Codes, Ciphers & other Cryptic & Clandestine Communication by Fred B. Wrixon_

abcdefghijklmnopqrstuvwxyz,.?!
