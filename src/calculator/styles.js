export default {
	input: {
		border: '2px solid #3df',
	    color: '#333',
		padding: '5px 10px',
	},

	inputError: {
		border: '2px solid #c00',
	    color: '#c00',
	    padding: '5px 10px',
	},

	inputLabel: {
		marginRight: '10px',
	},

	errorText: {
		color: '#c00',
		fontWeight: 'bold',
	},

	resultContainer: {
		display: 'flex',
		margin: '10px'
	},

	resultLabel: {
		margin: '0 20px 0 0',
		width: '100px',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		height: '50px',
		lineHeight: '50px',
	},

	sequence: {
		margin: '0',
		whiteSpace: 'nowrap',
		padding: '0 20px',
		backgroundColor: '#3df',
		width: '90%',
		color: '#fff',
		overflowX: 'scroll',
		flex: 1,
		height: '50px',
		lineHeight: '50px',
	}
}