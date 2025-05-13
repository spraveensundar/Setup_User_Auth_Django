import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Login from '../pages/Guest/Login';
import SingUp from '../pages/Guest/Register';

const useGuestRoutes = () => {
	const Stack = createNativeStackNavigator();
	return (
		<>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="SingUp" component={SingUp} />
		</>
	)
}

export default useGuestRoutes;