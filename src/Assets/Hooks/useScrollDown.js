export const useScrollDown = () => {
    const handleScrollDown = () => {
      window.scrollBy({
        top: 720,
        left: 0,
        behavior: 'smooth',
      });
    };
  
    return handleScrollDown;
};
  