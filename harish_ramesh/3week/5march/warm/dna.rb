
def count_nucleotides( string )

  bases = {
    "A" => 0,
    "C" => 0,
    "T" => 0,
    "G" => 0
  }

  message = []

  # iterate over each character of the input string
  string.upcase.chars.each do |letter|

    ## First version: a nested loop over the keys of our bases hash, to check whether our current letter
    ## matches any of them. Note that if we use this method, we also need the is_nucleotide variable as a
    ## flag which lets us keep track of whether we found any matching bases or not, while looping
    #
    #
    # is_nucleotide = false
    #
    #
    # bases.each do |key, value|
    #   if letter == key
    #     bases[ key ] += 1
    #     is_nucleotide = true
    #   end
    # end
    #
    # unless is_nucleotide
    #   message.push "#{letter} is not a valid nucleotide"
    # end


    # BETTER: instead of looping over the keys in our bases hash, it's much more efficient, and a
    # more appropriate use of the hash data structure, to just see if the bases hash has this
    # letter as a key, which will confirm that the letter is a valid base
    # We can use the .key? predicate method to check for the key - it returns true if the hash has the specificed key
    if bases.key? letter
    # ^ we could alternatively write this test as: unless bases[ letter ].nil?
      bases[ letter ] += 1
    else
      message.push "#{letter} is not a valid nucleotide"
    end

  end # each letter in string


  # now that we've finished counting all the bases in our string, we can construct a nicely
  # formatted report of the count of each base in the string
  bases.each do |key, value|
    message.push "#{ key }: #{ value }" if value > 0
  end

  message   # implicit return of message array
end

puts count_nucleotides "GCTTTTCTXTCTGCTGCCGGGCTTGTCTCTGTGTGGTTGGTGTCTGTGCGC"
