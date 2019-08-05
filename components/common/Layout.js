import Header from './Header';
import { loadGetInitialProps } from 'next-server/dist/lib/utils';

export default (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}