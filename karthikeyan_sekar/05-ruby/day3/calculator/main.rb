require 'sinatra'
require 'sinatra/reloader'

# convention over configuration

get '/' do
  erb :home # embedded ruby
end

get '/faq' do
  erb :faq
end

get '/result' do
  @x = params[:x].to_f
  @y = params[:y].to_f

  @result = case params[:operator] #the instance variable
  when '+' then @x + @y
  when '-' then @x - @y
  when '*' then @x * @y
  when '/' then @x / @y
  end
  #"the result is #{result}"
    erb :result
end
