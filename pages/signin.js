import Alert from '@material-ui/lab/Alert';
import {useAuth} from '../utils/auth';
import Auth from '../components/Auth';
import {useRouter} from 'next/router';

export default () => {
    const auth = useAuth();
    const router = useRouter();

    const signIn = ({email, pass}) => {
        auth.signin(email, pass)
            .then(() => {
                router.push('/posts/third-post');
            })
            .catch((error) => {
                <Alert variant="outlined" severity="error">
                    error.message
                </Alert>
            });
    };

    return <Auth type="Sign In" onSubmit={signIn} />;
};