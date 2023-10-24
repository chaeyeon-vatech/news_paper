import Container from "./styled";

interface DialogTitleProps extends React.ComponentProps<"div"> {
  icon?: JSX.Element;
  onClose?: () => void;
}

const DialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, icon } = props;

  return (
    <Container>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {/*{icon && (*/}
        {/*  <Icon noPadding color="error">*/}
        {/*    {icon}*/}
        {/*  </Icon>*/}
        {/*)}*/}

        {/*<Typhography variant="h5" color="inherit">*/}
        {/*  {children}*/}
        {/*</Typhography>*/}
      </div>

      {/*{onClose && (*/}
      {/*  <IconButton noMargin size="small" onClick={onClose}>*/}
      {/*    <ClosesmallIcon color="white" />*/}
      {/*  </IconButton>*/}
      {/*)}*/}
    </Container>
  );
};

export default DialogTitle;
