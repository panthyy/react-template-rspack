import classNames from "classnames";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className={classNames("px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600")} onClick={onClick}>
      {children}
    </button>
  );
};
