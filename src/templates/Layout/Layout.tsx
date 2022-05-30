import * as React from "react"


type LayoutProps = {
  children: JSX.Element
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}

export default Layout
