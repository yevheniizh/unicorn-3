import React from "react"
import { RichText, Image, Repeater, types, Link } from "react-bricks/frontend"
import { textColors } from "../colors"

interface FooterProps {}

const Footer: types.Brick<FooterProps> = ({}) => {
  return (
    <footer>
      <section className='bg-gray-50'>
        <div
          className="flex justify-between flex-wrap"
        >
          <div className="w-full mb-12 lg:w-auto lg:mb-0 lg:mr-8">
            <Link href='/' className="block mb-4">
              <Image
                propName='logo'
                alt='Logo'
                maxWidth={300}
                imageClassName="w-48 h-7 object-contain object-left"
              />
            </Link>
            <RichText
              propName='copyright'
              placeholder='Copyright notice'
              renderBlock={({ children }) => (
                <p className={`text-sm ${textColors.GRAY_500}`}>{children}</p>
              )}
              allowedFeatures={[types.RichTextFeatures.Link]}
              renderLink={({ children, href }) => (
                <Link
                  href={href}
                  className="text-sky-500 hover:text-sky-600 hover:-translate-y-px transition-all ease-out duration-150"
                >
                  {children}
                </Link>
              )}
            />
          </div>
          <Repeater propName='columns' />
        </div>
      </section>
    </footer>
  )
}

Footer.schema = {
  name: "footer",
  label: "Footer",
  category: "layout",
  tags: ["footer"],
  repeaterItems: [
    {
      name: "columns",
      itemType: "footer-column",
      max: 4,
    },
  ],
  // Defaults when a new brick is added
  getDefaultProps: () => ({
    logo: {
      src: "https://images.reactbricks.com/original/7fd7ef1a-928f-45d6-b7a7-ff34bf91c15e.svg",
      placeholderSrc:
        "https://images.reactbricks.com/original/7fd7ef1a-928f-45d6-b7a7-ff34bf91c15e.svg",
      srcSet: "",
      alt: "React Bricks",
      seoName: "react-bricks",
      width: 1700.787,
      height: 377.953,
    },
    copyright: [
      {
        type: "paragraph",
        children: [
          {
            text: "© React Bricks, Inc.",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Proudly made in Italy",
          },
        ],
      },
    ],
    columns: [
      {
        title: "Company",
        links: [
          {
            linkText: "About us",
            linkPath: "/",
          },
          {
            linkText: "Why React Bricks?",
            linkPath: "/",
          },
          {
            linkText: "Terms of service",
            linkPath: "/",
          },
          {
            linkText: "Privacy",
            linkPath: "/",
          },
        ],
      },
      {
        title: "Features",
        links: [
          {
            linkText: "Visual editing",
            linkPath: "/",
          },
          {
            linkText: "React components",
            linkPath: "/",
          },
          {
            linkText: "Enterprise-ready",
            linkPath: "/",
          },
          {
            linkText: "Roadmap",
            linkPath: "/",
          },
        ],
      },
      {
        title: "Use cases",
        links: [
          {
            linkText: "Content editors",
            linkPath: "/",
          },
          {
            linkText: "Developers",
            linkPath: "/",
          },
          {
            linkText: "Enterprises",
            linkPath: "/",
          },
        ],
      },
      {
        title: "Learn",
        links: [
          {
            linkText: "Tutorial",
            linkPath: "/",
          },
          {
            linkText: "Documentation",
            linkPath: "/",
          },
          {
            linkText: "Videos",
            linkPath: "/",
          },
          {
            linkText: "Blog",
            linkPath: "/",
          },
        ],
      },
    ],
  }),

  // Sidebar Edit controls for props
  sideEditProps: [],
}

export default Footer
