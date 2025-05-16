import React from 'react';
import { View, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';

const GuestLayout = ({ children }) => {
    const insets = useSafeAreaInsets();

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={[{ paddingTop: insets.top, flexGrow: 1 }]}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
        >
            <StatusBar
                barStyle="dark-content"
                backgroundColor={"transparent"}
                translucent={true}
            />
            <View style={styles.contentContainer}>
                {children}
            </View>
        </KeyboardAwareScrollView>
    );
};

export default GuestLayout;
