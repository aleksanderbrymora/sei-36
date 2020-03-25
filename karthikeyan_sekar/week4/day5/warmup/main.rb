puts "How to find the point mutation"
dna1 = ['G','A','G','C','C','T','A','C','T','A','A','C','G','G','G','A','T']
dna2 = ['C','A','T','C','G','T','A','A','T','G','A','C','G','G','C','C','T']
i = 0
j = 0
count = 0
for x in dna1 do
  if i<dna1.length
  for y in dna2 do
    if j<dna2.length
    if ((x[i] == y[j]) && (i == j))
      count += 1
    end
      i+=1
      j+=1
    end
  end
end
  end
  puts "the totale ponts mutations is #{dna1.length - count}"
