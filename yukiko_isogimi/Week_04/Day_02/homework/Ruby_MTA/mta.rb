require 'pry'
$subway = {
"N" => ["Times Square", "34th", "28th", "23rd", "Union Square","8th"],
"L" => ["8th", "6th", "Union Square", "3rd","1st"],
"6" => ["Grand Central", "33rd", "28th", "23rd","Union Square", "Astor Place"]
# "count" => 0
}

#
def trip_to_union_square line,station
   if station != "Union Square"
     index_union_square = $subway[line].index("Union Square")
     index_station = $subway[line].index(station)
     if index_union_square < $subway[line].index(station)
        stations_stop = $subway[line][(index_union_square + 1)..index_station].reverse.join(',')


      elsif index_union_square > index_station
          stations_stop = $subway[line][index_station..index_union_square].join(',')


      end
    # binding.pry
    puts "You must travel through the following stops on the #{line} line:"
    puts stations_stop
    puts "Change at Union Square"
  end
 end

# trip_to_union_square("N","Times Square")



 def trip_to_final_destination last_line, last_station
   index_union_square = $subway[last_line].index("Union Square")
   index_last_station = $subway[last_line].index(last_station)
   if index_last_station < index_union_square
     second_stations_stop = $subway[last_line][index_last_station..(index_union_square - 1)].reverse.join(',')

   elsif index_union_square < index_last_station
     second_stations_stop = $subway[last_line][(index_union_square + 1)..index_last_station].join(",")
   end
   # second_count = second_stations_stop.size
   puts "Your journey continues through the following stops:"
   puts second_stations_stop
end

 # trip_to_final_destination("N","Times Square")

def single_trip line_start, station_start, line_end, station_stop
  if line_start == line_end
    index_start_station = $subway[line_start].index(station_start)
    index_last_station = $subway[line_end].index(station_stop)
    # if index_start_station < index_last_station
      stations_stop = $subway[line_start][index_start_station..index_last_station]
    # else
    #   station_stop = $subway[line_start][index_start_station..index_last_station].reverse
    # end
  end
  puts "Your keeon on board through the following stops:"
  puts stations_stop
end

# single_trip("N","Times Square","N","8th")

#

def plan_trip start_line, start_station, last_line, last_station
 if start_line == last_line
   single_trip start_line, start_station, last_line, last_station
 else
   trip_to_union_square start_line, start_station
   trip_to_final_destination last_line, last_station
 end
end
#
# plan_trip("N","34","N","8th")
plan_trip("N","34","L","8th")
# plan_trip("N","8th","6","23rd")
# plan_trip("6","28th","N","34th")
