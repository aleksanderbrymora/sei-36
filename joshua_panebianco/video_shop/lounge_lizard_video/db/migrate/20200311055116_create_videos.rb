class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title
      t.date :date
      t.text :director
      t.text :image
    end
  end
end
