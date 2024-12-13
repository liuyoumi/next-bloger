import prisma from "@/lib/prisma";
import {formatArticle} from "@/lib/utils";

export default async function handler(req, res) {
  // 查询所有
  const {page = 1, size = 10} = req.query;
  const articles = await prisma.article.findMany({
    select: {
      id: true,
      title: true,
      summary: true,
      createdAt: true,
      updatedAt: true,
    },
    skip: (page - 1) * size,
    take: size,
    orderBy: {
      createdAt: "desc",
    },
  });
  res.send(articles.map(article => formatArticle(article)));
}