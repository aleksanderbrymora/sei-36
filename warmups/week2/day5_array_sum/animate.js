gsap
	.timeline({
		repeat: -1,
		defaults: {
			duration: 1.5,
		},
	})
	.to('.animate', {
		x: -100,
	})
	.to('.animate', {
		x: 0,
	});
