class Special < ActiveRecord::Base
    belongs_to :character, optional: true
end