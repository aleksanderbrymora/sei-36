require 'pry'

start_line = "N"
start_station = "28th"

end_line = "L"
end_station = "8th"

# union_square_index_start = lines[start_line].index("Union-Square")
# union_square_index_end = lines[end_line].index("Union-Square")

lines = {
"N" => %w( Times-Square 34th 28th 23rd Union-Square 8th ),
"L" => %w( 8th 6th Union-Square 3rd 1st ),
"6" => %w( Grand-Central 33rd 28th 23rd Union-Square Astor-Place )
}

start_stop = lines[start_line].index(start_station)
end_stop = lines[end_line].index(end_station)
# start_line == end_line
if start_stop > end_stop
path = lines[start_line][end_stop..start_stop].reverse
else
path = lines[start_line][start_stop..end_stop]
end

if start_line != end_line and start_stop > lines[start_line].index("Union-Square") and end_stop > lines[end_line].index("Union-Square")

path = lines[start_line][lines[start_line].index("Union-Square")..start_stop]


if start_line != end_line
  path = lines[start_line][start_stop..lines[start_line].index("Union-Square")] | lines[end_line][lines[end_line].index("Union-Square")..end_stop]
end
p lines

binding.pry
# .merge(lines[end_line][lines[end_line].index("Union-Square")..end_stop])
