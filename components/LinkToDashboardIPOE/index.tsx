import type { ReactNode } from "react";
import Link from "next/link";

interface LinkToDashboardIPOEPropsTypes {
  url: string;
  isTargetBlank?: boolean;
  children: ReactNode
}

export default function LinkToDashboardIPOE({
  children: title,
  url,
  isTargetBlank
}: LinkToDashboardIPOEPropsTypes) {

  return (
    <Link
      href={url}
      target={isTargetBlank ? "_blank" : ''}
    >
      # {title}
    </Link>
  );
}