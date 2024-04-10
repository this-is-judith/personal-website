export const useScrollDown = () => {
    const handleScrollDown = () => {
      window.scrollTo({
        top: 720,
        left: 0,
        behavior: 'smooth',
      });
    };
  
    return handleScrollDown;
};