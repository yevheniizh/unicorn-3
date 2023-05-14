import React, { useEffect, useRef, useState } from 'react'
import { Image, Repeater, types, Link } from 'react-bricks/frontend'
import { useReactBricksContext } from 'react-bricks/frontend'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FiMenu, FiX } from 'react-icons/fi'
import useOnClickOutside from './useClickOutside'

interface HeaderProps {}

const Header: types.Brick<HeaderProps> = ({}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isDarkColorMode, toggleColorMode } = useReactBricksContext()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref, () => setMobileMenuOpen(false))

  return (
    <section className='bg-gray-50'>
      <nav className='flex justify-center align-center p-5'>
        <Link href="/" aria-label="home" className='inline-flex py-1.5 px-2'>
          <Image
            propName="logo"
            alt="Logo"
            maxWidth={300}
            imageClassName='block object-contain object-left w-32 h-7'
          />
        </Link>
        <div className="hidden lg:flex items-center space-x-2">
          <Repeater
            propName="menuItems"
            itemProps={{ mobileRef: ref, setMobileMenuOpen }}
          />
        </div>
        <div className="hidden lg:block ml-auto">
          <Repeater
            propName="buttons"
            itemProps={{ simpleAnchorLink: true }}
            renderWrapper={(item) => (
              <div
                key={item.key}
                className="flex flex-row space-x-5 items-center justify-end"
              >
                {item}
              </div>
            )}
          />
        </div>

        {/* DARK MODE BUTTON */}
        {mounted && (
          <button
            type="button"
            className="flex items-center justify-center w-8 h-8 mr-4 ml-auto lg:ml-8 text-gray-400 dark:text-gray-200"
            onClick={toggleColorMode}
          >
            {!isDarkColorMode ? (
              <BsMoonFill />
            ) : (
              <BsSunFill
                style={{ fontSize: '1.25rem', lineHeight: '1.75rem' }}
              />
            )}
          </button>
        )}

        <div
          ref={ref}
          className="relative lg:hidden flex items-center h-full sm:gap-x-4"
        >
          <button
            className="group p-1 w-7 h-7 flex justify-center items-center rounded-[5px] bg-gray-200 dark:bg-transparent hover:bg-sky-500/20 dark:hover:bg-sky-500/40 hover:text-sky-600 dark:hover:text-sky-500 focus:bg-sky-500/20 dark:focus:bg-sky-500/40 focus:text-sky-600 dark:focus:text-sky-500"
            onClick={() => setMobileMenuOpen((current) => !current)}
          >
            {mobileMenuOpen ? (
              <FiX className="text-gray-600 dark:text-white" size={18} />
              ) : (
                <FiMenu className="text-gray-600 dark:text-white" size={20} />
              )}
          </button>
          {mobileMenuOpen && (
            <div className="absolute top-8 right-0 w-64 bg-white p-5 border rounded-lg shadow-lg z-10">
              <Repeater
                propName="menuItems"
                itemProps={{
                  mobileRef: ref,
                  setMobileMenuOpen,
                }}
              />
            </div>
          )}
        </div>
      </nav>
    </section>
  )
}

Header.schema = {
  name: 'header',
  label: 'Header',
  category: 'layout',
  tags: ['header', 'menu'],
  repeaterItems: [
    {
      name: 'menuItems',
      itemType: 'header-menu-item',
      itemLabel: 'Item',
      min: 0,
      max: 6,
    },
    {
      name: 'buttons',
      itemType: 'button',
      itemLabel: 'Button',
      min: 0,
      max: 2,
    },
  ],
  sideEditProps: [],
  getDefaultProps: () => ({
    menuItems: [
      {
        linkPath: '/',
        linkText: 'Home',
      },
      {
        linkPath: '/about-us',
        linkText: 'About us',
      },
      {
        linkPath: '',
        linkText: 'Features',
        submenuItems: [
          {
            linkText: 'Visual editing',
            linkDescription:
              'The best visual experience for your content editors',
            linkPath: '/',
          },
        ],
      },
    ],
    logo: {
      src: 'https://images.reactbricks.com/original/8d0eb40f-6e1a-4f6c-9895-a06767fcf5fa.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/8d0eb40f-6e1a-4f6c-9895-a06767fcf5fa.svg',
      srcSet: '',
      width: 450,
      height: 100,
      alt: 'React Bricks',
      seoName: 'react-bricks',
    },
    buttons: [
      {
        text: 'Edit content',
        href: '/admin',
        isTargetBlank: false,
        type: 'link',
        variant: 'solid',
        padding: 'small',
      },
    ],
  }),
}

export default Header
