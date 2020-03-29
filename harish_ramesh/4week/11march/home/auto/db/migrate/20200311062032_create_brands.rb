class CreateBrands < ActiveRecord::Migration[5.2]
  def change
    create_table :brands do |t|
      t.text :name
      t.text :nation
      t.text :established
      t.text :image
    end
  end
end
