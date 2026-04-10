import React, { useState } from 'react';

const AddToDo = ({ addTodo }) => {
     const [name, setName] = useState('');
     const [date, setDate] = useState('');

     const handleAdd = () => {
          addTodo(name, date);
          setName('');
          setDate('');
     };

     return (
          <div className="grid grid-cols-3 gap-4 my-8">
               <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border px-4 py-2 rounded-lg"
                    placeholder="Add ToDo here"
               />

               <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border px-4 py-2 rounded-lg"
               />

               <button
                    onClick={handleAdd}
                    className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
               >
                    Add
               </button>
          </div>
     );
};

export default AddToDo;