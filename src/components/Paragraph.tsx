const Paragraph = ({ label }: { label: string }) => {
  return (
    <p className="p-4 bg-background2 text-white flex justify-center items-center text-center w-full rounded-xl text-xl">
      {label}
    </p>
  );
};

export default Paragraph;
