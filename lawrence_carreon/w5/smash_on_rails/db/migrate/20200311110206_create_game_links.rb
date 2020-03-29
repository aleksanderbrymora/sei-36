class CreateGameLinks < ActiveRecord::Migration[5.2]
  def change
    create_table :game_links do |t|
      t.integer :character_id
      t.integer :game_id
    end
  end
end
