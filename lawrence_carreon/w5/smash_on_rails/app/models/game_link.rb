class GameLink < ActiveRecord::Base
    belongs_to :character, optional: true
    belongs_to :game, optional: true
end