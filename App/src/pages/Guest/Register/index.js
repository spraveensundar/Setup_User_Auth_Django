import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { confirmation, email, required } from 'redux-form-validators';
import { get } from "lodash";

import { Text } from '../../../components/Typography';
import { Button, Input } from '../../../components/Field';

import GuestLayout from '../../../layout';
import useSetup from '../../../hooks/useAuth';
import { navigate } from '../../../helpers/navigation';

import styles from '../styles';

const SingUp = ({ handleSubmit, reset, invalid }) => {
    const { crud, submitRegister, resetData } = useSetup();
    const { fetching, status, data } = get(crud, 'register', {});

    const submit = (values) => {
        submitRegister(values);
        reset();
    };

    useEffect(() => {
        return () => {
            resetData('register');
        };
    }, []);

    useEffect(() => {
        if (status === 200 && data?.token) {
            navigate('Login');
        }
    }, [status, data]);

    return (
        <GuestLayout>
            <View style={[styles.container, { flexGrow: 1 }]}>
                <Field
                    name="username"
                    label="Username"
                    component={Input}
                    validate={[required()]}
                />
                <Field
                    name="email"
                    label="Email address"
                    component={Input}
                    validate={[required(), email()]}
                />
                <Field
                    name="first_name"
                    label="First Name"
                    component={Input}
                    validate={[required()]}
                />
                <Field
                    name="last_name"
                    label="Last Name"
                    component={Input}
                    validate={[required()]}
                />
                <Field
                    name="password"
                    label="Enter a new password"
                    component={Input}
                    validate={[required()]}
                    secureTextEntry={true}
                />
                <Field
                    name="passwordRepeat"
                    label="Confirm new password"
                    component={Input}
                    secureTextEntry={true}
                    validate={[required(), confirmation({ field: "password", message: `Doesn't match password` })]}
                />

                <View style={styles.buttonContainer}>
                    <Button
                        text="Create account"
                        fetching={fetching}
                        disabled={invalid}
                        onPress={handleSubmit(submit)}
                    />
                </View>

                <Text tag="h4">
                    Already have an account?{' '}
                    <Text tag='h5' fontType="bold" onPress={() => navigate("Login")}>
                        Log in
                    </Text>
                </Text>
            </View>
        </GuestLayout>
    );
};

export default reduxForm({
    form: 'register',
    enableReinitialize: true,
})(SingUp);