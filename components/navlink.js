import Link from 'next/link';
import styled from 'styled-components';

const LinkStyle = styled.a`
  font-size: larger;
`;

export default function NavLink({ path, text }) {
  return (
    <>
      <Link href={path} passHref={true}>
        <LinkStyle>{text}</LinkStyle>
      </Link>
    </>
  );
}
