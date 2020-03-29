require "sinatra"
require "sinatra/reloader"
#convention over configuration


get '/' do
  erb :home
end

get '/faq' do
  erb :faq
end

get '/result' do
  @x = params[:x].to_f
  @y = params[:y].to_f
  @result =case params[:operator]
  when '+' then result = @x + @y
  when '-' then result = @x - @y
  when '*' then result = @x * @y
  when '/' then result = @x / @y
  end
  erb :result
end
