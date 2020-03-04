require "sinatra"
require "sinatra/reloader"

get "/" do
    @question = "Do you have a test for that?"
    @yes_route = "/pass"
    @no_route = "/write_test"
    erb :question
end

get "/pass" do
    @question = "Does the test pass?"
    @yes_route = "/refactor"
    @no_route = "/write_code"
    erb :question
end

get "/refactor" do
    @question = "Need to refactor?"
    @yes_route = "/do_refactor"
    @no_route = "/new_feature"
    erb :question
end

get "/write_code" do
    @command = "Write just enough code for the test to pass."
    @complete_route = "/pass"
    erb :instruction
end

get "/write_test" do
    @command = "Write a test."
    @complete_route = "/pass"
    erb :instruction
end

get "/do_refactor" do
    @command = "Refactor the code."
    @complete_route = "/pass"
    erb :instruction
end

get "/new_feature" do
    @command = "Select a new feature to implement"
    @complete_route = "/"
    erb :instruction
end