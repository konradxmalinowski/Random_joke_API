const ButtonsWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full p-2.5 flex justify-center gap-3.5 items-center">
      {children}
    </div>
  );
};

export default ButtonsWrapper;
