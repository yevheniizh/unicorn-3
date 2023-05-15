import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import ReactBricksApp from "../components/ReactBricksApp"

import "../css/global.css"
import { Accordion, AccordionItem } from "../components/accordion"

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
    <Accordion>
      <AccordionItem title={"Foo"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, temporibus! Delectus eos quos tenetur error.
      </AccordionItem>

      <AccordionItem title={"Bar"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, temporibus! Delectus eos quos tenetur error.
      </AccordionItem>

      <AccordionItem title={"Baz"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, temporibus! Delectus eos quos tenetur error.
      </AccordionItem>
    </Accordion>
  )
}

export default MyApp
