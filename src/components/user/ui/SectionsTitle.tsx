import {ReactNode} from "react";

type thisProps = {
  children: ReactNode;
  className?: string;
};
export default function SectionsTitle({children, className}: thisProps) {
  return <p className={`md:text-3xl text-2xl ${className}`}>{children}</p>;
}
