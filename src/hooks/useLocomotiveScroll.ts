import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

interface LocomotiveScrollOptions {
  smooth?: boolean;
  multiplier?: number;
  [key: string]: any;
}

type UseLocomotiveScrollHook = [React.RefObject<LocomotiveScroll | null>];

interface Props extends Omit<LocomotiveScrollOptions, "el"> {
  ref: React.RefObject<HTMLElement>;
}

const useLocomotiveScroll = ({
  ref,
  ...otherProps
}: Props): UseLocomotiveScrollHook => {
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (ref.current) {
      locomotiveScrollRef.current = new LocomotiveScroll({
        el: ref.current,
        ...otherProps,
      });
    }

    return () => {
      locomotiveScrollRef.current?.destroy();
    };
  }, [ref, otherProps]);

  return [locomotiveScrollRef];
};

export default useLocomotiveScroll;
