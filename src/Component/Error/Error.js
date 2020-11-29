import React from 'react';

const Error = () => {
    document.title = "error";
    return (
        <div className="text-center text-danger p-5 m-5">
            <h1>Page Not Found  (202)</h1>
        </div>
    );
};

export default Error