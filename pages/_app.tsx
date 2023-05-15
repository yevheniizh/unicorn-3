import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import ReactBricksApp from "../components/ReactBricksApp"

import "../css/global.css"
import { Accordion, AccordionContainer } from "../components/accordion"

// const MyApp = (props: AppProps) => {
//   return (
//     <ThemeProvider attribute='class' storageKey='color-mode' enableSystem={false}
//       defaultTheme="light">
//       <ReactBricksApp {...props}></ReactBricksApp>
//     </ThemeProvider>
//   )
// }

const MyApp = () => {
  return (
    <AccordionContainer>
      <Accordion title={"Foo"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, temporibus! Delectus eos quos tenetur error.
      </Accordion>

      <Accordion title={"Bar"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, temporibus! Delectus eos quos tenetur error.
      </Accordion>

      <Accordion title={"Baz"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, temporibus! Delectus eos quos tenetur error.
      </Accordion>
    </AccordionContainer>
  )
}

export default MyApp
