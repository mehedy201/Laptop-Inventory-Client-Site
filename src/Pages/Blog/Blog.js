import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h1 className='my-5 text-center'>Blog</h1>
            <div className='mb-5'>
                <h4>Difference between javascript and nodejs?</h4>
                <h6>JavaScript</h6>
                <p>JavaScript is a scripting language. JavaScript is abbreviated as JS. JavaScript is a client site language but now it can be used in the backend as well. JavaScript is a high level programming language. It runs in the browser. With JavaScript the website can be made more interesting and interactive.</p>
                <h6>Node JS</h6>
                <p>Node JS were created using JavaScript. JavaScript cannot be used on server sites just because it is run in a browser, but the server can be run in JavaScript language through node js.</p>
                <h4>When should you use nodejs and when should you use mongodb?</h4>
                <p>Node JS is a JavaScript engine. The code of JavaScript is written using the node JS and it can send request to Savar site. And MongoDB is the server site. It is based on JavaScript. If we want to store any data we can keep it through API in MongoDB and to keep this data from client site we need Node JS because to send and read data in Savar we have to run JavaScript code through Node JS. So when it comes to keeping and taking data in MongoDB, you have to run JavaScript code through node JS.</p>
                <h4>Differences between sql and nosql databases?</h4>
                <h6>SQL</h6>
                <p>SQL is commonly called relational database. Based on the SQL table. Here the data is beautifully organized. If there is a lot of data in an application, then SQL is the best way to save data. All the data structures of the database are the same. This is a very powerful language for server sites.</p>
                <h6>NoSQL</h6>
                <p>NoSQL is usually the complete opposite of SQL. This is a non-relational database. The database table here is not based on this. Here, data is stored through value. Which makes it look like a complete JavaScript object</p>
            </div>
        </div>
    );
};

export default Blog;