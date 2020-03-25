class Users < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.text :username, unique: true
      t.text :email, :null => false
      t.text :avatar, :null => false, default: ""
      t.text :password
    end  
  end
end
