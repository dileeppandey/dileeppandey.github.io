import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { getSortedPoetryData } from "../lib/poetry";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";

export default function Home({
  allPostsData,
  allPoetryData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
  allPoetryData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} + ${utilStyles.pt84} `}>
        <p className="text-center font-cursive ">
          I read code, write poetry, and take photographs of interesting
          characters.
        </p>
        <p>
          {/* A problem solver, an empathetic leader with good product sense, and a
          coach, working in software industry for close to a decade (I Know!)
          now. */}
        </p>

        <p>
          {/* Currently, I am a senior software engineer in the Experimentation team
          at GoDaddy. We enable internal product teams to leverage data backed
          approach to drive hypothesis formulation, delight customers through
          iterative product design by learning from online controlled
          experimentation. */}
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link legacyBehavior href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Poetry</h2>
        <ul className={utilStyles.list}>
          {allPoetryData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link legacyBehavior href={`/poetry/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  const allPoetryData = getSortedPoetryData();
  return {
    props: {
      allPostsData,
      allPoetryData,
    },
  };
};
