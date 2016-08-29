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
	return n
}

export const getFibonnaci = n => {
	return n
}
