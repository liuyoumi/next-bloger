import prisma from "@/lib/prisma";
import {formatArticle} from "@/lib/utils";

export default async function handler(req, res) {
  const {id} = req.query;
  const article = await prisma.article.findUnique({
    where: {id: +id},
    include: {
      tag: true,
    },
  });
  res.send(formatArticle(article));
};