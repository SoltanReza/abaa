import { ReactNode } from "react";

type ContentSectionProps = {
  children: ReactNode;
};

export default function ContentSection({ children }: ContentSectionProps) {
  return (
    <div className="mx-auto w-full md:w-4/5 text-left flex-col justify-start items-start p-4 md:p-16 text-black overflow-hidden">
      {children}
    </div>
  );
}
