#MTA trip planner by Ali A
Lines ={ "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
        "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
        "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

def along_same_line(s, e, line )
    line.index(e) > line.index(s) ? line[line.index(s)+1..line.index(e)] : line.reverse[line.reverse.index(s)+1..line.reverse.index(e)]
end

def find_in_route(s, sLine, e, eLine)
    #if the same line
    if sLine == eLine
        return "You must travel through the following stops on the #{Lines[sLine]} line: #{along_same_line(s, e, line).join(", ")}"
    else
        #if different lines
        trip1 = along_same_line(s, "Union Square", Lines[sLine]) << along_same_line("Union Square", e, Lines[eLine])
        return "You must travel through the following stops on the #{sLine} line, changing at Union Square for Line #{eLine}: #{trip1.join(", ")}"
    end
end

def trip_planner
    print "Welcome to the MTA trip planner.\nPlease enter a starting station: \n"
    start_station = gets.chomp
    print "Enter the line to start on: "
    start_line = gets.chomp
    print "Enter the destination station: "
    end_station = gets.chomp
    print "Enter the destination line: "
    end_line = gets.chomp
    print "#{find_in_route(start_station, start_line, end_station , end_line)}"
end

trip_planner

find_in_route("34th", "N", "23rd", "N") # => ["28th", "23rd"]
find_in_route("8th", "N", "Times Square", "N") # => ["Union Square", "23rd", "28th", "34th", "Times Square"]
find_in_route("28th", "N", "3rd", "L") # => ["23rd", "Union Square", "3rd"]
find_in_route("Astor Place", "6", "8th", "L") # => ["Union Square", "6th", "8th"]