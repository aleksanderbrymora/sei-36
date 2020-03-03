require 'pry'

def plan_trip start_line, start_stop, end_line, end_stop
    mta = {
        :N => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
        :L => ['8th', '6th', 'Union Square', '3rd', '1st'],
        :'6' => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
    }
    start_line_sym = start_line.to_sym
    end_line_sym = end_line.to_sym

    # Get index of each stops
    start_stop_index = mta[start_line_sym].index start_stop
    end_stop_index = mta[end_line_sym].index end_stop

    start_us_index = mta[start_line_sym].index 'Union Square'
    end_us_index = mta[end_line_sym].index 'Union Square'

    # Single line condition
    if start_line == end_line
        total_stops = (end_stop_index - start_stop_index).abs
        if end_stop_index > start_stop_index
            passed_stops = mta[start_line_sym][start_stop_index..end_stop_index]
        else
            passed_stops = mta[start_line_sym][end_stop_index..start_stop_index].reverse
        end
        puts "You must travel through the following stops on the #{start_line} line: #{passed_stops.join(',')}."
        puts "#{total_stops} in total."
    
    # Multi line condition
    else
        # From line 1 to Union Square
        total_stops_to_us = (start_us_index - start_stop_index).abs
        if start_us_index > start_stop_index
            start_line_passed_stops = mta[start_line_sym][start_stop_index..start_us_index]
        else
            start_line_passed_stops = mta[start_line_sym][start_us_index..start_stop_index].reverse
        end

        # From Union Square to end stop
        total_stops_from_us = (end_us_index - end_stop_index).abs
        if end_us_index > end_stop_index
            end_line_passed_stops = mta[end_line_sym][end_stop_index..end_us_index].reverse
        else
            end_line_passed_stops = mta[end_line_sym][end_us_index..end_stop_index]
        end
        puts "You must travel through the following stops on the #{start_line} line: #{start_line_passed_stops.join(',')}."
        puts "Change at Union Square."
        puts "Your journey continues through the following stops: #{end_line_passed_stops.join(',')}."
        puts "#{total_stops_to_us + total_stops_from_us} in total."
    end    
end

plan_trip 'N', 'Times Square', '6', '33rd'
plan_trip 'L', '1st', 'N', 'Times Square'