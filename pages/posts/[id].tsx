import React from "react";
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import utilStyles from '../../styles/utils.module.css'
import Date from '../../components/date'
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts'
import MarkdownRenderer from '../../components/MarkDownRenderer';

export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <MarkdownRenderer content={postData.contentHtml} />
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}
