import React from 'react';

const AddItem = ({ todos, deleteTodo, toggleApprove }) => {
     return (
          <div className="flex flex-col gap-4 w-full">
               {todos.map((item) => (
                    <div
                         key={item.id}
                         className="grid grid-cols-4 gap-4 items-center"
                    >
                         <p className={item.approved ? "line-through text-gray-400" : ""}>
                              {item.name}
                         </p>

                         <p className="text-gray-500">{item.date}</p>

                         <button
                              onClick={() => deleteTodo(item.id)}
                              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                         >
                              Delete
                         </button>

                         <button
                              onClick={() => toggleApprove(item.id)}
                              className={`px-3 py-1 rounded text-white ${item.approved ? "bg-blue-500" : "bg-green-500"
                                   }`}
                         >
                              {item.approved ? "Approved" : "Pending"}
                         </button>
                    </div>
               ))}
          </div>
     );
};

export default AddItem;