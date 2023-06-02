import { theme } from "../../theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerContainer : {
        backgroundColor: theme.colors.base.gray700,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 173,
        position: 'relative',
    },
    form: {
        position: 'absolute',
        bottom: -54 / 2, /*hackzin para colocar io input no meio da divisão ho header */
        height: 54,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 54,
        width: '75%',
        backgroundColor: theme.colors.base.gray500,
        borderRadius: 5,
        padding: 16,
        color: theme.colors.base.gray100,
        marginRight: 4,
        fontSize: theme.font_size.md,
        borderColor: theme.colors.base.gray700,
        borderWidth: 1,
    },
    button: {
        height: 54,
        width: 54,
        borderRadius: 5,
        backgroundColor: theme.colors.brand.blue_dark,
        alignItems: 'center',
        justifyContent: 'center',
    }
})