[28] pry(main)> users["Erik"][:favorite_numbers] << 7
=> [8, 12, 24, 7]
[29] pry(main)> users.key
/Users/zara/.rvm/gems/ruby-2.7.0/gems/pry-0.12.2/lib/pry/exceptions.rb:28: warning: $SAFE will become a normal global variable in Ruby 3.0
ArgumentError: wrong number of arguments (given 0, expected 1)
from (pry):42:in `key'
[30] pry(main)> users.keys
=> ["Jonathan", "Erik", "Anil"]
[31] pry(main)> users["min"] = {:twitter => 'minzra', :favorite_numbers => [1,12,34] }
=> {:twitter=>"minzra", :favorite_numbers=>[1, 12, 34]}
[32] pry(main)> users
=> {"Jonathan"=>{:twitter=>"tronathan", :favorite_numbers=>[12, 42, 75]},
 "Erik"=>{:twitter=>"sferik", :favorite_numbers=>[8, 12, 24, 7]},
 "Anil"=>{:twitter=>"bridgpal", :favorite_numbers=>[12, 14, 85]},
 "min"=>{:twitter=>"minzra", :favorite_numbers=>[1, 12, 34]}}
[33] pry(main)> users["Erik"]
=> {:twitter=>"sferik", :favorite_numbers=>[8, 12, 24, 7]}
[34] pry(main)> users["Erik"]["favorite_numbers"]
=> nil
[35] pry(main)> users["Erik"][":favorite_numbers"]
=> nil
[36] pry(main)> users["Erik"][:favorite_numbers]
=> [8, 12, 24, 7]
[37] pry(main)> users["Erik"][:favorite_numbers].min
=> 7
[38] pry(main)> users["Anil"]
=> {:twitter=>"bridgpal", :favorite_numbers=>[12, 14, 85]}
[39] pry(main)> users["Anil"][:favorite_numbers]
=> [12, 14, 85]
[40] pry(main)> users["Anil"][:favorite_numbers].methods.sort

[41] pry(main)> users["Anil"][:favorite_numbers].select do |n|
[41] pry(main)*   false
[41] pry(main)* end
=> []
[42] pry(main)> users["Anil"][:favorite_numbers].select do |n|
[42] pry(main)*   true
[42] pry(main)* end
=> [12, 14, 85]
[43] pry(main)> users["Anil"][:favorite_numbers].select do |n|
[43] pry(main)*   n.even?
[43] pry(main)* end
=> [12, 14]
[44] pry(main)> users["Anil"][:favorite_numbers].select { |n| n.even? }
=> [12, 14]
[45] pry(main)> users["Jonathan"][:favorite_numbers]
[46] pry(main)> users["Jonathan"][:favorite_numbers] & users["Anil"][:favorite_numbers] & users["Erik"][:favorite_numbers]
=> [12]
[47] pry(main)> users.values.map
=> #<Enumerator: ...>
[48] pry(main)> users.values.map { |u| u[:favorite_numbers] }. inject &:&
=> [12]
[49] pry(main)> users.values.map { |u| u[:favorite_numbers]
[49] pry(main)*   q
[49] pry(main)*   end
SyntaxError: unexpected `end', expecting '}'
  end
  ^~~
[49] pry(main)> users.values.map { |u| u[:favorite_numbers] }
=> [[12, 42, 75], [8, 12, 24, 7], [12, 14, 85], [1, 12, 34]]
[50] pry(main)> users.values.map { |u| u[:favorite_numbers] }.flatten
=> [12, 42, 75, 8, 12, 24, 7, 12, 14, 85, 1, 12, 34]
[51] pry(main)> users.values.map { |u| u[:favorite_numbers] }.flatten.sort
=> [1, 7, 8, 12, 12, 12, 12, 14, 24, 34, 42, 75, 85]

[53] pry(main)> users.values.map { |u| u[:favorite_numbers] }.flatten.sort.uniq
=> [1, 7, 8, 12, 14, 24, 34, 42, 75, 85]
