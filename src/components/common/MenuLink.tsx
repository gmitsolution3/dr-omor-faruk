import type { ReactNode } from "React";
// import { Link } from "react-router";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router";

interface IMenuLink {
  to: string;
  className: string;
  children: ReactNode;
  onClick?: () => void;
}

const MenuLink = ({
  to,
  className,
  children,
  onClick,
}: IMenuLink) => {
  const { pathname } = useLocation();

  const active = "text-primary";

  return (
    <a
      href={`#${to}`}
      className={cn(className, `${pathname === to ? active : ""}`)}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default MenuLink;
