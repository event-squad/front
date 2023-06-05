type Props = {
  children: React.ReactNode;
  footer: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <>
      {props.children}
      {props.footer}
    </>
  );
};

export default Layout;
