import {ThemeProvider} from "styled-components";
import {defaultTheme} from '../src/theme'
import '../src/index.less'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  addDecorator:(storyFn)=><ThemeProvider theme={defaultTheme}>
    {storyFn()}
  </ThemeProvider>
}