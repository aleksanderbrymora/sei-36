class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.text    :item
      t.integer :quantity
      t.date    :order_date
      t.float   :price
      t.integer :customer_id
    end
  end
end
