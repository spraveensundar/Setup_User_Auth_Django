import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { required } from 'redux-form-validators';
import { get } from "lodash";

import { Button, Input } from '../../../components/Field';

import useSetup from '../../../hooks/useAuth';
import { navigate } from '../../../helpers/navigation';

import styles from '../styles';
const Login = ({ handleSubmit, reset }) => {
    const { crud, submitLogin, resetData } = useSetup();
    const { fetching, status } = get(crud, 'login', {});

    const submit = (v) => {
        submitLogin(v);
        reset();
    }

    useEffect(() => {
        return () => {
            resetData('login');
        }
    }, [])

    useEffect(() => {
        if (status !== 200) {
            console.log("Invalid Credentials")
        } else {
            navigate("Home")
        }
    })

    return (
        <View style={styles.container}>
            <Field
                name="username"
                component={Input}
                validate={[required()]}
                label="User"
            />
            <Field
                name="password"
                label="Password"
                component={Input}
                validate={required()}
            />
            <View style={styles.buttonContainer}>
                <Button
                    text="Login"
                    fetching={fetching}
                    onPress={handleSubmit(submit)}
                />
            </View>
            <Text>Don't have an account yet? <Text onPress={() => navigate("SingUp")}>Create Account</Text></Text>
        </View>
    )
}


export default reduxForm({
    form: 'login',
    enableReinitialize: true,
})(Login);
