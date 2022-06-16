import React from 'react'
import {GoogleOutlined} from "@ant-design/icons"
import "firebase/app"
import {signin} from "../firebase";


export default function Login() {
  return (
    <div id="login-page">
        <div id="login-card">

            <h2>Welcome to ChatBook!</h2>
            <div className="login-button google" onClick={signin}>
                <GoogleOutlined/> Sign in with Google
            </div>

        </div>
    </div>
  )
}
