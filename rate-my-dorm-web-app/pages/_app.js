import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'

import NavBar from '@/components/Navigation/NavBar';
import { CurrentUserContext, CurrentUserProvider} from '@/providers/CurrentUserProvider';
import { SchoolContext, SchoolProvider } from '@/providers/SchoolProvider';
import { DormContext, DormProvider } from '@/providers/DormProvider';
import { CommentContext, CommentProvider } from '@/providers/CommentProvider';
import { UserContext, UserProvider } from '@/providers/UserProvider';

const queryClient = new QueryClient({defaultOptions: { queries: { refetchOnWindowFocus: false } } })

function MyApp({ Component, pageProps }) {

  return (
    <QueryClientProvider client={queryClient}>
        <CurrentUserProvider children={CurrentUserContext}>
            <SchoolProvider children={SchoolContext}>
                <DormProvider children={DormContext}>
                    <CommentProvider children={CommentContext}>
                        <UserProvider children={UserContext}>
                            <NavBar />
                            <Component {...pageProps} />
                        </UserProvider>
                    </CommentProvider>
                </DormProvider>
            </SchoolProvider>
        </CurrentUserProvider>
    </QueryClientProvider>
  )
}

export default MyApp;