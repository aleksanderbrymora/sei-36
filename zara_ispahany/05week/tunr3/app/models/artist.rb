class Artist < ApplicationRecord
  has_many :songs
  has_many :genres, :through => :songs
  has_many :albums, :through => :songs
end
