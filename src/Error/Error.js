import React from 'react';


function Error () {
    return(
        <>
            <main className='error_main' style={{display:'flex',alignItems:'center',justifyContent:'center' ,height:'100vh',width :'100%'}}>
                <div className='head' style={{textAlign:'center'}}>
                <h1>404 Error</h1>
                <h2>Page Not Found</h2>
                </div>
            </main>
        </>
    );
}


export default Error;