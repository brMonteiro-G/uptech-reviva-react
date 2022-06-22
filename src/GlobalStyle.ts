import { createGlobalStyle } from 'styled-components';
import { font_family_page } from './Variables';

export const GlobalStyle = createGlobalStyle`
body{
    font-family: $font-family-page;
        text-decoration: none;
        overflow-x:hidden ;
        scroll-behavior: smooth;
}

`;
