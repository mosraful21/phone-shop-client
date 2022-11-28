import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllUser = () => {
    // const users = useLoaderData();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, [users]);

  // delete product
  const handleDelete = (user) => {
    fetch(`http://localhost:5000/users/${user?._id}`, {
      method: "DELETE",
      headers: {
      "content-type": "application/json",
    },
    })
      .then((res) => res.json())
  .then((data) => {
    if (data.acknowledged) {
      toast.success("User Deleted Successfully")
    }
  });
  };

return (
  <div>
    <h2 className="text-3xl font-bold my-5">All Users</h2>

    <div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user?.email}</td>
              <td>{user?.status === "Seller" ? "Seller" : "User"}</td>
              <th>
                <button
                  onClick={() => handleDelete(user)}
                  className="btn btn-error btn-sm"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
};

export default AllUser;