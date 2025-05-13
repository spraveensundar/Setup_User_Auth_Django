import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { email, required } from 'redux-form-validators';
import { get } from "lodash";

import { Button, Input } from '../../../components/Field';

import useSetup from '../../../hooks/useAuth';

import styles from '../styles';

const SingUp = ({ handleSubmit, reset }) => {
    const { crud, submitRegister, resetData } = useSetup();
    const { fetching } = get(crud, 'register', {});

    const submit = (v) => {
        submitRegister(v);
        reset();
    }

    useEffect(() => {
        return () => {
            resetData('register');
        }
    }, [])


    return (
        <View style={styles.container}>
            <Field
                name="username"
                label="User"
                component={Input}
                validate={[required()]}
            />
            <Field
                name="email"
                label="Email"
                component={Input}
                validate={[required(), email()]}
            />
            <Field
                name="first_name"
                label="Email"
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
                label="Last Password"
                component={Input}
                validate={[required()]}
            />
            <View style={styles.buttonContainer}>
                <Button
                    text="Create"
                    fetching={fetching}
                    onPress={handleSubmit(submit)}
                />
            </View>
        </View>
    )
}


export default reduxForm({
    form: 'register',
    enableReinitialize: true,
})(SingUp);
