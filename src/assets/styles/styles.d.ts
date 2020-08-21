import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            backgroundBase: string,
            backgroundSecondary: string,
            
            primary: string,
            secondary: string,
    
            title: string
        }
    }
}