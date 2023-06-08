type Props = {
 children: React.ReactNode
 footer: React.ReactNode
 header: React.ReactNode
}

const Layout = ({ children, footer, header }: Props) => {
 return(
  <div className="px-6">
   {header}
   {children}
   {footer}
  </div>
 )
}

export default Layout;