Driver.destroy_all

Driver.create(:name => 'Lewis Hamilton', :country => 'United Kingdom', :podiums => 151, :image => 'https://www.formula1.com/content/fom-website/en/drivers/lewis-hamilton/_jcr_content/image.img.1920.medium.jpg/1554818913486.jpg')
Driver.create(:name => 'Valterri Bottas', :country => 'Finland', :podiums => 45, :image => 'https://www.formula1.com/content/fom-website/en/drivers/valtteri-bottas/_jcr_content/image.img.1920.medium.jpg/1554818929157.jpg')
Driver.create(:name => 'Sebastian Vettel', :country => 'Germany', :podiums => 120, :image => 'https://www.formula1.com/content/fom-website/en/drivers/sebastian-vettel/_jcr_content/image.img.1920.medium.jpg/1567175200601.jpg')
Driver.create(:name => 'Charles Leclerc', :country => 'Monaco', :podiums => 10, :image => 'https://www.formula1.com/content/fom-website/en/drivers/charles-leclerc/_jcr_content/image.img.1920.medium.jpg/1567179277948.jpg')
Driver.create(:name => 'Max Verstappen', :country => 'Netherlands', :podiums => 31, :image => 'https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image.img.1920.medium.jpg/1554819019533.jpg')
Driver.create(:name => 'Alexander Albon', :country => 'Thailand', :podiums => 0, :image => 'https://www.formula1.com/content/fom-website/en/drivers/alexander-albon/_jcr_content/image.img.1920.medium.jpg/1566295320855.jpg')

puts "#{Driver.count} drivers created."

Team.destroy_all

Team.create(:name => 'Mercedes', :base => 'Brackley, United Kingdom', :chief => 'Toto Wolff', :world_champs => 6, :image => 'https://www.formula1.com/content/dam/fom-website/teams/2020/mercedes.png.transform/6col-retina/image.png')
Team.create(:name => 'Ferrari', :base => 'Maranello, Italy', :chief => 'Mattia Binotto', :world_champs => 16, :image => 'https://www.formula1.com/content/dam/fom-website/teams/2020/ferrari.png.transform/6col-retina/image.png')
Team.create(:name => 'Red Bull', :base => 'Milton Keynes, United Kingdom', :chief => 'Christian Horner', :world_champs => 4, :image => 'https://www.formula1.com/content/dam/fom-website/teams/2020/red-bull-racing.png.transform/6col-retina/image.png')

puts "#{Team.count} teams created."
