require "readline"  # allows the repl to cycle through previous inputs and have a prompt symbol display while the file is running
require "coderay" # making our outputs look pretty
require "pp" # formats outputs in a more presentable manner - required to apply pretty_inspect method on an object

session_bind = binding # create a variable to store the information of the current running session

while input = Readline.readline("> ", true) # so the file doesn't crash on an invalid input
    # a basic error handling structure
    begin
        result = session_bind.eval input
    rescue StandardError => error
        puts "\e[31m #{error.class}:\e[0m #{error.message}" # using some unicode to color a certain part of the text, otherwise it is just a regular string utlilsiing stored variables
    else
        case input
        when "history"
            puts Readline::HISTORY.to_a
            next
        # allows the user to read all typed inputs for the current session
        else puts CodeRay.encode(result.pretty_inspect, :ruby, :terminal)
    end
end