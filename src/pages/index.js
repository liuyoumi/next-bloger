import Link from "next/link";
import * as ArticleApi from "@/api/article";
import {useEffect} from "react";
import {emitter} from "next/client";

export default ({articles}) => {
  /**
   * 1、滚动到底部通知首页重新获取下一页数据
   * 1-1、保存页码、保存总数量
   */
  useEffect(() => {
    emitter.on("loadMore", () => {
    
    });
  }, []);
  return (
      <div className="px-10 max-md:px-2">
        {
          articles.map((item) => (
              <div
                  key={item.id}
                  className="pb-4 border-b-[1px] border-b-[#ddd] last:border-0"
              >
                <div className="flex justify-between my-5">
                  <Link className="mr-6 text-[28px] text-[#333] font-thin hover:text-primary cursor-pointer"
                        href={`/article/${item.id}`}>
                    {item.title}
                  </Link>
                  <span
                      className="shrink-0 mt-2 text-[14px] text-[#999]">发布于{item.createdAt}</span>
                </div>
                <div className="text-[16px] text-[#666] my-4">
                  {item.summary}
                </div>
                <div className="flex gap-4">
                  <span className="text-primary cursor-pointer">「前端」</span>
                  <Link className="text-primary" href={`/article/${item.id}`}>
                    阅读全文&gt;&gt;
                  </Link>
                </div>
              </div>
          ))
        }
      </div>
  );
}

export async function getStaticProps() {
  const articles = await ArticleApi.getList();
  
  return {
    props: {
      articles,
    },
  };
}