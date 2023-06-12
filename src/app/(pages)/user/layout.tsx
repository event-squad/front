type Props = {
 children: React.ReactNode
 footer: React.ReactNode
}

const Layout = ({ children, footer }: Props) => {
 return(
  <>
   {children}
   {footer}
  </>
 )
}

export default Layout;