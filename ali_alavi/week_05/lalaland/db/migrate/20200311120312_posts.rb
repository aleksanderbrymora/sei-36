class Posts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.text :post
      t.date :timestamp
    end  
  end
end
