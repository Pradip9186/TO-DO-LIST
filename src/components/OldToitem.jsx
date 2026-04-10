import React from 'react';

const AddItem = () => {

     const myDelete = () => {
          console.log("Delete button clicked");
     }
     const myApproved = () => {
          console.log("Approved button clicked");
     }

     const mydata = [
          {
               name: "Buy clothes",
               date: "04/10/2025",
               status: "Pending"
          },
          {
               name: "Go to Office",
               date: "13/12/2025",
               status: "Mark As Approved"
          },
          {
               name: "Go to Gym",
               date: "20/11/2025",
               status: "Mark As Approved"
          },

     ]
     return (
          <div className="flex flex-col gap-4 w-full">
               {
                    mydata.map((item, index) => (
                         <div key={index} className="grid grid-cols-4 gap-4 items-center">
                              <p className="col-span-1">{item.name}</p>
                              <p className="text-gray-500">{item.date}</p>

                              <button
                                   onClick={myDelete}
                                   className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                              >
                                   Delete
                              </button>

                              <button
                                   onClick={myApproved}
                                   className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                              >
                                   {item.status}
                              </button>
                         </div>
                    ))
               }
          </div>
     );
};

export default AddItem;