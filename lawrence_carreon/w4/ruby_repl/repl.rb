require "readline"  # allows the repl to cycle through previous inputs and have a prompt symbol display while the file is running
require "coderay" # making our outputs look pretty
require "pp"

session_bind = binding # create a variable to store the information of the current running session

while input = Readline.readline("> ", true)
    begin
        result = session_bind.eval input
    rescue StandardError => error
        puts "\e[31m #{error.class}:\e[0m #{error.message}"
    else
        puts CodeRay.encode(result.pretty_inspect, :ruby, :terminal)
    end
end