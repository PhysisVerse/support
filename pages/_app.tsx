import { AppProps } from 'next/app';
import Intercom from '../components/intercom';
import '../styles/stargrazer.css';

function Docs({ Component, pageProps }: AppProps) {
  return (
	<>
	  <Component {...pageProps} />
	  <Intercom appId="fos0i7az" />
	</>
  );
}

export default Docs;
