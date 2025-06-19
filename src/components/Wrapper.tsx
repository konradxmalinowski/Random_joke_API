const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={`max-w-2xl w-1/2 min-w-80 flex justify-center items-center flex-wrap flex-col gap-5 p-8 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-background2 rounded-2xl ${className}`}
    >
      {children}
    </section>
  );
};

export default Wrapper;
