class Game < ActiveRecord::Base
    has_many :game_links
    has_many :characters, :through => :game_links
end