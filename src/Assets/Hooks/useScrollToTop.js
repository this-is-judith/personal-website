export const useScrollToTop = () => {
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  
    return handleScrollToTop;
};
