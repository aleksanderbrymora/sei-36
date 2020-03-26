# A class similar to hash -- also has key/value pairs
# BUT you have to predefine the keys that are going to be used.
# A strict hash -- you have to predefine the shape.
# ALSO: unlike a hash, an object can have methods (functions inside)

# You can add classes to ruby
# Ruby is a low ceremony language

# Super class / parent class
class Actor
  def award_speech
    "I would like to thank my parents and my agent. We did it baby!"
  end

  def deny_allegations
    "I deny that and I was drunk and I don't remember and he's not my type"
  end
end

class Stooge < Actor # Inheriting
  def terrible?
    true
  end
end

class MarxBrother < Actor
  attr_accessor :name, :instrument, :vice # Macro - writes some code for you - create .name getter and setter

  def initialize(n='', i='', v='making fun of authority') # .new will require 3 parameters unless =''
    @name = n
    @instrument = i
    @vice = v
  end

  def play
    "My name is #{@name} and I play #{@instrument}."
  end

  # # Setter
  # def name=(n)
  #   @name = n
  # end
  #
  # # Getter
  # def name
  #   @name # instance variable
  # end

  # # Setter
  # def instrument=(i)
  #   @instrument = i
  # end
  #
  # # Getter
  # def instrument
  #   @instrument
  # end
  #
  # # Setter
  # def vice=(v)
  #   @vice = v
  # end
  #
  # # Getter
  # def vice
  #   @vice
  # end
end

groucho = MarxBrother.new
groucho.name = ('Groucho Julius Marx')  # Syntactic sugar
groucho.instrument = ('guitar')
groucho.vice = ('cigars')

harpo = MarxBrother.new 'Harpo', 'harp', 'mutism'

require 'pry'
binding.pry
