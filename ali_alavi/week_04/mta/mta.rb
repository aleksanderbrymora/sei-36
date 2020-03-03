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

def find_in_line(s, e, line)
    if line.index(e) > line.index(s)
        return line[line.index(s)+1..line.index(e)]
    else 
        return line.reverse[line.reverse.index(s)+1..line.reverse.index(e)]
    end
end

find_in_line("34th", "23rd", N) # => ["28th", "23rd"]
find_in_line("8th", "Times Square", N) # => ["Union Square", "23rd", "28th", "34th", "Times Square"]