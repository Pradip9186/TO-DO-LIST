import React from 'react';

const AddItem2 = () => {
     return (
          <div className="grid grid-cols-3 gap-4 my-4 items-center">
               <p>Go to Office</p>
               <p className="text-gray-500">13/12/2025</p>
               <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    Delete
               </button>
          </div>
     );
};

export default AddItem2;