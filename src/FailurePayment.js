import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';  // Import for routing if using react-router
import failureImage from "../src/images/failurepage.svg";
import { Helmet } from "react-helmet";

const FailurePayment = ({ lead }) => {
  const paymentStatus = lead?.paymentStatus;
  const isPaymentFailed = paymentStatus !== "paid";

  const navigate = useNavigate();  // For react-router

  if (!isPaymentFailed) {
    return null;
  }
  const handleBackToHome = () => {
    navigate('/');  // Correct usage of navigate function to go to home
  };
  return (
    <>
     <Helmet>
    <title>Failure</title>

    <script async src="https://www.googletagmanager.com/gtag/js?id=G-QN4189EDG5"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QN4189EDG5');
        `}
      </script>
    <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '865961251883214');
            fbq('track', 'PageView');
          `}
        </script>
        <noscript>
          {`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=865961251883214&ev=PageView&noscript=1" alt="Meta Pixel" />`}
        </noscript>

        <script>
          {`
            (function(w,d,t,r,u){
              var f,n,i;w[u]=w[u]||[],f=function(){
                var o={ti:"56340877", enableAutoSpaTracking: true};
                o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")
              },
              n=d.createElement(t),n.src=r,n.async=1,
              n.onload=n.onreadystatechange=function(){
                var s=this.readyState;
                s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)
              },
              i=d.getElementsByTagName(t)[0];
              i.parentNode.insertBefore(n,i)
            })(window,document,"script","//bat.bing.com/bat.js","uetq");
          `}
        </script>
    </Helmet>
    <div style={styles.container}>
      <img 
        src={failureImage}
        alt="Payment Failure" 
        style={styles.failureImage} 
      />
      <h1 style={styles.heading}>Payment Failed</h1>
      <p style={styles.message}>
        Unfortunately, your payment was not completed successfully.
      </p>
      
      {/* Back to Home Button */}
      <button onClick={handleBackToHome} style={styles.retryButton}>
        Back to Home
      </button>
    </div>
    </>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    marginTop: '-9%',
  },
  heading: {
    fontSize: '2em',
    color: '#f44336',
  },
  message: {
    fontSize: '1.2em',
    color: '#f44336',
  },
  failureImage: {
    marginTop: '20px',
    width: '300px',
    height: '300px',
  },
  retryButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1em',
    backgroundColor: '#ff9800',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  '@media (max-width: 768px)': {
    container: {
      padding: '30px',
      marginTop: '-37%',
    },
    heading: {
      fontSize: '1.8em',
    },
  }
};

export default FailurePayment;
