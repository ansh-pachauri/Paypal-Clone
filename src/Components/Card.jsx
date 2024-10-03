import React from "react";
import { Card } from "flowbite-react";


const Cards = () => {
    return (
        <>
            <div className="text-center mt-9 mb-10">
                <h1 class="text-blue-950 font-bold text-4xl ">Find more ways to shop </h1>
                <h1 class="text-blue-950 font-bold text-4xl ">with PayPal for you.</h1>

            </div>
            <div className="flex justify-around ml-6 mr-6">
                <Card
                    className="max-w-sm"
                    imgAlt="Card1"
                    imgSrc="https://www.paypalobjects.com/marketing/web23/in/home/shopping-mall-m3-1.jpg"
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        The world is
                        your shopping mall.
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        From big brands to little boutiques, you can shop safely at over millions of online stores with PayPal.
                    </p>
                    <button class="px-4 py-2 border rounded-full test-sm font-semibold border-blue-600 hover:text-blue-600 bg-sky-600 text-white">Shop Now</button>
                </Card>

                <Card
                    className="max-w-sm"
                    imgAlt="Card2"
                    imgSrc="https://www.paypalobjects.com/marketing/web23/in/home/preferred-card-m3-2.jpg"
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Pay with your
                        preferred card.
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Link all your cards and choose which one to use at checkout. Shopping online has never been this easy. You can also keep earning rewards from your favourite cards.¹
                    </p>
                    <button class="px-4 py-2 border rounded-full test-sm font-semibold border-blue-600 hover:text-blue-600 bg-sky-600 text-white">Link a Card Now</button>
                </Card>

                <Card
                    className="max-w-sm"
                    imgAlt="Card3"
                    imgSrc="https://www.paypalobjects.com/marketing/web23/in/home/online-confidence-m3-3.jpg"
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Shop online
                        with confidence.
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Shop online with confidence – with 24/7 fraud monitoring and Buyer Protection² on eligible purchases. Terms and limitations apply.
                        Find Out More


                    </p>
                    <button class="px-4 py-2 border rounded-full test-sm font-semibold border-blue-600 hover:text-blue-600 bg-sky-600 text-white">Find Out More</button>
                </Card>
            </div>

        </>
    )
};

export default Cards;