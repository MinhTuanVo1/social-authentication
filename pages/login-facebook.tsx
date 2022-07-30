import FacebookLogin, { ReactFacebookFailureResponse, ReactFacebookLoginInfo } from 'react-facebook-login';
import type { NextPage } from "next";

const LoginFacebook: NextPage = () => {
    const appId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;
    const responseFacebook = (response: ReactFacebookLoginInfo | ReactFacebookFailureResponse) => {
        if('id' in response) {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/facebook-authentication/${response.accessToken}`, {
                method: 'POST',
                body: JSON.stringify({
                    userID: response.userID,
                    name: response.name,
                    email: response.email
                }),
                headers: {
                'Content-Type': 'application/json'
                },
            }).then(response => response.json())
                .then(data => console.log(data));
        }
        //console.log(response);
    }
	return (
		<FacebookLogin
            appId={appId??''}
            fields="name,email,picture"
            callback={responseFacebook} />
	);
};

export default LoginFacebook;
