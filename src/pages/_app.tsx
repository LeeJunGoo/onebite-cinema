import GlobalLayout from '@/components/layout/GlobalLayout';
import '@/styles/globals.css';
import { AppPropsWithLayout } from '@/types';

import { ReactNode } from 'react';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
}
