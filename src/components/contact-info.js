import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";

const ContactInfo = ({ id }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(`https://in2scope-api.onrender.com/find_schools/${id}`);
        setContacts(response.data.contacts);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, [id]);

  if (loading) {
    return (
      <div>
        <Skeleton variant="text" width={210} height={40} />
        <Skeleton variant="text" width={210} height={40} />
        <Skeleton variant="text" width={210} height={40} />
      </div>
    );
  }

  return (
    <div>
      {contacts.map((contact, index) => (
        <div key={index}>
          <p>Email: {contact.email || "--"}</p>
          <p>First Name: {contact.first_name || "--"}</p>
          <p>Last Name: {contact.last_name || "--"}</p>
          <p>Position: {contact.position || "--"}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
