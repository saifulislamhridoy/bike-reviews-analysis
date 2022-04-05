import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='bg-blue-300 p-4 m-10 rounded'>
                <h2 className='text-xl font-bold'>WHAT IS CONTEXT API?</h2>
                <p>The react context api is a way for a react app to effectively produce gloabl vaiable that can be passes around , This is the alternative to prop drilling or moving props grand parent to child to carent and so pn. react.createContext() is all you need.It returns a consumer and probider.The context api is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.</p>
            </div>
            <div className='bg-blue-300 p-4 m-10 rounded'>
                <h2 className='text-xl font-bold'>WHAT IS SIMANTIC TAG?</h2>
                <p>Semantic html tags allow you to add meaning to your markup so that search engine screen readers and web browser can make sense of it. by defult, user agent reads your content it doesn't understand the context and meaning. Semantic html tags let you serve structure content to your users, which is espacially important for on-page SEO and accessibility. semantic tags existed in earlier html versions, the html 5 spacifications added sevaral new semantic element to the syntax both on the block and inline levels.</p>
            </div>
            <div className='bg-blue-300 p-4 m-10 rounded'>
                <h2 className='text-xl font-bold'>DIFFERENCE BETWEEN BLOCK ELEMENT AND INLINE BLOCK ELEMENTS ??</h2>
                <p>Block elements: They conseme the entire width available irrespective of their suficiency. They always start in a new line and have top and bottom margins. it does not contain any other elements next to it.</p>
                <p>Inline elements: inline elements occupy only suficient width required.nnline elements don't start in a new line.inline elements allow other inline element to sit beahind</p>
            </div>
        </div>
    );
};

export default Blogs;