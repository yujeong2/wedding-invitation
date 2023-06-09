import { useEffect, useRef } from 'react';

const useIntersectionObsever = (targetRef) => {
  const observer = useRef();

  useEffect(() => {
    if (!observer.current) {
      const observerCallback = (entries) => {
        if (entries.length === 1) {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio < 1) {
              entry.target.classList.add('active');
            }
            // else {
            //   entry.target.classList.remove('active');
            // }
          });
        }
      };

      observer.current = new window.IntersectionObserver(observerCallback, {
        threshold: 0.5,
      });
    }

    if (targetRef.current) {
      observer.current.observe(targetRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [targetRef]);
};

export default useIntersectionObsever;
