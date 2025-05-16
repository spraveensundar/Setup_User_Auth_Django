import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { required } from 'redux-form-validators';
import { get } from "lodash";

import { Text } from '../../../components/Typography';
import { Button, Input } from '../../../components/Field';

import GuestLayout from '../../../layout';
import useSetup from '../../../hooks/useAuth';
import { navigate } from '../../../helpers/navigation';

import styles from '../styles';

const Login = ({ handleSubmit, reset, invalid }) => {
    const { crud, submitLogin, resetData } = useSetup();
    const { fetching, status, data } = get(crud, 'login', {});

    const submit = (v) => {
        submitLogin(v);
        reset();
    }

    useEffect(() => {
        if (status === 200 && data?.token) {
            navigate('Home', { username: data.username });
        }
    }, [status, data]);

    useEffect(() => {
        return () => {
            resetData('login');
        };
    }, []);

    return (
        <GuestLayout>
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
                        text="Continue"
                        fetching={fetching}
                        disabled={invalid}
                        onPress={handleSubmit(submit)}
                    />
                </View>
                <Text tag="h4">Don't have an account yet? <Text tag='h5' fontType="bold" onPress={() => navigate("SingUp")}>Create Account</Text></Text>
            </View>
        </GuestLayout>
    )
}


export default reduxForm({
    form: 'login',
    enableReinitialize: true,
})(Login);