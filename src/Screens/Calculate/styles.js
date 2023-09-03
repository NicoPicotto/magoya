import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	calculateWrapper: {
		marginVertical: 60,
		marginHorizontal: 20,
		padding: 10,
		justifyContent: 'center',
		flex: 1,
	},
	personContainer: {
		gap: 20,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	personWrapper: {
		width: '50%',
		alignContent: 'center',
		backgroundColor: '#46563a',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 2,
		height: 200,
		padding: 10,
		borderRadius: 10,
		justifyContent: 'space-between',
	},
	personWrapperCarne: {
		width: '50%',
		alignContent: 'center',
		backgroundColor: '#8C0700',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 2,
		height: 200,
		padding: 10,
		borderRadius: 10,
		justifyContent: 'space-between',
	},
	totalResultContainer: {
		marginTop: 10,
		gap: 20,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	resultWrapper: {
		width: '50%',
		alignContent: 'center',
		borderColor: 'gray',
		borderRadius: 10,
		borderWidth: 1,
		justifyContent: 'space-between',
	},
	counter: {
		textAlign: 'center',
		fontSize: 35,
		color: 'white',
		fontFamily: 'Inter-Bold',
	},
	totalPriceContainer: {
		flexDirection: 'row',
		width: '100%',
		gap: 10,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 2,
	},
	totalPrice: {
		fontSize: 14,
		textAlign: 'center',
		color: 'white',
		fontFamily: 'Inter-Bold',
	},
	cuantos: {
		fontSize: 18,
		textAlign: 'center',
		width: '100%',
		paddingBottom: 15,
		fontFamily: 'Inter-Regular',
	},
	boxTitle: {
		fontSize: 14,
		textAlign: 'center',
		backgroundColor: '#f5f5f5',
		padding: 5,
		borderRadius: 5,
		overflow: 'hidden',
		alignItems: 'center',
		elevation: 3,
		fontFamily: 'Inter-Bold',
	},
	buttonContainer: {
		margin: 20,
		padding: 20,
		gap: 20,
		borderRadius: 10,
		backgroundColor: '#46563a',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2,
	},
	buttonWrapper: {
		flexDirection: 'row',
		width: '100%',
		gap: 20,
		justifyContent: 'space-evenly',
	},
	bottomButton: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#f5f5f5',
		padding: 10,
		width: '50%',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2,
	},
	bottomButtonOutline: {
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: '#f5f5f5',
		borderWidth: 1,
		padding: 10,
		width: '50%',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2,
	},
	priceButtonOutline: {
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: '#f5f5f5',
		borderWidth: 1,
		padding: 10,
		width: '45%',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2,
	},
	textButton: {
		color: '#46563a',
		fontSize: 13,
		fontFamily: 'Inter-Bold',
	},
	textButtonOutline: {
		color: 'white',
		fontSize: 13,
		fontFamily: 'Inter-Bold',
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
		fontFamily: 'Inter-Bold',
	},
	buttonCalculateContainer: {
		flexDirection: 'row',
		gap: 5,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	cuantoPagan: {
		textAlign: 'center',
		fontSize: 18,
		fontFamily: 'Inter-Regular',
	},
	cuantoPrecio: {
		textAlign: 'center',
		fontSize: 18,
		fontFamily: 'Inter-Bold',
	},
	resultContainer: {
		marginVertical: 10,
	},
});
