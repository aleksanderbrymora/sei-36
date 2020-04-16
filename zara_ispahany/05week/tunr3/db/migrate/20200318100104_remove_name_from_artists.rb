class RemoveNameFromArtists < ActiveRecord::Migration[5.2]
  def change
    remove_column :artists, :name, :text
  end
end
