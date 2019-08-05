import Link from 'next/link';
import Router from 'next/router';
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 68px;
  /* background-color: #ffffff; */
  background-color: red;
  margin: 0 auto;
`;

export default () => {
  return (
    <Wrapper>
      <Link href="/about">
      <a>about</a>
      </Link>

    </Wrapper>
  );
}