import styled from "styled-components";

export const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    font-size: 14px;
`;

export const Box = styled.div`
    max-width: 350px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #ffff;
    border: 1px solid #e6e6e6;
    border-radius: 1px;
    margin: 0 0 10px;
    padding: 10px 0;
    flex-grow: 1;
`;

export const Logo = styled.div`
    margin: 22px auto 12px;
    background-image: url("https://www.instagram.com/static/bundles/es6/sprite_core_b20f2a3cd7e4.png/b20f2a3cd7e4.png");
    background-position: -98px 0;
    height: 51px;
    width: 177px;
    overflow: hidden;
`;

export const Heading = styled.h2`
    margin-top: 10px;
    width: 280px;
    color: #8E8E8E;
    font-size: 17px;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;;
`;

export const Field = styled.div`
    margin: 10px 0;
    position: relative;
    font-size: 14px;
    width: 100%;
    text-overflow: ellipsis;
`;

export const Label = styled.label`
    position: absolute;
    pointer-events: none;
    left: 10px;
    padding-bottom: 15px;
    transform: translateY(10px);
    line-height: 6px;
    transition: all ease-out 0.1s;
    font-size: 14px;
    color: #999;
    padding-top: 6px;

`;

export const Input = styled.input`
    padding: 9px 0px 7px 9px;
    font-size: 12px;
    width: 16rem;
    height: 1.2rem;
    outline: none;
    background: #fafafa;
    border-radius: 3px;
    border: 1px solid #efefef;

    // hiding placeholder in all browsers
    &::placeholder {
        visibility: hidden;
      }

    &:not(:placeholder-shown) {
        padding-top: 14px;
        padding-bottom: 2px;
      }
    
    &:not(:placeholder-shown) + Label {
        transform: translateY(0);
        font-size: 11px;
      }
`;


export const LoginButton = styled.button`
    text-align: center;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid transparent;
    background-color: #3897f0;
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
`;

export const LoginForm = styled.form`
    &::-moz-placeholder {
        color: transparent;
    }
`;

export const Separator = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #999;
    margin-top: 6px;
`;

export const Line = styled.div`
    height: 1px;
    width: 40%;
    background-color: #dbdbdb;
`;

export const Other = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const FbLoginBtn = styled.button`
    margin: 1rem;
    border: 0;
    cursor: pointer;
    font-size: 14px;
    color: #385185;
    font-weight: 600;
    background: transparent;
`;

export const FbIcon = styled.i`
    color: #385185;
    font-size: 1rem;
    padding-right: 1px;
`;

export const ForgotPassword = styled.a`
    font-size: 11px;
    color: #003569;
`;

export const Signup = styled.a`
    color: #3897f0;
    font-weight: 600;
`;