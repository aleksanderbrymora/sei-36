class Character < ActiveRecord::Base
    has_many :specials
    has_many :game_links
    has_many :games, :through => :game_links
end