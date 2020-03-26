class AddDirectorIdToFilms < ActiveRecord::Migration[5.2]
  def change
    add_column :films, :director_id, :integer
  end
end
