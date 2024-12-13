import moment from "moment/moment";

export function isScrolledToBottom() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  const documentHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  
  return scrollTop + windowHeight >= documentHeight;
}

export const formatArticle = (article) => {
  return {
    ...article,
    createdAt: moment(article.updatedAt).format("YYYY-MM-DD"),
    updatedAt: moment(article.updatedAt).format("YYYY-MM-DD"),
  };
}