class AddBrandIdToCars < ActiveRecord::Migration[5.2]
  def change
    add_column :cars, :brand_id, :integer
  end
end
