import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="container my-5">
                <h1 className="text-center">Frequently Asked Questions</h1>
            </div>
            <article className="container my-5">
                <div className="accordion px-5" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                How React.js Works ?
                            </button>
                        </h2>
                        <div id="collapseOne" classNameName="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                                    Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
                                    Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. </p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                What are the differences between Props and state ?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>
                                    <p>1.Syntax</p>
                                    The first and most obvious difference between arrow functions and regular functions is
                                    their syntax. Not only do they look different, but arrow functions also provide an
                                    implicit return shorthand and allow parenthesis around a single argument to be omitted.
                                </p>
                                <p>
                                    <p>2.this value</p>
                                    Inside a regular function, execution context (i.e. the value of this) is dynamic. This
                                    means that the value of this depends on how the function was invoked (simple invocation,
                                    method invocation, indirect invocation or constructor invocation). On the other hand, an
                                    arrow function does not define its own execution context. This results in an arrow
                                    function's this being resolved lexically (i.e. the scope in which the arrow function was
                                    defined).
                                </p>
                                <p>
                                    <p>3.Methods</p>
                                    Due to arrow functions not defining their own execution context, they're not well-suited
                                    for usage as methods. However, thanks to the className fields proposal, arrow functions can
                                    be used as methods inside classNamees, if your environment supports it.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                What are the usages of useEffect other than data loading?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>
                                    Template strings are a powerful feature of modern JavaScript released in ES6. It
                                    lets us insert/interpolate variables and expressions into strings without needing to
                                    concatenate like in older versions of JavaScript. It allows us to create strings
                                    that are complex and contain dynamic elements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Blog;