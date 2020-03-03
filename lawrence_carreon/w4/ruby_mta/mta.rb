require "colorize"

@stations = {
    "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
    :stops => 0
}

def plan_trip start_line, start_station, end_line, end_station
    @stations[:stops] = 0
    if start_line == end_line
        describe_trip start_line, start_station, end_station, end_station
    else
        describe_trip start_line, start_station, "Union Square", end_station
        describe_trip end_line, "Union Square", end_station, end_station
    end
    puts "Total stops: #{@stations[:stops]}".green
    puts "Thanks for using MTA!".light_blue
    puts ("-=" * 40).light_blue
end

def describe_trip line, start, destination, end_trip
    index_of_boarding, index_of_alight = @stations[line].index(start), @stations[line].index(destination)
    puts "Travel on the #{line} line for the following stops:".green
    stops = index_of_boarding > index_of_alight ? @stations[line][index_of_alight..index_of_boarding - 1].reverse : @stations[line][index_of_boarding + 1..index_of_alight]
    puts stops
    @stations[:stops] += stops.size
    puts end_trip != "Union Square" && destination == "Union Square" ? "Change at Union Square.".light_magenta : "Arrive at #{destination}.".green
end

def user_inputs question_string
    puts "Which #{question_string} at?".light_blue
    output = gets.chomp
end

loop do
    puts "Welcome to MTA!".light_green
   start_line, start_station, end_line, end_station = user_inputs("line are you starting"), user_inputs("station are you starting"), user_inputs("line are you departing"), user_inputs("station are you departing")
   plan_trip start_line, start_station, end_line, end_station
end
