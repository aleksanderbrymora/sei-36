require 'pry'

# Array of all stations on each line
$lines = {
  :n_line => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  :l_line => ["8th", "6th", "Union Square", "3rd", "1st"],
  :line_6 => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

def trip_planner(start_line, start, stop_line, stop)
  if start_line.to_sym == stop_line.to_sym

    # Get Index
    start_station = $lines[start_line.to_sym].index(start)
    stop_station = $lines[start_line.to_sym].index(stop)

    # Stops
    arr_of_stations = $lines[start_line.to_sym][start_station..stop_station]

    # Output
    puts "You'll take the #{start_line.to_sym} and there are #{arr_of_stations.size} stops."
    puts "Stops: #{arr_of_stations.flatten.join(", ")}."
  else
    puts "*" *60

    # Get Index
    start_station = $lines[start_line.to_sym].index(start)
    stop_at_union_station = $lines[start_line.to_sym].index("Union Square")

    # Stops
    arr_of_stations1 = $lines[start_line.to_sym][start_station..stop_at_union_station]

    # Get Index
    start_at_union_station = $lines[stop_line.to_sym].index("Union Square")
    stop_station = $lines[stop_line.to_sym].index(stop)

    # Stops
    arr_of_stations2 = $lines[stop_line.to_sym][start_at_union_station..stop_station]

    #Output
    puts "First, you'll take the #{start_line.to_sym} and there are #{arr_of_stations1.size} stops."
    puts "Stops: #{arr_of_stations1.flatten.join(", ")}."
    puts "Then, you'll take the #{stop_line.to_sym} and there are #{arr_of_stations2.size} stops."
    puts "Stops: #{arr_of_stations2.flatten.join(", ")}."

  end
end

trip_planner("n_line", "Times Square", "n_line", "8th")
trip_planner("n_line", "Times Square", "l_line", "1st")
trip_planner("n_line", "Times Square", "line_6", "Astor Place")
