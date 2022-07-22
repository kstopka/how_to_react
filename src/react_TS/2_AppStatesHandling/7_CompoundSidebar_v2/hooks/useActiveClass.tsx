import { useMemo } from "react";

export const useActiveClass = (
  isActive: boolean,
  active: string,
  normal: string
) => {
  const activeClass = useMemo(() => {
    if (!isActive) return `${normal} ${active}`;
    return normal;
  }, [normal, isActive, active]);

  return { activeClass };
};
