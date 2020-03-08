$lines = {
  "N" => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  "L" => ['8th', '6th', 'Union Square', '3rd', '1st'],
  "6" => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

def stationExists(lineOne, start, lineTwo, stop)
  return true if $lines[lineOne].include?(start) && $lines[lineTwo].include?(stop)
  false
end

def sameLine (lineName, line, start, stop)
  trip = line[line.index(start)+1..line.index(stop)] if line.index(start) < line.index(stop)
  trip = line.reverse![line.index(start)+1..line.index(stop)] if line.index(start) > line.index(stop)
  puts "You must travel through the following stops on the #{lineName} line: #{trip.join(", ")}"
end

def findUnionSquare(line, start)
  return trip = line[line.index(start)..line.index("Union Square")] if line.index(start) < line.index("Union Square")
  return trip = line.reverse![line.index(start)..line.index("Union Square")] if line.index(start) >= line.index("Union Square")
end

def changeLine (lineOne, start, lineTwo, stop)
  return sameLine(lineOne, $lines[lineOne], start, "Union Square") if stop == "Union Square"
  return sameLine(lineTwo, $lines[lineTwo], stop, "Union Square") if start == "Union Square"
  puts "You must travel through the following stops on the #{lineOne} line: #{findUnionSquare($lines[lineOne], start)[1..-1].join(", ")}."
  puts "Change at Union Square"
  puts "Your journey continues through the following stops on the #{lineTwo} line: #{findUnionSquare($lines[lineTwo], stop)[0..-2].reverse!.join(", ")}."
  puts "#{findUnionSquare($lines[lineOne], start)[1..-1].size + findUnionSquare($lines[lineTwo], stop)[0..-2].size} stops in total"
end

def plan_trip (lineOne, start, lineTwo, stop)
  puts "-=" * 40
  sameLine(lineOne, $lines[lineOne], start, stop) if lineOne == lineTwo && stationExists(lineOne, start, lineTwo, stop)
  changeLine(lineOne, start, lineTwo, stop) if lineOne != lineTwo && stationExists(lineOne, start, lineTwo, stop)
end

plan_trip 'N', 'Times Square', 'N', '23rd'
plan_trip 'N', '8th', '6', 'Astor Place'
plan_trip 'N', '8th', '6', 'Your Place'
plan_trip '6', '33rd', 'L', '6th'
plan_trip 'L', '1st', '6', 'Union Square'
