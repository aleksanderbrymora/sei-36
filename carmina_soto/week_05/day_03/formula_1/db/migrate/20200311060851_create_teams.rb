class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.text :name
      t.text :base
      t.text :chief
      t.integer :world_champs
      t.text :image
    end
  end
end
