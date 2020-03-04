require "sinatra"
require "sinatra/reloader"

get "/" do
    @question, @yes_route, @no_route = "Do you have a test for that?", "/pass", "/write_test"
    erb :question
end

get "/pass" do
    @question, @yes_route, @no_route = "Does the test pass?", "/refactor", "/write_code"
    erb :question
end

get "/refactor" do
    @question, @yes_route, @no_route = "Need to refactor?", "/do_refactor", "/new_feature"
    erb :question
end

get "/write_code" do
    @command, @complete_route = "Write just enough code for the test to pass.", "/pass"
    erb :instruction
end

get "/write_test" do
    @command, @complete_route = "Write a test.", "/pass"
    erb :instruction
end

get "/do_refactor" do
    @command, @complete_route = "Refactor the code.", "/pass"
    erb :instruction
end

get "/new_feature" do
    @command, @complete_route = "Select a new feature to implement", "/"
    erb :instruction
end