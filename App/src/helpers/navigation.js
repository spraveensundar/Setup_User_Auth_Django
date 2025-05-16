import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export function goBack() {
    if (navigationRef.isReady()) {
        navigationRef.current.goBack()
    }
}

export function navigate(name, params) {
    if (navigationRef.isReady()) {
        navigationRef.current?.navigate(name, params);
    }
}
