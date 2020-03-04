$lines = {
    "L" => ["8th", "6th","Union Square", "3rd", "1st"] ,
    "N" => ["34th", "28th", "23rd", "Union Square", "8th"],
    "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}
$us = "Union Square"
#########################################################
def index_finder (line,stop)
  index = $lines[line].index(stop)
end
##########################################################
def stops_fetcher (origin,destination,line)
  @st_in = index_finder(line,origin)
  @en_in = index_finder(line,destination)
  if @st_in < @en_in
    @list = $lines[line][@st_in+1..@en_in]
  else
    @list = ($lines[line][@en_in..@st_in-1]).reverse()
  end
end
##########################################################
def stops_lister (start_line,origin,end_line,destination)
  if start_line == end_line
    $stopping_at = stops_fetcher(origin,destination,start_line)
    puts "stopping at #{$stopping_at} and no. of stops:#{$stopping_at.size}"
  else
    $stopping_at = stops_fetcher(origin,$us,start_line)
    $stops_after_change = stops_fetcher($us,destination,end_line)
    puts "stopping at #{$stopping_at} change at #{$us} journey continues through #{$stops_after_change} and no. of stops:#{$stopping_at.size + $stops_after_change.size}"
  end
end
#########################################################
stops_lister("N","34th","6","Grand Central")
