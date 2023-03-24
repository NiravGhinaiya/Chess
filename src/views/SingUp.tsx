import { useEffect } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { LOGIN_DATA, SINGUP_DATA } from '../interfaces/interFace';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from "redux"
import { addUserDetails, showLoginModal } from '../store/actionCreators';
import { rules } from '../utils/rules';


export default function SingUp(): JSX.Element {

    const dispatch: Dispatch<any> = useDispatch()
    const state: ArticleState = useSelector((state: ArticleState) => state)

    const { isLoginModalOpen } = state

    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton?.addEventListener('click', () => {
            container?.classList.add("right-panel-active");
        });

        signInButton?.addEventListener('click', () => {
            container?.classList.remove("right-panel-active");
        });

    }, [])

    const clickCreateAcc = () => {
        const signUpContainer = document.getElementById('signUpContainer');
        const signInContainer = document.getElementById('signInContainer');

        signUpContainer?.classList.add("create-acc");
        signInContainer?.classList.add("create-acc-op");
    }

    const clickLoginAcc = () => {
        const signUpContainer = document.getElementById('signUpContainer');
        const signInContainer = document.getElementById('signInContainer');

        signUpContainer?.classList.remove("create-acc");
        signInContainer?.classList.remove("create-acc-op");
    }

    const onFinishSingIn = (values: LOGIN_DATA) => {
        console.log('LOGIN_DATA:', values);
    }

    const onFinishSingUp = (values: SINGUP_DATA) => {
        dispatch(addUserDetails(values))
    };
    return (
        <div className='main-login-wraper'>
            <Modal closable={false} open={isLoginModalOpen} onCancel={() => dispatch(showLoginModal(!isLoginModalOpen))} centered width={'768px'} cancelButtonProps={{ style: { display: 'none' } }} okButtonProps={{ style: { display: 'none' } }}>
                <div className="container-login" id="container">
                    <div className="form-container sign-up-container" id='signUpContainer'>
                        <Form
                            name="basic"
                            onFinish={onFinishSingUp}
                            autoComplete="off"
                        >
                            <div className='form-container-data form-margin'>
                                <h1>Create Account</h1>
                                <Form.Item
                                    name="userName"
                                    rules={rules.userName}
                                >
                                    <Input placeholder='Username' />
                                </Form.Item>

                                <Form.Item
                                    name="mobileNumber"
                                    rules={rules.moNumber}
                                >
                                    <Input placeholder='Mobile No.' />
                                </Form.Item>

                                <Form.Item
                                    name="userEmail"
                                    rules={rules.email}
                                >
                                    <Input placeholder='User Email' />
                                </Form.Item>

                                <Form.Item
                                    name="userPassword"
                                    rules={rules.password}
                                >
                                    <Input.Password placeholder='Password' />
                                </Form.Item>

                                <Form.Item>
                                    <div className='form-button-content'>
                                        <Button size={'large'} type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </Form.Item>
                                <Form.Item>
                                    <div className='login-create-acc' id='loginAlready'><a href="/" onClick={clickLoginAcc}>Login ?</a></div>
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                    <div className="form-container sign-in-container" id='signInContainer'>
                        <Form
                            name="basic"
                            onFinish={onFinishSingIn}
                            autoComplete="off"
                        >
                            <div className='form-container-data'>
                                <h1>Sign In</h1>
                                <Form.Item
                                    name="userEmail"
                                    rules={rules.email}
                                >
                                    <Input placeholder='User Email' />
                                </Form.Item>

                                <Form.Item
                                    name="userPassword"
                                    rules={rules.password}
                                >
                                    <Input.Password placeholder='Password' />
                                </Form.Item>
                                <Form.Item>
                                    <a href="/" className='forgotPass'>Forgot your password?</a>
                                </Form.Item>
                                <Form.Item>
                                    <div className='form-button-content'>
                                        <Button size={'large'} type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </Form.Item>
                                <Form.Item>
                                    <div className='login-create-acc' id='createAcc'><a href="/" onClick={clickCreateAcc}>Create Account?</a></div>
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" id="signIn">Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost" id="signUp" >Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
