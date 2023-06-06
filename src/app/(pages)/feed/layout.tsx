type Props = {
 children: React.ReactNode,
 feed: React.ReactNode,
 header: React.ReactNode,
 search: React.ReactNode,
}

const Layout = (props: Props) => {
 return(
  <div className="px-6">
    {props.header}
    {props.search}
    {props.feed}
  </div>
 )
}

export default Layout;