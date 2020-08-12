import React, { useState, useEffect } from "react";
import Usernavbar from "./Usernavbar";
import Axios from "axios";
import { Table, Button } from "reactstrap";

export default function Userlayout() {
  const [user, setUser] = useState({ Userdetails: [] });
  //const [arr, setArr] = useState([]);

  const renderTableHeader = () => {
    let header = Object.keys(user.Userdetails[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };
  const renderTableData = () => {
    return user.Userdetails.map((user, index) => {
      const {
        PhoneNumber,
        email,
        firstName,
        lastName,
        password,
        role,
        username,
        _id,
      } = user; //destructuring
      return (
        <tr key={_id}>
          <td>{_id}</td>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{email}</td>
          <td>{PhoneNumber}</td>
          <td>{role}</td>
          <td>{username}</td>
          <td>{password}</td>
          <Button color="danger">Delete</Button>
          <Button color="secondary">Edit</Button>
        </tr>
      );
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      let URI = "http://localhost:5000/users/details";
      const result = await Axios.get(URI, {
        responseType: "json",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      setUser(result.data);
    };
    fetchData();
  }, []);

  // Object.entries(user);
  //console.log(user);
  // for (let items of Object.keys(user)) {
  //   console.log(items);
  // }
  //console.log(Object.keys(user));

  // console.log(index);
  // console.log(user.Userdetails[0]);
  // console.log(arr);
  // user.forEach((user, index, arr) => {
  //   for (let i in user.Userdetails) {
  //     setArr([user.Userdetails[i].email]);
  //   }
  // });
  console.log(user);
  return (
    user.Userdetails.length > 0 && (
      <div>
        <Usernavbar />
        <Table>
          <tbody>
            <tr>{renderTableHeader()}</tr>
            {renderTableData()}
            {/* {user.Userdetails.map((item) => (
              <li key={item._id}>
                <h1>{item.firstName}</h1>
              </li>
            ))} */}
          </tbody>
        </Table>
        {/* <Usernavbar></Usernavbar> */}

        {/* {user.forEach((user, index, arr) => {
        for (let i in user.Userdetails) {
          return <h1>{user.Userdetails[i].email}</h1>;
        }
      })} */}
      </div>
    )
  );
}
