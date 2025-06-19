const Container = ({
  children,
  ref,
}: {
  children: React.ReactNode;
  ref: React.RefObject<HTMLElement | null>;
}) => {
  return (
    <section
      className="w-full h-full flex justify-center items-center -z-10 transition-all opacity-0"
      ref={ref}
    >
      {children}
    </section>
  );
};

export default Container;
