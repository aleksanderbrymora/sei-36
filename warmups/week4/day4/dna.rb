def dna_counter dna
	base_table = {
		'A' => 0,
		'C' => 0,
		'T' => 0,
		'G' => 0
	}

	dna.each_char do |base|
		if base_table.key? base
			base_table[base] += 1
		else
			puts "#{base} is not valid"
		end
	end


	base_table.each do |key, value|
		puts "#{key} - #{value}"
	end
end

def dna_counter_short dna
	dna.split('').uniq.map { |base| "#{base} - #{dna.count base}" }
end

dna_counter "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
puts dna_counter_short "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"