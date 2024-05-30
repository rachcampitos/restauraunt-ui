// src/components/Admin.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createDish, deleteDish, updateDish } from "../features/dishesSlices";

const Admin = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");
  const dispatch = useDispatch();

  const handleCreate = () => {
    dispatch(
      createDish({ id: Date.now().toString(), name, description, price, photo })
    );
    setName("");
    setDescription("");
    setPrice("");
    setPhoto("");
  };

  const handleUpdate = () => {
    dispatch(updateDish({ id, name, description, price, photo }));
    setId("");
    setName("");
    setDescription("");
    setPrice("");
    setPhoto("");
  };

  const handleDelete = () => {
    dispatch(deleteDish({ id }));
    setId("");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Admin Panel</h2>
      <div className="mb-4">
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Dish ID (for update/delete)"
          className="border p-2 rounded mb-2"
        />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Dish Name"
          className="border p-2 rounded mb-2"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Dish Description"
          className="border p-2 rounded mb-2"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Dish Price"
          className="border p-2 rounded mb-2"
        />
        <input
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Dish Photo URL"
          className="border p-2 rounded mb-2"
        />
      </div>
      <div className="flex space-x-2">
        <button
          onClick={handleCreate}
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          Create Dish
        </button>
        <button
          onClick={handleUpdate}
          className="bg-yellow-500 text-white py-2 px-4 rounded"
        >
          Update Dish
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          Delete Dish
        </button>
      </div>
    </div>
  );
};

export default Admin;
