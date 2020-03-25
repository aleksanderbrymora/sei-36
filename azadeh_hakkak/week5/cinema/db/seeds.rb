# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Director.destroy_all

Director.create(:name => 'Majid Majidi', :nationality => 'Iranian', :born => '17th April 1959', :image => 'https://media.mehrnews.com/d/2019/07/12/3/3177464.jpg')
Director.create(:name => 'Asghar Farhadi', :nationality => 'Iranian', :born => '7th May 1972', :image => 'https://www.interviewmagazine.com/wp-content/uploads/2017/01/img-asghar-farhadi_132526297742.jpg')
Director.create(:name => 'Abbas Kiarostami', :nationality => 'Iranian', :born => '22nd June 1940', :died => '4th July 2016', :image => 'https://maryamzandi.files.wordpress.com/2015/05/abbas-kiarostami.jpg')

puts "#{ Director.count } directors created."
