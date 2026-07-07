"use client";

import { useEffect, useRef } from "react";

export function Giscus() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;
    const s = document.createElement("script");
    s.src = "https://giscus.app/client.js";
    s.setAttribute("data-repo", "W-JOSLIN-X/my-blog");
    s.setAttribute("data-repo-id", "R_kgDOTP-ShQ");
    s.setAttribute("data-category", "Announcements");
    s.setAttribute("data-category-id", "DIC_kwDOTP-Shc4DAqwC");
    s.setAttribute("data-mapping", "pathname");
    s.setAttribute("data-strict", "0");
    s.setAttribute("data-reactions-enabled", "1");
    s.setAttribute("data-emit-metadata", "0");
    s.setAttribute("data-input-position", "bottom");
    s.setAttribute("data-theme", "noborder_gray");
    s.setAttribute("data-lang", "zh-CN");
    s.setAttribute("crossorigin", "anonymous");
    s.async = true;
    ref.current.appendChild(s);
  }, []);

  return (
    <section>
      <div className="sec-head">
        <span className="mark" />
        <span className="title">评论区</span>
        <span className="line" />
      </div>
      <div ref={ref} />
    </section>
  );
}
