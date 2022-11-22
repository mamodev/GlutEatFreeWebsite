export type StackProps = {
  children: React.ReactNode;
  spacing?: number;
  justify?: string;
  align?: string;
  style?: React.CSSProperties;
  className?: string;
};

export default function Stack(props: StackProps) {
  const {
    children,
    spacing = 0,
    justify = "flex-start",
    align = "left",
    style = {},
    className,
  } = props;

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
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
