import {Button} from "./Components/Button";
import {ThemeProvider} from 'styled-components';
import { defautTheme } from "./Components/styles/themes/default";

export function App() {

  return (
    <ThemeProvider theme={defautTheme}>
    <Button variant="primary" />
    <Button variant="secondary"/>
    <Button variant="danger"/>
    <Button variant="success"/>
    <Button />
    </ ThemeProvider>
  )
}

