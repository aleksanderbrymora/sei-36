require 'set'

def is_isogram word
	word.size == word.downcase.split('').to_set.size
end

def iso word
	word.size == word.downcase.split('').uniq.size
end

p is_isogram("Dermatoglyphics") #=> true
p is_isogram("isogram") #=> true
p is_isogram("aba") #=> false, "same p ch_ars may not be adjacent"
p is_isogram("moOse") #=> false, "same chars may not be same case"
p is_isogram("isIsogram") #=> false
p is_isogram("") #=> true, "an empty string is a valid isogram"
p '==============='
p iso("Dermatoglyphics") #=> true
p iso("isogram") #=> true
p iso("aba") #=> false, "same p ch_ars may not be adjacent"
p iso("moOse") #=> false, "same chars may not be same case"
p iso("isIsogram") #=> false
p iso("") #=> true, "an empty string is a valid isogram"