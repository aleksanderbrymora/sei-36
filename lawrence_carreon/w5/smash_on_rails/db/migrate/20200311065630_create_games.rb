class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.text :name
      t.date :release_date
      t.text :patch_version
      t.text :image
    end
  end
end
