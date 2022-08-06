import { CredentialResponse, GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import type { NextPage } from "next";

const LoginGoogle: NextPage = () => {

    const clientId = process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID;
    
    const handleSuccess = (response: CredentialResponse) => {
        if ('credential' in response) {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/google-authentication`, {
                method: 'POST',
                body: JSON.stringify({
                    credential: response.credential,
                    clientId: response.clientId
                }),
                headers: {
                'Content-Type': 'application/json'
                },
            });
        }
    }

	return (
		<GoogleOAuthProvider clientId={clientId??''} >
            <GoogleLogin
                onSuccess={handleSuccess}
                onError={() => {
                    console.log('Login Failed');
                }}
                size='medium'
                shape="pill"
                text='signin'
                />
        </GoogleOAuthProvider>
	);
};

export default LoginGoogle;
