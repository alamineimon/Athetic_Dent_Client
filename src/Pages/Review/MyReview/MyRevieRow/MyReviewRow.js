import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyReviewRow = ({ rev, handleDelete }) => {
  const { _id, serviceName, customerName, message, photoURL } = rev;
  console.log(rev);
  return (
    <div>
      <div className="container flex mt-6 flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-blue-900 dark:text-gray-100">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src={photoURL}
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">{customerName}</h4>
              <span className="text-xs dark:text-gray-400">{serviceName}</span>
            </div>
          </div>
          <div className="flex flex-col ">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-square btn-outline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <button className="btn mt-2 btn-ghost bg-none rounded-lg">Edit</button>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default MyReviewRow;