import moment from "moment";
import {useEffect} from "react";
import hljs from "highlight.js";
import htmlReactParser from "html-react-parser";
import * as ArticleApi from "@/api/article";

export default ({article}) => {
  useEffect(() => {
    document.querySelectorAll("pre code").forEach(el => {
      hljs.highlightElement(el);
    });
  }, []);
  return (
      <div className="px-10 bg-white max-md:px-2">
        <h1 className="my-5 text-[#333] text-[30px]">{article.title}</h1>
        <div className="max-md:hidden text-[#999] text-[14px] mb-6">
          <span className="mr-4">发布日期: {moment(article.createdAt).format("YYYY-MM-DD")}</span>
          <span className="mr-4">更新日期: {moment(article.updatedAt).format("YYYY-MM-DD")}</span>
          <span>标签：<a className="text-primary" href="#">{article.tag.name}</a></span>
        </div>
        <div className="markdown-body">
          {htmlReactParser(article.content)}
        </div>
      </div>
  );
}

export async function getStaticProps({params}) {
  const article = await ArticleApi.getDetail(params.id);
  return {
    props: {article},
  };
}

export async function getStaticPaths() {
  const articles = await ArticleApi.getList();
  return {
    paths: articles.map(article => ({params: {id: article.id + ""}})),
    fallback: true,
  };
}

