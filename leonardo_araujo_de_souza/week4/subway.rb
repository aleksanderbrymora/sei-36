# # MTA Lab

# ## Objectives:
# * Apply your knowledge of Ruby to solve a real world problem.
# * Get really good at array manipulation.

# #### Activity
# * Create a program that models a simple subway system.

# * The program takes the line and stop that a user is getting on at and the line
# and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

# ```ruby
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.

# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."
# ```

# * There are 3 subway lines:
#   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
#   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
#   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
#   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


# #### Hints:
# * Work out how you would do it on paper first! Then start to explain that process in Ruby.
# * Get the program to work for a single line before trying to tackle multiple lines.
# * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```gets``` later to make it more interactive.
# * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# * The key to the lab is finding the index positions of each stop. (hint: ```index```)
# * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


puts 'Welcome to Subway service'
 3.times {puts " "}
$mta = {
    n: [
        "Times Square",
        "34th",
        "28th",
        "23rd",
        "Union Square",
        "8th",
      ],
    l: [
        "8th",
        "6th",
        "Union Square",
        "3rd",
        "1st",
      ],
    six:[
        "Grand Central",
        "33rd",
        "28th",
        "23rd",
        "Union Square",
        "Astor Place",
      ],
  
  } #end of MTA hash
  
  def on_index(line, on)
    $mta[line].find_index(on)
  end
  
  
  def off_index(line, off)
    $mta[line].find_index(off)
  end 
  
  
  
  
  def stops_made(line, on, off)
  
     first_index = on_index(line, on)
     last_index = off_index(line, off)
  
     # if index numbers are getting bigger
     if first_index < last_index
       stops_array = $mta[line][first_index + 1..last_index]
       puts stops_array  #can return instead of puts             #prints out stops
       # stops_array.length           #counts num of stops
  
     else
      # if index numbers are getting smaller
       stops_array = $mta[line][last_index..first_index - 1]
       puts stops_array.reverse
       # stops_array.length
  
     end
      stops_array.length
  end #end of stopsMade
  

  
  
  def planTrip(line, on, line2, off)
  
      if (line == line2)
        # stops_made(line, on, off)
        puts "Total stops: #{stops_made(line, on, off)}"
      else
        total1 = stops_made(line, on, "Union Square");
        puts "Change at Union Square";
        total2 = stops_made(line2, 'Union Square', off);
        puts "Total stops: #{total1 + total2}"
      end
  
  end
  
  planTrip(:n, "Times Square", :n, "Union Square")
  planTrip(:n, "Union Square", :l, "Astor Place")