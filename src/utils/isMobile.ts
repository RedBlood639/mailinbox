export const isMobile = (w: any) => {
  if (window.innerWidth > w) {
    return false;
  } else {
    return true;
  }
};
