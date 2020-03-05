
$subwayLines = [{ :line => 'N' , :stops => ["Time Square","34th","28th", "23rd","Union Square","8th"]},
                   {:line => 'L', :stops => ["8th","6th", "Union Square","3rd","1st"]},
                   {:line =>  'P', :stops => ["Grand Central","33rd", "28th","23rd","Union Square","Astor Place"]}]

$interSectionPoint = 'Union Square'
$travelInstruction = 'You must travel through the following stops on the'
$travelChangeOver = 'Your journey continues through the following stops:'

#Get the whole stoplist for particular given line.
#require 'pry'
def getStopDetails(line)
# The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
#lineDetails = $subwayLines.find(subwayLine => (subwayLine.line == line));
x = $subwayLines
  for i in x do
    #puts x
#puts i
#puts i[:line]
#puts line
  if i[:line] == line
#    puts i
  # sam = x[i]
#  puts i[:stops]
  lineDetails = i[:stops]
  end
end

#lineDetails = "#{$subwayLines.map(($subwayLines[:line] == line))}"
lineDetails
end
#binding.pry
# Get the user stoplist for a particular line.
def getUsersStopsByLine(line,originStop,destinationStop)
  stopList = getStopDetails(line)
  puts stopList
  originStopIndex = stopList.index(originStop)
  #puts originStopIndex
  destinationStopIndex = stopList.index(destinationStop)
  #puts destinationStopIndex
  if originStopIndex < destinationStopIndex
 stopList.slice(originStopIndex + 1,destinationStopIndex)
  ##  stopList((stopList.index(originStop) + 1)..(stopList.index(destinationStop) + 1))

  else
    stopList.slice(destinationStopIndex,originStopIndex)
    #stopList((stopList.index(originStop) + 1)..(stopList.index(destinationStop) + 1))
    end
  end



# Check is lines are same or not
def lineCheck(originLine,destinationLine)
  if originLine.to_i === destinationLine.to_i
    true
  else
    false
  end
end



#Provide Customer Plan details
def planTrip(originLine,originStop,destinationLine,destinationStop)
  if lineCheck(originLine,destinationLine)
    finalLineStops = getUsersStopsByLine(originLine,originStop,destinationStop)
    puts("#{$travelInstruction} #{originLine} line: #{finalLineStops}")
    puts("#{finalLineStops.length} stops in total.")
  else
  originLineStops  = getUsersStopsByLine(originLine,originStop,$interSectionPoint)
  destinationLineStops = getUsersStopsByLine(destinationLine,$interSectionPoint,destinationStop)
  finalLineStops = originLineStops.concat(destinationLineStops)
  puts("#{$travelInstruction} #{originLine} line: #{originLineStops}.")
  puts("Change at #{$interSectionPoint}.")
  puts("#{$travelChangeOver} #{destinationLineStops}.")
  puts("#{finalLineStops.length} stops in total")
  end
end





# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# puts "Welcome to MTA Lab"
 #planTrip('6','33rd','6','Astor Place')
#>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
#puts' Next Output '
#planTrip('6','Astor Place','6','Grand Central')
#>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# puts' Next Output '
# planTrip('L','1st','L','8th')
# #>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# puts' Next Output '
# planTrip('L','1st','N','Time Square')
puts "Welcome to MTA Lab"
planTrip('N','Time Square','N','Union Square')
