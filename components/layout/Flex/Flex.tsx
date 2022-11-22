export type FlexProps = {
  children: React.ReactNode;
  spacing?: number;
  justify?: string;
  align?: string;
  style?: React.CSSProperties;
  className?: string;
};

export default function Flex(props: FlexProps) {
  const {
    children,
    spacing = 0,
    justify = "flex-start",
    align = "center",
    style = {},
    className,
  } = props;

  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: align,
        justifyContent: justify,
        gap: `${spacing}px`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
