class Robot
	def initialize
		@name = generate_name
		@things_done = 0
		@created = Time.now
		@last_boot = Time.now
	end

	def generate_name
		letters = ('AA'..'ZZ').to_a.sample
		numbers = ('000'..'999').to_a.sample
		letters + numbers
	end

	def name
		@things_done += 1
		@name
	end

	def reset
		@things_done += 1
		@last_boot = Time.now
		@name = generate_name
	end

	def things_done
		@things_done
	end

	def timers
		@things_done += 1
		created_difference = (Time.now - @created).to_i
		last_boot_difference = (Time.now - @last_boot).to_i
		"#{created_difference} seconds since creation, #{last_boot_difference} seconds since last boot"
	end
end

robot1 = Robot.new
puts robot1.name
sleep 2
puts robot1.timers
robot1.reset
puts robot1.name
puts robot1.things_done
sleep 2
puts robot1.timers
puts robot1.things_done

robot2 = Robot.new
puts robot2.name