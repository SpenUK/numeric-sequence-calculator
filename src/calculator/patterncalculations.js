export const getSequence = n => {
	const sequence = []

	for (let i = 0; i <= n; i++) {
		sequence.push(i)
	}

	return sequence
}

export const getEvens = n => {
	const sequence = []

	for (let i = 0; i <= n; i++) {
		if (i % 2 === 0) {
			sequence.push(i)
		}
	}

	return sequence
}

export const getOdds = n => {
	const sequence = []

	for (let i = 0; i <= n; i++) {
		if (i % 2 !== 0) {
			sequence.push(i)
		}
	}

	return sequence
}

export const getLetters = n => {
	let sequence = []

	for (let i = 0; i <= n; i++) {
		const outputC = (i % 3 === 0)
		const outputE = (i % 5 === 0)
		const outputZ = outputC && outputE

		sequence.push(
			outputZ ? 'Z' : 
			outputC ? 'C' : 
			outputE ? 'E' : i
		)
	}

	return sequence
}

export const getFibonnaci = n => {
	const sequence = [0]

	if (n > 0) {
		sequence[1] = 1
	}

	for (let i = 2; true; i++) {
		const next = sequence[i-2] + sequence[i-1]

		if (next <= n) {
			sequence[i] = next
		} else {
			break	
		}
	}

	return sequence
}
