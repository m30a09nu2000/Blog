import React, { useEffect, useState } from "react";
import { userService } from "../apiUrls";
import "./UserData.css";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function UsersData() {
  const [userData, setUserData] = useState([]);

  const [singleUser, setSingleUser] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleOpen = async (id) => {
    console.log(id);
    try {
      const res = await userService.singleUser(id);
      setSingleUser(res.data);
      setTimeout(() => {
        setOpen(true);
      }, 100);
    } catch (error) {
      console.log(error);
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const fetchUsers = async () => {
    try {
      const res = await userService.getAllUser();
      setUserData(res.data.users);
      console.log(res.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.gender}</td>
                <td>
                  <button onClick={() => handleOpen(item.id)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {singleUser && (
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {singleUser.firstName} {singleUser.lastName}
            </Typography>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default UsersData;
