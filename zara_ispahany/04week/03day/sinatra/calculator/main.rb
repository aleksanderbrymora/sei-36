require 'sinatra'
require 'sinatra/reloader'

# Convention over configuration

get '/' do
  erb :home #embedded ruby
end

get '/faq' do
  erb :faq
end

get '/result' do
  @x = params[:x].to_f
  @y = params[:y].to_f

  # Instance variable
  @result = case params[:operator]
  when '+' then result = @x + @y
  when '-' then result = @x - @y
  when '*' then result = @x * @y
  when '/' then result = @x / @y
  end

  erb :result
end
