import React  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "@asgardeo/auth-react";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" crossorigin></script>
    <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>

      <AuthProvider
          config={ {
              signInRedirectURL: "https://usecase-1-react-app-template-6g44t3t24-ramith1.vercel.app/",
              signOutRedirectURL: "https://usecase-1-react-app-template-6g44t3t24-ramith1.vercel.app/",
              clientID: "t2MNmlG35RFkia6XZi7g_3we2Zca",
              baseUrl: "https://api.asgardeo.io/t/ramith",
              scope: [ "openid","profile" ]
          } }
      >
          <App />
      </AuthProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
