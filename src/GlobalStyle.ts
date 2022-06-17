import { createGlobalStyle } from 'styled-components';
import {font_family_page}  from './Variables';

export const GlobalStyle = createGlobalStyle`
overflow-x:hidden ;
scroll-behavior: smooth;
font-family: ${font_family_page};
text-decoration: none;
box-sizing: border-box;
margin: 0;
padding: 0;
text-decoration: none;

`;
