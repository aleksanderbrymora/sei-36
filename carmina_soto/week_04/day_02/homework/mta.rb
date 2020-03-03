require 'pry'
require 'rainbow'

$n_subway_line = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
$l_subway_line = ["8th", "6th", "Union Square", "3rd", "1st"]
$six_subway_line = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

def show_menu
  puts "-=" * 40
  puts Rainbow("Welcome to the MTA Trip Planner!")
  puts "-=" * 40
  puts "To start, type [s]. To quit the program, type [q]"
end

show_menu
menu_choice = gets.chomp.downcase

# def get_subway_line line
#   subway = $n_subway_line if line == "N"
#   subway = $l_subway_line if line == "L"
#   subway = $six_subway_line if line == "6"
# end
def move_subway start_stop, end_stop, line
  if start_stop > end_stop
    subway_stops = line[end_stop..start_stop - 1].reverse
  else
    subway_stops = line[start_stop + 1..end_stop]
  end
end

def plan_trip start_line, start_stop, end_line, end_stop
  # start_subway = get_subway_line start_line
  # end_subway = get_subway_line end_line

  start_subway = $n_subway_line if start_line == "N"
  start_subway = $l_subway_line if start_line == "L"
  start_subway = $six_subway_line if start_line == "6"

  end_subway = $n_subway_line if end_line == "N"
  end_subway = $l_subway_line if end_line == "L"
  end_subway = $six_subway_line if end_line == "6"

  if start_subway == end_subway
    stops = move_subway start_subway.index(start_stop), start_subway.index(end_stop), start_subway
    no_of_stops = stops.count
    puts Rainbow("You must travel through the following stops on the #{start_line} line: #{stops.join(', ')}
    #{no_of_stops} stops in total").purple
  else
    start_stops = move_subway start_subway.index(start_stop), start_subway.index("Union Square"), start_subway
    end_stops = move_subway end_subway.index("Union Square"), end_subway.index(end_stop), end_subway
    stops = start_stops + end_stops
    no_of_stops = stops.count
    puts Rainbow("You must travel through the following stops on the #{start_line} line: #{start_stops.join(', ')}
    Change at Union Square
    Your journey continues through the following stops on the #{end_line} line: #{end_stops.join(', ')}
    #{no_of_stops} stops in total").purple
  end
end

until menu_choice == 'q'
  puts "Subway Lines: "
  puts Rainbow("N Line: Times Square, 34th, 28th, 23rd, Union Square, 8th").hotpink
  puts Rainbow("L Line: 8th, 6th, Union Square, 3rd, 1st").green
  puts Rainbow("6 Line: Grand Central, 33rd, 28th, 23rd, Union Square, Astor Place").aqua
  print "Enter start line: "
  start_line_mta = gets.chomp
  print "Enter start stop: "
  start_stop_mta = gets.chomp
  print "Enter end line: "
  end_line_mta = gets.chomp
  print "Enter end stop: "
  end_stop_mta = gets.chomp
  plan_trip start_line_mta, start_stop_mta, end_line_mta, end_stop_mta
  puts "-=" * 40
  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using the MTA Trip Planner!"



# plan_trip "N", "Times Square", "N", "8th"
# plan_trip "N", "34th", "6", "33rd"
# plan_trip "L", "1st", "6", "Grand Central"
