import { ReactNode } from "react";

type ContentSectionProps = {
  children: ReactNode;
};
export default function ContentSection({ children }: ContentSectionProps) {
  return (
    <div className="flex w-4/5 m-auto text-left flex-col justify-start items-start p-16 text-black overflow-hidden">
      {children}
    </div>
  );
}
