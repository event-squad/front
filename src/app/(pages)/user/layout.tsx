type Props = {
 cep: React.ReactNode
 footer: React.ReactNode
}

const Layout = ({ cep, footer }: Props) => {
 return(
  <>
   {cep}
   {footer}
  </>
 )
}

export default Layout;