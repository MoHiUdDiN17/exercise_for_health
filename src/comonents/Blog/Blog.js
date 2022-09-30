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
                                How React Works ?
                            </button>
                        </h2>
                        <div id="collapseOne" classNameName="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>1.The scope of a var variable is functional scope.On the other hand,The scope of a
                                    let and const variable is block scope.</p>
                                <p>2.var can be updated and re-declared into the scope.let can be updated but cannot be
                                    re-declared into the scope.On the other hand,const cannot be updated or re-declared
                                    into the scope.</p>
                                <p>3.var can be accessed without initialization as its default value is “undefined”.let
                                    cannot be accessed without initialization otherwise it will give ‘referenceError’.On
                                    the other hand,const cannot be accessed without initialization, as it cannot be
                                    declared without initialization.</p>
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