import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            backgroundDarker: string,
            backGroundDark: string,
            backGround: string,
            backGroundLight: string,
            backGroundLighter: string,

            primaryDarker: string,
            primaryDark: string,
            primary: string,
            primaryLight: string,
            primaryLighter: string,

            secondaryDarker: string,
            secondaryDark: string,
            secondary: string,
            secondaryLight: string,
            secondaryLighter: string,

            openDarker: string,
            openDark: string,
            open: string,
            openLight: string,
            openLighter: string,

            title: string,

            primaryButton: string,
            primaryButtonHover: string,
            primaryButtonDisabled: string,

            secondaryButton: string,
            secondaryButtonHover: string,
            secondaryButtonDisabled: string
        },

        fonts: {
            fontMainTitle: string,
            fontSubTitle: string,
            fontText: string
        }
    }
}
