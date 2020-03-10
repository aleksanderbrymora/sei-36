echo welcome to atom
export PS1="\[\e[33m\]\w\[\e[m\] $ "
alias l="ls -la"
test -e "${HOME}/.iterm2_shell_integration.bash" && source "${HOME}/.iterm2_shell_integration.bash"
[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*
export RUBYOPT=-W:no-deprecated
