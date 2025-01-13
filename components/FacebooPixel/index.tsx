"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const FacebookPixel = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    import("react-facebook-pixel")
      .then(x => x.default)
      .then(ReactPixel => {
        ReactPixel.init("975906963878222");
        ReactPixel.pageView();
      });
  }, [pathname, searchParams]);

  return null;
};
