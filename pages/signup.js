import Alert from '@material-ui/lab/Alert';
import {useAuth} from '../utils/auth';
import Auth from '../components/Auth';
import {useRouter} from 'next/router';

export default () => {
    const auth = useAuth();
    const router = useRouter();

    const signUp = ({email, pass}) => {
        auth.signup(email, pass)
            .then(() => {
                <Alert variant="outlined" severity="success">
                    This is a success alert — check it out!
                </Alert>
                router.push('/posts/third-post');
            })
            .catch((error) => {
                <Alert variant="outlined" severity="error">
                    err.message
                </Alert>
            });
    };

    return <Auth type="Sign Up" onSubmit={signUp} />;
};