import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthContextProvider/ContextProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyAddedSpotList = () => {
  const { user } = useContext(AuthContext);
  const loadedAllAddedSpotData = useLoaderData();
  const [newAllAddedSpotData,setNewAllAddedSpotData]=useState(loadedAllAddedSpotData);
  const mySpotListData = newAllAddedSpotData.filter(
    (data) => data.email === user.email
  );

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure to delete?",
      text: "This Data are not available in the interface!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tropical-tours-web-server.vercel.app/spots/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const filteredlist=newAllAddedSpotData.filter(data=>data._id!==_id)
              setNewAllAddedSpotData(filteredlist)
            }
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto mb-12 mt-12">
      <Helmet>
        <title>Tropical Tours | My Spot</title>
      </Helmet>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-rancho text-[#262424] font-semibold">
          Here is my added spot list data
        </h2>
      </div>
      <div className="border bg-[#f3f9fc] p-4">
        <div className="overflow-x-auto ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Spot Name</th>
                <th>Location</th>
                <th>Travel Time</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mySpotListData.map((listData, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{listData.spot}</td>
                  <td>{listData.location}</td>
                  <td>{listData.time}</td>
                  <td>
                    <Link to={`/updateSpotData/${listData._id}`}>
                      <button className="btn btn-xs">Update</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(`${listData._id}`)}
                      className="btn btn-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAddedSpotList;
