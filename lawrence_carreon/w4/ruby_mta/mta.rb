require "colorize"

@stations = { 
    "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
}
def plan_trip start_line, start_station, end_line, end_station
    puts "Travel on the #{start_line} line for the following stops: "
    stops = (@stations[start_line].index start_station) < @stations[start_line].index("Union Square") ? [@stations[start_line][((@stations[start_line].index start_station) + 1)..(@stations[start_line].index("Union Square"))]] : [@stations[start_line][(@stations[start_line].index start_station)..(@stations[start_line].index("Union Square") - 1)].reverse]
    stops.push(["Change at Union Square and continue along the #{end_line}: ".light_magenta]) if start_line != end_line
    stops.push((@stations[end_line].index end_station) < @stations[end_line].index("Union Square") ? [@stations[end_line][(@stations[end_line].index end_station)..(@stations[end_line].index("Union Square") - 1)].reverse] : [@stations[end_line][(@stations[start_line].index("Union Square") + 1)..(@stations[start_line].index end_station)]])
    puts stops.flatten!
    puts "Total stops: #{start_line == end_line ? stops.size : (stops.size - 1)}".green
    puts "Thanks for using MTA!\n #{("-=" * 40)}".light_blue
end
def user_inputs question_string
    puts "Which #{question_string} at?".light_blue
    gets.chomp
end
loop do
    puts "Welcome to MTA!".light_green
   start_line, start_station, end_line, end_station = user_inputs("line are you starting"), user_inputs("station are you starting"), user_inputs("line are you departing"), user_inputs("station are you departing")
   plan_trip start_line, start_station, end_line, end_station
end