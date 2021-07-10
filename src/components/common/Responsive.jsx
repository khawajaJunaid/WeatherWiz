import { useMediaQuery } from "react-responsive"

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

export const IsDesktopHook = () => useMediaQuery({ minWidth: 991 });

export const IsTabletHook = () =>
  useMediaQuery({
    minWidth: 768,
    maxWidth: 991,
  });

export const IsMobileHook = () => useMediaQuery({ maxWidth: 767 });
