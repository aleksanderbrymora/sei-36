Customer.destroy_all

Customer.create(:name => 'Indra K. Nooyi', :country => 'America', :city => 'Greenwich', :postal_code => '2065', :street=> 'American Street', :image => 'https://www.thefamouspeople.com/profiles/images/indra-nooyi-5.jpg')

Customer.create(:name => 'Hewlett-Packard', :country => 'America', :city => 'California', :postal_code => '90255', :street=> 'Palo Alto', :image => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8Flncn1FvRr4zPkOak_DCuhrVpvPwzloijv8xmRRurf9S1EsL')

puts "#{Customer.count} Customers created."

Order.destroy_all

Order.create(:item => 'Bottles', :quantity => 20000, :order_date => '', :price => '40000', :customer_id=> 1)
Order.create(:item => 'mouse', :quantity => 2000, :order_date => '', :price => '20000', :customer_id=> 2)

puts "#{Order.count} Orders created."
