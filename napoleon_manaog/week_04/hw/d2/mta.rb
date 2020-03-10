require 'pry'

$mta = {
	"N" => ['Times Square', '34th', '28th','23rd','Union Square','8th'],
  "L" => ['8th', '6th', 'Union Square', '3rd', '1st'],
  "6" => ['Grand Central', '33rd', '28th', '23rd', 'Union Square','Astor Place']
}

$trip0 ={
	:start_line => "L",
	:start_on_stop => "3rd",
	:end_line   => "6",
	:end_on_stop   => "Astor Place"
}

$trip_1 = {
	:start_line => "N",
	:start_on_stop => "Times Square",
	:end_line   => "N",
	:end_on_stop   => "8th"
}

$trip_11 = {
	:start_line => "N",
	:start_on_stop => "8th",
	:end_line   => "N",
	:end_on_stop   => "34th"
}


$trip_2 = {
	:start_line => "N",
	:start_on_stop => "Times Square",
	:end_line   => "6",
	:end_on_stop   => "Grand Central"
}
# {:a=>["34th", "28th", "23rd"], :b=>[], :c=>["23rd", "28th", "33rd"]}

$trip_22 = {
	:start_line => "6",
	:start_on_stop => "Grand Central",
	:end_line   => "N",
	:end_on_stop   => "Times Square"
}
# {:a=>["33rd", "28th", "23rd"], :b=>[], :c=>["23rd", "28th", "34th"]}



# stores the planned trip
$tripRoute ={
	:a => [], # 1st line
	:b => [], # change at Union Square
	:c => [] #  2nd line
}

def single(trip,route)
	stop_a_idx = $mta[trip[:start_line]].find_index(trip[:start_on_stop])
	stop_b_idx = $mta[trip[:end_line]].find_index(trip[:end_on_stop])
	diff = stop_b_idx - stop_a_idx

	# Test trip direction relative to USq
	if stop_a_idx > stop_b_idx
		temp = stop_a_idx
		stop_a_idx = stop_b_idx
		stop_b_idx = temp
	end

	ctr = stop_a_idx + 1

	while ctr < stop_b_idx
		route << $mta[trip[:start_line]][ctr]
		ctr+=1
	end

	if !diff.positive?
		route.reverse!
	end
end

def multi(t)
	junction = "Union Square"

	line_1 = {
			:start_line    => t[:start_line],
			:start_on_stop => t[:start_on_stop],
			:end_line      => t[:start_line],
			:end_on_stop   => junction
		}

	line_2 = {
			:start_line    => t[:end_line],
			:start_on_stop => junction,
			:end_line      => t[:end_line],
			:end_on_stop   => t[:end_on_stop]
		}

	single(line_1, $tripRoute[:a])
	single(line_2, $tripRoute[:c])
end

def plan_trip(trip)
	if trip[:start_line] == trip[:end__line]
		single(t)
		puts "Single: #{$tripRoute[:a]}"
	else
		multi(trip)
		puts "Multi: #{$tripRoute}"
	end
end

plan_trip($trip_0) #
# plan_trip($trip_1)
# plan_trip($trip_11)
# plan_trip($trip_2)
# plan_trip($trip_22)
