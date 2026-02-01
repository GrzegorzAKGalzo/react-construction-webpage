import React, { type ReactNode } from "react";
interface SubpageHeaderProps {
  children?: ReactNode;
}

export default function SubpageHeader(props: SubpageHeaderProps) {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(to right, var(--color-blue-900) , var(--color-blue-900) 10%, color-mix(in srgb, var(--color-blue-500) 70%, transparent)), url('/images/hero.jpg')",
      }}
      className="h-[50vh] flex flex-col align-middle justify-center"
    >
      {props.children}
    </section>
  );
}
