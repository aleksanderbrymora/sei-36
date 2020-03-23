words = %w[I am that I am]
words = ARGV unless ARGV.size == 0  # ARGVempty?

puts "=-" * 40
puts word.join('').upcase.center
puts "=-" * 40

word.permutation.to_a.shuffle.each do |line|
  puts line.join('').center 80
end
