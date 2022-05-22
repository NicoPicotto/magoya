import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 20,
		paddingHorizontal: 20,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	inputContainer: {
		width: '100%',
		padding: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	button: {
		width: '45%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#46563a',
		padding: 10,
		borderRadius: 10,
		elevation: 2,
	},
	textButton: {
		color: 'gainsboro',
		fontSize: 15,
		fontFamily: 'Inter_700Bold',
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	listContainer: {
		width: '90%',
		marginVertical: 10,
	},
	touchableContainer: {
		flexDirection: 'row',
		padding: 10,
		marginVertical: 5,
		backgroundColor: 'white',
		justifyContent: 'space-between',
		borderRadius: 10,
		elevation: 2,
	},
	itemsAgregados: {
		fontSize: 15,
		fontFamily: 'Inter_700Bold',
	},
	gasto: {
		fontSize: 16,
		textAlign: 'right',
		fontFamily: 'Inter_400Regular',
	},
	vegan: {
		fontSize: 10,
		backgroundColor: '#46563a',
		color: 'white',
		textAlign: 'center',
		width: '25%',
		paddingVertical: 3,
		paddingHorizontal: 5,
		fontFamily: 'Inter_400Regular',
	},
	textInput: {
		padding: 5,
		fontSize: 16,
		width: '60%',
		borderBottomColor: 'gainsboro',
		borderBottomWidth: 1,
		fontFamily: 'Inter_400Regular',
	},
	settingsContainer: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomColor: '#46563a',
		borderBottomWidth: 1,
		marginBottom: 10,
		paddingHorizontal: 10,
		paddingBottom: 20,
	},
	settingsPrice: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 5,
		width: '50%',
	},
	priceInput: {
		padding: 5,
		fontSize: 15,
		borderBottomColor: 'gainsboro',
		borderBottomWidth: 1,
		width: '100%',
		fontFamily: 'Inter_400Regular',
	},
	veganQuestion: {
		fontFamily: 'Inter_400Regular',
		fontSize: 14,
	},
	settingsVegan: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		width: '35%',
	},
	switch:  {
		padding: 0,
		margin: 0,	
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	totalPriceContainer: {
		marginVertical: 20,
		padding: 10,
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'gainsboro',
		elevation: 2,
	},
	totalPrice: {
		fontSize: 15,
		textAlign: 'center',
		fontFamily: 'Inter_700Bold',
	},
});
