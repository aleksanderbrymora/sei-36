class Car < ActiveRecord::Base
  belongs_to :brand, :optional => true
end
