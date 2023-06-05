type Props = {
  children: React.ReactNode;
  footer: React.ReactNode;
  event: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <>
      {props.event}
      {props.footer}
    </>
  );
};

export default Layout;
