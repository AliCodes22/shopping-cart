import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

const OrderConfirmation = () => {
  const uuid = uuidv4();
  const [, setCartQuantity] = useOutletContext();

  useEffect(() => {
    setCartQuantity(0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 to-white px-6">
      <div className="bg-white rounded-3xl shadow-lg max-w-md w-full p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-100 mx-auto">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          Order Confirmed!
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order ID is:
        </p>

        <div className="bg-gray-100 rounded-md py-3 px-5 font-mono text-lg text-gray-800 break-words select-all">
          {uuid}
        </div>

        <p className="mt-6 text-sm text-gray-500">
          You will receive a confirmation email shortly. If you have any
          questions, please contact our support team.
        </p>
      </div>
    </div>
  );
};

export default OrderConfirmation;
