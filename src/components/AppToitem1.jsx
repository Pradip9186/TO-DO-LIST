import React from 'react';

const AddItem1 = () => {
     return (
          <div className="grid grid-cols-3 gap-4 my-4 items-center">
               <p>Buy clothes</p>
               <p className="text-gray-500">04/10/2025</p>
               <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    Delete
               </button>
               <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                    Mark as Approved
               </button>
          </div>
     );
};

export default AddItem1;