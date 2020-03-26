require_relative '../bank'

describe Bank do
  describe ".new" do
    it 'creates a new bank object' do
      bank = Bank.new
      expect(bank).to_not be nil
    end
    
    it 'assigns the bank name' do
      bank = Bank.new 'TDD Bank'
      expect(bank.name).to eq 'TDD Bank'
    end
  end
end
