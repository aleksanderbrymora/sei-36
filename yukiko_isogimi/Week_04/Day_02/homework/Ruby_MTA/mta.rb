require 'pry'
$subway = {
"N" => ["Times Square", "34th", "28th", "23rd", "Union Square","8th"],
"L" => ["8th", "6th", "Union Square", "3rd","1st"],
"6" => ["Grand Central", "33rd", "28th", "23rd","Union Square", "Astor Place"]
}


def trip_to_union_square line,station
   if station != "Union Square"
     index_union_square = $subway[line].index("Union Square")
     index_station = $subway[line].index(station)
     if index_union_square < $subway[line].index(station)
        stations_stop = $subway[line][(index_union_square + 1)..index_station].reverse.join(',')

      elsif index_union_square > index_station
          stations_stop = $subway[line][index_station..index_union_square].join(',')
      end
    print "You must travel through the following stops on the #{line} line:"
    print stations_stop
    print "Change at Union Square"
  end
 end

trip_to_union_square("N","Times Square")

#

 def trip_to_final_destination last_line, last_station
   index_union_square = @subway[last_line]["Union Square"]
   index_last_station = @subway[last_line].index(last_station)
   if index_last_station < index_union_square
     second_stations_stop = @subway[last_line][index_last_station..(index_union_square - 1)].reverse

   elsif index_union_square < index_last_station
     second_stations_stop = @subway[last_line][(index_union_square + 1)..index_last_station]
   end
   puts "Your journey continues through the following stops:"
   puts second_stations_stop
end


 trip_to_final_destination("N","Times Square")
 binding.pry


def single_trip line_start, station_start, line_end, line_stop
  if line_start == line_end
    index_start_station = @subway[line_start][station_start]
    index_last_station = @subway[line_end][line_stop]
    stations_stop = @subway[line_start][index_start_station..index_last_station]
  end
  print "Your keeon on board through the following stops:"
  print stations_stop
end


def plan_trip start_line, start_station, last_line, last_station
 if start_line == last_line
   single_trip start_line, start_station, last_line, last_station
 else
   trip_to_union_square start_line, start_station
   trip_to_final_destination last_line, last_station
 end
end
#
plan_trip("N","8th","L","8th")
