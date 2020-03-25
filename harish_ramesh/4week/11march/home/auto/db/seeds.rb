# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Brand.destroy_all

Brand.create(:name => 'Audi', :nation => 'German', :established => '1909',  :image => 'https://i.pinimg.com/originals/cc/df/44/ccdf44a755c070d2d13a96b8fa190bf9.jpg')
Brand.create(:name => 'BMW', :nation => 'Germann', :established => '1916',  :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1200px-BMW.svg.png')
Brand.create(:name => 'Chrysler', :nation => 'American', :established => '1925', :image => 'https://www.carlogos.org/logo/Chrysler-logo-2010-1920x1080.png')
Brand.create(:name => 'Mercedes Benz', :nation => 'German', :established => '1926', :image => 'https://static-news.moneycontrol.com/static-mcnews/2018/03/Mercedes-Benz-770x433.jpg')


Car.destroy_all

Car.create(:name => 'Q8',:style => 'SUV',:power => '335',:image => 'https://cdn.jdpower.com/19%20audi%20q8%20front%20beauty2%20%20sessions.jpg')
Car.create(:name => 'A7',:style => 'sportback',:power => '241',:image => 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F41854118%2F960x0.jpg%3Ffit%3Dscale')
Car.create(:name => '300c',:style => 'sedan',:power => '292',:image => 'https://www.ccarprice.com/products/Chrysler-300C-2020.jpg')
Car.create(:name => 'SLS',:style => 'coupe',:power => '590',:image =>'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Mercedes-Benz_SLS_AMG_%28C_197%29_%E2%80%93_Frontansicht_ge%C3%B6ffnet%2C_10._August_2011%2C_D%C3%BCsseldorf.jpg/1200px-Mercedes-Benz_SLS_AMG_%28C_197%29_%E2%80%93_Frontansicht_ge%C3%B6ffnet%2C_10._August_2011%2C_D%C3%BCsseldorf.jpg')
