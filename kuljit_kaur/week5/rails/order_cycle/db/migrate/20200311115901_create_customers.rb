class CreateCustomers < ActiveRecord::Migration[5.2]
  def change
    create_table :customers do |t|
      t.text :name
      t.text :country
      t.text :city
      t.text :postal_code
      t.text :street
      t.text :image
      end
  end
end
