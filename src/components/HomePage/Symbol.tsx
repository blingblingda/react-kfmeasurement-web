import { ReactNode } from "react";

interface Props {
  children: ReactNode; 
  text: string;
}
const Symbol = ({children, text}: Props) => {
  return (
    <>
      <div className="text-center">
        {children}
        <p>{text}</p>
      </div>

    </>
  );
};

export default Symbol;
