import "../css/global.css"

import { Accordion, AccordionContainer } from "../components/accordion"

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
