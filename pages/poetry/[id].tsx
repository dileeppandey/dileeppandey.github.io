import React from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import utilStyles from "../../styles/utils.module.css";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllPoetryIds, getPoetryData } from "../../lib/poetry";
import MarkdownRenderer from "../../components/MarkDownRenderer";

export default function Post({
  poetryData,
}: {
  poetryData: {
    title: string;
    date: string;
    content: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{poetryData.title}</title>
      </Head>
      <article className={`${utilStyles.pt84}`}>
        <h1 className={`${utilStyles.headingXl}`}>{poetryData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={poetryData.date} />
        </div>
        <MarkdownRenderer content={poetryData.content} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPoetryIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const poetryData = await getPoetryData(params.id as string);
  return {
    props: {
      poetryData,
    },
  };
};
