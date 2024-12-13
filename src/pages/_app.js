import "@/styles/globals.css";
import Link from "next/link";
import {useState, useEffect} from "react";
import {PagesProgressBar} from "next-nprogress-bar";
import SiteFooter from "@/components/site-footer";
import * as ArticleApi from "@/api/article";

export default function App({Component, pageProps}) {
  const avatar = "https://static-qiniu.lanqiao.cn/avatar/uid2440796-20220727-1658906516358?imageView2/1/w/150/h/150/";
  const title = "牛肉干的个人站";
  const menus = [
    {
      name: "首页",
      path: "/",
      icon: "jam--home-f",
    },
    {
      name: "目录",
      path: "/archive",
      icon: "solar--archive-minimalistic-bold-duotone",
    },
    {
      name: "关于我",
      path: "/about",
      icon: "si--user-fill",
    },
  ];
  //
  const [count, setCount] = useState();
  //
  useEffect(() => {
    // ArticleApi.count().then((value) => {
    //   console.log(value);
    // })
  }, []);
  
  return (
      <>
        <div className="md:flex h-[100vh]">
          {/*PC端*/}
          <div className="
            w-[260px]
            bg-[#111111]
            max-md:hidden
            overflow-hidden
            whitespace-nowrap
        ">
            <div className="text-center pt-10 pb-3 max-md:opacity-0 duration-300">
              <Link href="/">
                <img
                    className="w-[150px] h-[150px] mb-2 rounded-[50%] inline glow"
                    src={avatar}
                    alt="avatar"
                />
              </Link>
              <div className="py-[15px] text-[#ccc] text-[18px]">
                {title}
              </div>
              <div className="text-[#666] text-[14px]">
                不做重复的事
              </div>
            </div>
            <div className="flex flex-col">
              {
                menus.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className="h-[45px] pl-[25px] leading-[45px] text-[#999] hover:text-[#fff]"
                    >
                      <span className={`icon-[${item.icon}] mr-4 w-5 h-5`} style={{verticalAlign: "-3px"}}></span>
                      {item.name}
                    </Link>
                ))
              }
            </div>
          </div>
          {/* 移动端 */}
          <div className="hidden max-md:block fixed top-0 w-full z-10">
            <div className="flex items-center h-[50px] bg-[#111] px-2 relative">
              <i className="icon-[entypo--menu] text-[#ccc] text-[28px]"/>
              <h1 className="flex-1 text-[#ccc] text-center font-bold">{title}</h1>
              <img className="w-[30px] h-[30px] rounded-[50%]" src={avatar} alt="avatar"/>
            </div>
          </div>
          {/*内容区域*/}
          <div className="md:flex-1 max-md:pt-[50px] h-[100%] overflow-auto bg-white">
            <Component {...pageProps} />
            <SiteFooter/>
          </div>
        </div>
        <PagesProgressBar
            height="2px"
            color="#165dff"
            options={{showSpinner: false}}
            shallowRouting
        />
      </>
  );
}