import {useEffect, useRef} from "react";
import {emitter} from "next/client";

const SiteFooter = () => {
  const footerRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          emitter.emit("loadMore");
        }
      });
    });
    
    observer.observe(footerRef.current);
    
    return () => observer.unobserve(footerRef.current);
  }, []);
  
  return (
      <footer className="bg-gray-100 py-5 text-center" ref={footerRef}>
        <div className="mb-2.5">
          <a
              href="https://beian.miit.gov.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 no-underline text-sm"
          >
            蜀ICP备2024111270号-1
          </a>
        </div>
        {/*<div className="mb-2.5">*/}
        {/*  <a*/}
        {/*      href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=88888888"*/}
        {/*      target="_blank"*/}
        {/*      rel="noopener noreferrer"*/}
        {/*      className="text-gray-600 no-underline text-sm"*/}
        {/*  >*/}
        {/*    <img*/}
        {/*        src="/images/beian.png"*/}
        {/*        alt="公安备案"*/}
        {/*        className="w-5 h-5 mr-1.25 align-middle"*/}
        {/*    />*/}
        {/*    公安备案号: 袈袈袈袈号*/}
        {/*  </a>*/}
        {/*</div>*/}
      </footer>
  );
};

export default SiteFooter;
