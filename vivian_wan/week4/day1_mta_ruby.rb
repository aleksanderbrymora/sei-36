
require 'pry'

lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"] #could have used %w() lineN[1]
lineL = ["8th", "6th", "Union Square", "3rd", "1st"]
line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

def whichline
    puts "Here are the list of lines: "
    puts "[lineN] - Line N"
    puts "[lineL] - Line L"
    puts "[line6] - Line 6"    
end    

#show customer the list of Line N stations
def lineN_stations 
    puts "The list of stations for line N: "
    puts "[0] - Time Square"
    puts "[1] - 34th"
    puts "[2] - 28th"
    puts "[3] - 23rd"
    puts "[4] - Union Square"
    puts "[5] - 8th"
end

#show customer the list of Line L stations
def lineL_stations 
    puts "The list of stations for line L: "
    puts "[0] - 8th"
    puts "[1] - 6th"
    puts "[2] - Union Square"
    puts "[3] - 3rd"
    puts "[4] - 1st"
end

#show customer the list of Line 6 stations
def line6_stations 
    puts "The list of stations for line 6: "
    puts "[0] - Grand Central"
    puts "[1] - 33rd"
    puts "[2] - 28th"
    puts "[3] - 23rd"
    puts "[4] - Union Square"
    puts "[5] - Astor Place"
end

whichline

    puts "which line are you getting on?"
        $startline = gets.chomp

        def stations
            if ($startline == "lineN" || $endline == "lineN" ) 
                lineN_stations
            elsif ($startline == "lineL" || $endline == "lineL")
                lineL_stations
            else
                line6_stations
            end
        end

        stations

        puts "which station are you getting on?"
        $startstation = gets.chomp.to_i 

#select return journey - which line and station
    puts "Please select which line you are getting off."

        whichline

    puts "which line are you getting off?"
        $endline = gets.chomp

        def stations
            if ($startline == "lineN" || $endline == "lineN" ) 
                lineN_stations
            elsif ($startline == "lineL" || $endline == "lineL")
                lineL_stations
            else
                line6_stations
            end
        end

        stations

        puts "which station are you getting off?"
        $endstation = gets.chomp.to_i 

# binding.pry


#only on line L
if ($startline == "lineL" && $endline == "lineL" && $endstation > $startstation) 
    $line = lineL[$startstation..$endstation]
else
    $line = lineL[$endstation..$startstation].reverse
end

p "you are traveling on #{$startline}, through #{$line.join(", ")}. A total of #{$line.length} stations. No changes" 

=begin
if ($endstation == "Union Square")
while ($startline == "lineL" && $endstation > $startstation)
    p $triptounionsquare = lineL[$startstation..$endstation]
elsif

else

end

    
    ($startline == "lineL" && $endstation == "Union Square" && $endstation > $startstation) 
    $triptounionsquare = lineL[$startstation..$endstation]
else
    $line = lineL[$endstation..$startstation].reverse
end
p "you are traveling on #{$startline}, through #{$line.join}. A total of #{$line.length} stations" 

=end