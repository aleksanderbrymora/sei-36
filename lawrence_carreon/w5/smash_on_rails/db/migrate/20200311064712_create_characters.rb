class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.text :name
      t.text :franchise
      t.text :stock_symbol
      t.text :availability
      t.text :image
    end
  end
end
