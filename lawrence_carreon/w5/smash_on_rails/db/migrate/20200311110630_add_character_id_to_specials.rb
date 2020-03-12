class AddCharacterIdToSpecials < ActiveRecord::Migration[5.2]
  def change
    add_column :specials, :character_id, :integer
  end
end
