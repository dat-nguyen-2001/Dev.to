import { ReactNode } from 'react'
import Footer from './Footer'
import NavBar from './nav/NavBar'

interface Props {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title }: Props) => (
  <div>
    <header>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="dev.to.png" />
    </header>
    <NavBar />
    <body>
      <div className='mt-20'>
        {children}
      </div>
    </body>
    <br></br>
    <div className='bg-[#e5e5e5] relative bottom-0 w-full max-h-[150px] pt-3 pb-10 mt-[75px]'>
      <Footer />
    </div>
  </div>
)

export default Layout
