class Film < ActiveRecord::Base
  belongs_to :director, :optional => true
end
