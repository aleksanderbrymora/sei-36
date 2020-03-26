class CreateDirectors < ActiveRecord::Migration[5.2]
  def change
    create_table :directors do |t|
      t.text :name
      t.text :nationality
      t.text :born
      t.text :died
      t.text :image
    end
  end
end
