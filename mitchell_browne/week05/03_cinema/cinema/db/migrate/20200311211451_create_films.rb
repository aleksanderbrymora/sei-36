class CreateFilms < ActiveRecord::Migration[5.2]
  def change
    create_table :films do |t|
      t.text :title
      t.text :year
      t.text :rating
      t.text :image

      t.timestamps
    end
  end
end
