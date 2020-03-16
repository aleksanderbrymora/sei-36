class CreateCars < ActiveRecord::Migration[5.2]
  def change
    create_table :cars do |t|
      t.text :name
      t.text :style
      t.text :power
      t.text :image

      t.timestamps # created_at, updated_at
    end
  end
end
