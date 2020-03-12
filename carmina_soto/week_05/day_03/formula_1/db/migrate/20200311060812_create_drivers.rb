class CreateDrivers < ActiveRecord::Migration[5.2]
  def change
    create_table :drivers do |t|
      t.text :name
      t.integer :team_id
      t.text :country
      t.integer :podiums
      t.text :image
    end
  end
end
