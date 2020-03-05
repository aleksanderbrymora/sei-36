require 'rainbow'
# Declarations......

$tracks = {
  :trackN => ["Times Square", "34thN", "28thN", "23rdN","Union Square","8thN"],
  :trackL => ["8thL", "6thL", "Union Square", "3rdL", "1stL"],
  :track6 => ["Grand Central", "33rd6", "28th6", "23rd6", "Union Square","AstorPlace"],
}

def convert track_name
str = track_name.to_s.upcase
("track" + str).to_sym
end

def track_route
  source_stations = []
  des_stations = []
  final_stations = []

  source_stations = $tracks[$source_track]
  index1 = source_stations.index($source_station)
  des_stations = $tracks[$destination_track]
  index2 = des_stations.index($destination_station)


# If two stations are on *******SAME TRACK*****************
  if $source_track == $destination_track
  index1 += 1
  final_stations = source_stations[index1..index2]
  p final_stations
  else

# If two stations are on *******DIFFERENT TRACK*************
# SOURCE TRACK
  union_index = source_stations.index('Union Square')
# SOURCE TRACK
      if index1 <= union_index
          index1 += 1
          final_stations = source_stations[index1..union_index]
      else
          index1 -= 1
          final_stations = source_stations[union_index..index1]
          final_stations = final_stations.reverse!
      end
      puts "You must travel through the following stops on the #{$src_line} line:"
      p final_stations.first(final_stations.length - 1)
      puts "Change at Union Square."

# DESTINATION TRACK
  union_index_des = des_stations.index('Union Square')
# Destination station exist on the left track of Union Square
      if index2 < union_index_des
        des_stat = des_stations[index2..union_index_des]
        des_stat = des_stat.reverse!
        final_stations = final_stations.union(des_stat)
      else
# Destination station exist on the right track of Union Square
        des_stat = des_stations[union_index_des..index2]
        final_stations = final_stations.union(des_stat)
      end
      puts "Your journey continues through the following stops: #{des_stat[1..des_stat.length]}"
      puts "#{final_stations.length} stops in total."
  end
end

# Main Call
puts Rainbow("Train Tracks : ").bold.underline.green
print Rainbow("Enter the source track : ").bold.italic.red
$src_line = gets.chomp.to_s.upcase
$source_track = convert $src_line
puts "These are the stations for this track : #{$tracks[$source_track]} "
print Rainbow("Enter the source station : ").bold.italic.red
$source_station = gets.chomp
print Rainbow("Enter the destination track : ").bold.italic.red
$destination_track = convert gets.chomp
puts "These are the stations for this track : #{$tracks[$destination_track]}"
print Rainbow("Enter the destination station : ").bold.italic.red
$destination_station = gets.chomp


track_route()
