[15] pry(main)> # Symbols
[16] pry(main)> :name
=> :name
[17] pry(main)> :name.object_id
=> 71068
[18] pry(main)> :name.object_id
=> 71068
[19] pry(main)> groucho = {
[19] pry(main)*   :name => "Groucho",
[19] pry(main)*   :vice => "cigars",
[19] pry(main)*   :instrument => "guitar"
[19] pry(main)* }
=> {:name=>"Groucho", :vice=>"cigars", :instrument=>"guitar"}
[20] pry(main)> groucho(:name)
/Users/zara/.rvm/gems/ruby-2.7.0/gems/pry-0.12.2/lib/pry/exceptions.rb:28: warning: $SAFE will become a normal global variable in Ruby 3.0
NoMethodError: undefined method `groucho' for main:Object
from (pry):24:in `__pry__'
[21] pry(main)> groucho[:name]
=> "Groucho"
[22] pry(main)> groucho.keys
=> [:name, :vice, :instrument]
[23] pry(main)>
