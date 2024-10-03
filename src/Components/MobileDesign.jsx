import React from "react";

const Design = ()=>{
    return(
        <div className="bg-blue-950 flex  items-center justify-between lg:items-end lg:items-row">
            <div className="max-w-7xl w-full mx-auto flex flex-col lg:w-1/2 px-6 py-12px-6 py-12 ">
                <div className="ml-56 space-y-8">
                    <h1 className="text-white font-bold text-4xl mb-6 leading-tight">Make and receive payments with ease.</h1>
                </div>
                <div className="ml-56 ">
                    <h4 className="text-white text-2xl font-semibold mb-3">
                    Popular payments, happy customers.
                    </h4>
                </div>
                <div className="ml-56 ">
                <p className="text-white text-lg mb-6 leading-relaxed ">
                Help maximise conversion and reduce cart abandonment with a wide range of digital payment options, customisable in one account.
                </p>
                
                </div>
                <div className="ml-56">
                <button className="px-4 py-2 border rounded-full test-sm font-semibold border-blue-600 hover:text-blue-600 bg-sky-600 text-white">
                    Optimise Checkout
                </button>
                </div>
               
                <div className="ml-56 mt-8">
                    <h4 className="text-white text-2xl font-semibold mb-3">
                    Invoice and get paid fast.
                    </h4>
                    </div>
                    <div  className="ml-56">
                    <p className="text-white text-lg mb-6 leading-relaxed">
                    Send unlimited invoices that customers can pay even if they don’t have a PayPal account – with Seller Protection from fraud and unauthorised transactions.3

Send an Invoice
                    </p>
                    </div>
                   
                    <div className="ml-56 ">
                    <button className="px-4 py-2 border rounded-full test-sm font-semibold border-blue-600 hover:text-blue-600 bg-sky-600 text-white">
                        Send an Invoice
                    </button>
                    </div>
                    
                    
                
            </div>

            <div className="mt-[10] flex justify-center mr-80 ">
                <img className="max-w-xs lg:max-w-md  lg:self-end " 
                src="https://www.paypalobjects.com/marketing/web23/in/home/paypal-for-business-m3-4.png" alt="appImage"/>
            </div>
        </div>
    )
};

export default Design;