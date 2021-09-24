import Head from 'next/head';
import Link from './navlink';
import Header from './header';
import Title from './title';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>{'ID'}</title>
      </Head>
      <Header>
        <Title>{'ID'}</Title>
        <Link path={'/'} text={'Home'} />
      </Header>
      <main>{children}</main>
    </>
  );
}
