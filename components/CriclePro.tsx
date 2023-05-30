"use client";
import { useState, useEffect,useRef } from "react";
function CriclePro({ percantge, circlewidth }: any) {
  const ref = useRef<HTMLDivElement | null>(null);
  const refCi = useRef<SVGCircleElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    },
    { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const radius = 85;
  const dashArray = radius * Math.PI * 2;
  const dashoffset = dashArray - (dashArray * percantge) / 100;
  const circleStyle: React.CSSProperties = {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeDasharray: dashArray,
    strokeDashoffset: dashoffset, 
  };
  useEffect(() => {
    let animationTimeout: NodeJS.Timeout | null = null;

    if (isVisible === true) {
      refCi.current?.style.removeProperty('strokeDasharray');
      refCi.current?.style.removeProperty('strokeDashoffset');
      refCi.current?.style.removeProperty('stroke');
      if (animationTimeout) {
        clearTimeout(animationTimeout);
      }
      animationTimeout = setTimeout(() => {
        refCi.current?.style.setProperty('strokeDasharray', dashArray.toString());
        refCi.current?.style.setProperty('strokeDashoffset', dashoffset.toLocaleString());
        refCi.current?.style.setProperty('stroke','#25D366');
      }, 1000);
    }
    return () => {
      if (animationTimeout) {
        clearTimeout(animationTimeout);
      }
    };
  }, [isVisible, dashArray, dashoffset]);
 
  return (
    <div     
    ref={ref} 
    >
      <svg className="pointGreen bg-gray-900/10 rounded-full  w-20 h-20
      py-1 bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']  before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]   before:opacity-30
      "  viewBox={`0 0 ${circlewidth}  ${circlewidth}`} >
        <circle cx={circlewidth / 2} cy={circlewidth / 2} strokeWidth="15px" r={radius}
          className="fill-none stroke-gray-800/50   "
          />   
          <circle
        ref={refCi}
        style={circleStyle} 
           cx={circlewidth / 2} 
           cy={circlewidth / 2}
            strokeWidth="15px" r={radius}
           className={`fill-none  blur-[1px] `}
           transform={`rotate(-90 ${circlewidth / 2} ${circlewidth / 2})`}
    />
        <text style={{ fill: "white" }} x="50%" y="50%" dy='0.3em' textAnchor="middle" className=" font-bold text-[2.5rem]  ">{percantge}%</text>
      </svg>
    </div>
  )
}

export default CriclePro;