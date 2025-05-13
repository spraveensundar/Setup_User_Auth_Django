import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native';

import FormGroup from '../FormGroup';
import { colors } from '../../../helpers/variables';

import styles from './styles';

const Input = (props) => {
    const {
        input: { value, onBlur, onChange },
        placeholder,
        disabled = false,
        meta,
        label,
        inputMode,
        secureTextEntry
    } = props;

    const [focus, setFocus] = useState(false);
    const [values, setValues] = useState(value || '');

    const handleOnChange = (e) => {
        onChange(e);
        setValues(e);
    }

    const onBlurHandler = (e) => {
        onBlur(e);
        setTimeout(() => setFocus(false));
    }

    useEffect(() => {
        onChange(value);
        setValues(value);
    }, [value, focus])

    return (
        <FormGroup
            meta={meta}
            label={label}
            focus={focus}
            disabled={disabled}>
            <TextInput
                value={values}
                onChange={onChange}
                autoCorrect={false}
                editable={!disabled}
                onBlur={onBlurHandler}
                placeholder={placeholder}
                onChangeText={handleOnChange}
                style={styles.inputContainer}
                placeholderTextColor={colors.dawn}
                onFocus={() => setTimeout(() => setFocus(true))}
                secureTextEntry={secureTextEntry}
                underlineColorAndroid="transparent"
                keyboardType={inputMode}
            />
        </FormGroup>
    )
}

export default Input;