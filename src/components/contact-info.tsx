import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { baseApi } from "../api/base-api";
import { useFetchResource }from "../hooks/useFetchResource";


type ContactInfoProps = {
  id: string;
}

const ContactInfo = ({ id }: ContactInfoProps) => {
  
  const {resource: contacts, loading} = useFetchResource(`${baseApi}/find_schools/${id}`)

  

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
