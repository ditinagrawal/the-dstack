import React from "react";

import { ModeToggle } from "@/components/shared/mode-toggle";

interface Props {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: Props) {
  return (
    <div className="relative">
      <ModeToggle className="absolute top-5 right-5" />
      {children}
    </div>
  );
}
