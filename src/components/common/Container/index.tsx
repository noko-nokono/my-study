import { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
}

export const Container = (props: Props) => {
  const { children } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const [needsScroll, setNeedsScroll] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkOverflow = () => {
      const containerHeight = container.clientHeight;
      const contentHeight = container.scrollHeight;
      setNeedsScroll(contentHeight > containerHeight);
    };

    checkOverflow();
    
    const resizeObserver = new ResizeObserver(checkOverflow);
    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, [children]);

  return (
    <div 
      ref={containerRef}
      className={`w-full m-4 overflow-x-hidden ${needsScroll ? 'overflow-y-scroll' : 'overflow-y-hidden'}`}
    >
      { children }
    </div>
  )
};