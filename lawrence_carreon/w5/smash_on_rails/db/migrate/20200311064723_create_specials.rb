class CreateSpecials < ActiveRecord::Migration[5.2]
  def change
    create_table :specials do |t|
      t.text :name
      t.text :input_direction
      t.text :attack_type
      t.text :damage_dealt
      t.text :preview
    end
  end
end
