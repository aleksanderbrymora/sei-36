#plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.

#  shows output similar to this:
# "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# "Change at Union Square."
# "Your journey continues through the following stops: 23rd, 28th, 33rd."
# "7 stops in total."

Lines ={ "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
        "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
        "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

def along_same_line(s, e, line )
    if line.index(e) > line.index(s)
        return line[line.index(s)+1..line.index(e)]
    else 
        return line.reverse[line.reverse.index(s)+1..line.reverse.index(e)]
    end
end

def find_in_route(s, sLine, e, eLine)
    #if the same line
    if sLine == eLine
        #save line
        line = Lines[sLine]
        return along_same_line(s, e, line)
    else
        #if different lines
        trip1 = along_same_line(s, "Union Square", Lines[sLine])
        trip2 = along_same_line("Union Square", e, Lines[eLine])
        return trip1 + trip2
    end
end

find_in_route("34th", "N", "23rd", "N") # => ["28th", "23rd"]
find_in_route("8th", "N", "Times Square", "N") # => ["Union Square", "23rd", "28th", "34th", "Times Square"]
find_in_route("28th", "N", "3rd", "L") # => ["23rd", "Union Square", "3rd"]
find_in_route("Astor Place", "6", "8th", "L") # => ["Union Square", "6th", "8th"]