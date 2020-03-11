require 'pry'

$stations = {
		:n_line => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
		:l_line => ["8th", "6th", "Union Square", "3rd", "1st"],
		:six_line => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

print "What is your starting line?: "
starting_line = gets.chomp.to_sym

print "What is your starting station?: "
starting_station = gets.chomp

print "What is your ending line?: "
end_line = gets.chomp.to_sym

print "What is your end station?: "
end_station = gets.chomp

puts "The directions from #{ starting_station } and #{ end_station } are..."

def plan_trip (starting_line, starting_station, end_line, end_station)
 # function stuff
 # List the stations from starting_station to the end_station (indexOf for ruby)
 # Single trip on one line

	if starting_line === end_line
    puts "You are on the same line"
		start_index = $stations[starting_line].index starting_station
		puts start_index
		finsh_index = $stations[starting_station].index end_station
		puts finsh_index

	end

end
plan_trip(starting_line, starting_station, end_line, end_station)
