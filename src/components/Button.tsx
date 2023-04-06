import classNames from "classnames";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className={classNames(
        "px-4 py-2 rounded-md text-white bg-primary shadow-md font-inter font-semibold",
        "hover:bg-primaryHover active:bg-primaryActive focus:outline-none active:scale-95",
        "duration-200 ease-in-out transition"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
