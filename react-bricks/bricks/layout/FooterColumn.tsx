import React from "react"
import { Text, Repeater, types } from "react-bricks/frontend"
import { textColors } from "../colors"

interface FooterColumnProps {}

const FooterColumn: types.Brick<FooterColumnProps> = (props) => {
  return (
    <div className="w-1/2 sm:w-auto sm:mr-8 mb-8">
      <Text
        propName='title'
        placeholder='Title...'
        renderBlock={({ children }) => (
          <div
            className={`mb-3 text-xs font-extrabold uppercase tracking-[0.35em] min-w-[120px] ${textColors.GRAY_400}`}
          >
            {children}
          </div>
        )}
      />
      <Repeater propName='links' />
    </div>
  )
}

FooterColumn.schema = {
  name: "footer-column",
  label: "Column",
  category: "layout",
  hideFromAddMenu: true,
  // tags: [],
  repeaterItems: [
    {
      name: "links",
      itemType: "footer-link",
    },
  ],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    title: "Features",
  }),

  // Sidebar Edit controls for props
  sideEditProps: [],
}

export default FooterColumn
