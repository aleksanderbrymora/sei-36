[1] pry(main)> # Arrays
[2] pry(main)> # Array literal
[3] pry(main)> bros = []
=> []
[4] pry(main)> bros = [ 'groucho', 'harpo', 'chico']
=> ["groucho", "harpo", "chico"]
[5] pry(main)> bros.length
=> 3
[6] pry(main)> bros.size
=> 3
[7] pry(main)> bros.count
=> 3
[8] pry(main)> "Groucho Harpo Chico".split ' '
=> ["Groucho", "Harpo", "Chico"]
[9] pry(main)> bros = %w( Grouch Harpo Chico  )
=> ["Grouch", "Harpo", "Chico"]
[10] pry(main)> bros = %w Grouch Harpo Chico
SyntaxError: (eval):2: unterminated list meets end of file
bros = %w Grouch Harpo Chico
                             ^
[10] pry(main)> bros = %w[ Grouch Harpo Chico ]
=> ["Grouch", "Harpo", "Chico"]
[11] pry(main)> # Matching characters will work
[12] pry(main)> bros[0]
=> "Grouch"
[13] pry(main)> bros[1]
=> "Harpo"
[14] pry(main)> bros[2]
=> "Chico"
[15] pry(main)> bros[5]
=> nil
[16] pry(main)> bros
=> ["Grouch", "Harpo", "Chico"]
[17] pry(main)> bros.first
=> "Grouch"
[18] pry(main)> bros.second
/Users/zara/.rvm/gems/ruby-2.7.0/gems/pry-0.12.2/lib/pry/exceptions.rb:28: warning: $SAFE will become a normal global variable in Ruby 3.0
NoMethodError: undefined method `second' for ["Grouch", "Harpo", "Chico"]:Array
Did you mean?  send
from (pry):18:in `__pry__'
[19] pry(main)> bros.last
=> "Chico"
[20] pry(main)> bros[-1]
=> "Chico"
[21] pry(main)> bros[-2]
=> "Harpo"
[22] pry(main)> bros[-3]
=> "Grouch"
[23] pry(main)> bros[-4]
=> nil
[24] pry(main)> range = 1..20
=> 1..20
[25] pry(main)> range.class
=> Range
[26] pry(main)> [].class
=> Array
[27] pry(main)> array = (1..20).to_a
=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
[28] pry(main)> array
=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
[29] pry(main)> # Introspection
[30] pry(main)> array.methods
=> [:to_h,

[31] pry(main)> # list of methods that you can call on an array
[32] pry(main)> array
=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
[33] pry(main)> array[3]
=> 4
[34] pry(main)> array[3..5]
=> [4, 5, 6]
[35] pry(main)> array[3, 5]
=> [4, 5, 6, 7, 8]
[36] pry(main)> # start at index 3 and give me the next 5
[37] pry(main)> array[4] = 'goldfish'
=> "goldfish"
[38] pry(main)> array
=> [1,
 2,
 3,
 4,
 "goldfish",
 6,
 7,
 8,
 9,
 10,
 11,
 12,
 13,
 14,
 15,
 16,
 17,
 18,
 19,
 20]
[39] pry(main)> array.at 0
=> 1
[40] pry(main)> array.take 5
=> [1, 2, 3, 4, "goldfish"]
[41] pry(main)> array[0..4]
=> [1, 2, 3, 4, "goldfish"]
[42] pry(main)> array.drop 5
=> [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
[43] pry(main)> array
=> [1,
 2,
 3,
 4,
 "goldfish",
 6,
 7,
 8,
 9,
 10,
 11,
 12,
 13,
 14,
 15,
 16,
 17,
 18,
 19,
 20]
[44] pry(main)> array.fetch 0
=> 1
[45] pry(main)> array[75]
=> nil
[46] pry(main)> array.fetch 75
/Users/zara/.rvm/gems/ruby-2.7.0/gems/pry-0.12.2/lib/pry/exceptions.rb:28: warning: $SAFE will become a normal global variable in Ruby 3.0
IndexError: index 75 outside of array bounds: -20...20
from (pry):46:in `fetch'
[47] pry(main)> # fetch will crash the program if u need that
[48] pry(main)> [1, 2] + [3, 4]
=> [1, 2, 3, 4]
[49] pry(main)> [1, 2, 3] - [2]
=> [1, 3]
[50] pry(main)> [1, 2, 3] * 10
=> [1,
 2,
 3,
 1,
 2,
 3,
 1,
 2,
 3,
 1,
 2,
 3,
 1,
 2,
 3,
 1,
 2,
 3,
 1,
 2,
 3,
 1,
 2,
 3,
 1,
 2,
 3,
 1,
 2,
 3]
[51] pry(main)> bros
=> ["Grouch", "Harpo", "Chico"]
[52] pry(main)> bros.push 'gummo'
=> ["Grouch", "Harpo", "Chico", "gummo"]
[53] pry(main)> bros
=> ["Grouch", "Harpo", "Chico", "gummo"]
[54] pry(main)> bros << 'Zeppo'
=> ["Grouch", "Harpo", "Chico", "gummo", "Zeppo"]
[55] pry(main)> # << append
[56] pry(main)> # bros.unshift and bros.shift
[57] pry(main)> bros.insert 1, 'Gummo'
=> ["Grouch", "Gummo", "Harpo", "Chico", "gummo", "Zeppo"]
[58] pry(main)> bros.pop 'Gummo'
/Users/zara/.rvm/gems/ruby-2.7.0/gems/pry-0.12.2/lib/pry/exceptions.rb:28: warning: $SAFE will become a normal global variable in Ruby 3.0
TypeError: no implicit conversion of String into Integer
from (pry):58:in `pop'
[59] pry(main)> bros.delete_at 2
=> "Harpo"
[60] pry(main)> bros.delete 1
=> nil
[61] pry(main)> bros
=> ["Grouch", "Gummo", "Chico", "gummo", "Zeppo"]
[62] pry(main)> bros.shuffle
=> ["Chico", "Zeppo", "gummo", "Gummo", "Grouch"]
[63] pry(main)> bros.shuffle.first
=> "Grouch"
[64] pry(main)> bros.sample
=> "Gummo"
[65] pry(main)> bros.sample
=> "gummo"
[66] pry(main)> bros.sample
=> "Chico"
[67] pry(main)> bros.sample
=> "Grouch"
[68] pry(main)> lotto = [1..40]
=> [1..40]
[69] pry(main)> lotto = [1..40].to_a
=> [1..40]
[70] pry(main)> lotto = (1..40).to_a
=> [1,
 2,
 3,
 4,
 5,
 6,
 7,
 8,
 9,
 10,
 11,
 12,
 13,
 14,
 15,
 16,
 17,
 18,
 19,
 20,
 21,
 22,
 23,
 24,
 25,
 26,
 27,
 28,
 29,
 30,
 31,
 32,
 33,
 34,
 35,
 36,
 37,
 38,
 39,
 40]
[71] pry(main)> lotto.sample 5
=> [27, 6, 26, 39, 5]
[72] pry(main)> lotto.sample 5
=> [17, 1, 20, 38, 6]
[73] pry(main)> lotto.sample 5
=> [13, 28, 11, 27, 6]
[74] pry(main)> lotto.sample 5
=> [15, 27, 24, 7, 22]
[75] pry(main)> bros
=> ["Grouch", "Gummo", "Chico", "gummo", "Zeppo"]
[76] pry(main)> # Non-destructive = bros.shuffle
[77] pry(main)> shuffled_bros = bros.shuffle
=> ["gummo", "Zeppo", "Gummo", "Grouch", "Chico"]
[78] pry(main)> # !(bang) destructive method
[79] pry(main)> bros.shuffle!
=> ["Zeppo", "Chico", "gummo", "Grouch", "Gummo"]
[80] pry(main)> bros.shuffle!
=> ["Zeppo", "Grouch", "Gummo", "gummo", "Chico"]
[81] pry(main)> bros
=> ["Zeppo", "Grouch", "Gummo", "gummo", "Chico"]
[82] pry(main)> bros
=> ["Zeppo", "Grouch", "Gummo", "gummo", "Chico"]
[83] pry(main)> bros.shuffle!
=> ["Gummo", "Chico", "Grouch", "gummo", "Zeppo"]
[84] pry(main)> bros.shuffle!
=> ["Grouch", "gummo", "Chico", "Zeppo", "Gummo"]
[85] pry(main)> bros
=> ["Grouch", "gummo", "Chico", "Zeppo", "Gummo"]
[86] pry(main)> bros.pop
=> "Gummo"
[87] pry(main)> bros
=> ["Grouch", "gummo", "Chico", "Zeppo"]
[88] pry(main)>
