# Point Mutations
# History
# A mutation is simply a mistake that occurs during the creation or copying of a nucleic acid, in particular DNA. Because nucleic acids are vital to cellular functions, mutations tend to cause a ripple effect throughout the cell. Although mutations are technically mistakes, a very rare mutation may equip the cell with a beneficial attribute. In fact, the macro effects of evolution are attributable by the accumulated result of beneficial microscopic mutations over many generations.
#
# The simplest and most common type of nucleic acid mutation is a point mutation, which replaces one base with another at a single nucleotide.
#
# By counting the number of differences between two homologous DNA strands taken from different genomes with a common ancestor, we get a measure of the minimum number of point mutations that could have occurred on the evolutionary path between the two strands.
#
# This is called the 'Hamming distance'
#
# Example
# GAGCCTACTAACGGGAT
# CATCGTAATGACGGCCT
# ^ ^ ^  ^ ^    ^^
# The Hamming distance between these two DNA strands is 7.
#
# Exercise
# Write a program that can calculate the Hamming difference between two DNA strands.
#
# Bonus
# Implement the same pointer system as in the example above - the third line with ^ ^ ^ ^ ^ ^^ - to visually tell the difference.
#
# Source
# The Calculating Point Mutations problem at Rosalind

a = ["GAGCCTACTAACGGGAT"]
b = ["CATCGTAATGACGGCCT"]
difference = 0

for i in a
  for j in b
    if a.index i == b.index j && a i == b j
      difference += 1
    end
  end




# def hamming (s1,s2)


puts difference
