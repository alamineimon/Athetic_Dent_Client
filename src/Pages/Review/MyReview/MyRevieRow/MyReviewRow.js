import React, { useEffect, useState } from 'react';

const MyReviewRow = ({ rev }) => {
    const { service, _id, serviceName, customerName, message, photoURL } = rev;
    console.log(rev);
    return (
      <div>
        <div className="container flex mt-6 flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-blue-900 dark:text-gray-100">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4 mx-auto">
              <div>
                <img
                  src={photoURL}
                  alt=""
                  className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                />
              </div>
              <div>
                <h4 className="font-bold">{customerName}</h4>
                <span className="text-xs dark:text-gray-400">
                  {serviceName}
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm dark:text-gray-400">
            <p>{message}</p>
          </div>
        </div>
      </div>
    );
}

export default MyReviewRow;