"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import UserChatBoxContent from "../dashboard-message/UserChatBoxContent";
import Drawer from '@mui/material/Drawer';
import ChatBoxForm from "../dashboard-message/ChatBoxForm";
const propertyData = [
  {
    id: 1,
    title: "Equestrian Family Home",
    imageSrc: "/images/listings/list-1.jpg",
    location: "California City, CA, USA",
    price: "$14,000/mo",
    datePublished: "December 31, 2022",
    status: "Pending",
  },
  {
    id: 2,
    title: "Luxury villa in Rego Park",
    imageSrc: "/images/listings/list-2.jpg",
    location: "California City, CA, USA",
    price: "$14,000/mo",
    datePublished: "December 31, 2022",
    status: "Published",
  },
  {
    id: 3,
    title: "Villa on Hollywood Boulevard",
    imageSrc: "/images/listings/list-3.jpg",
    location: "California City, CA, USA",
    price: "$14,000/mo",
    datePublished: "December 31, 2022",
    status: "Processing",
  },
  {
    id: 4,
    title: "Equestrian Family Home",
    imageSrc: "/images/listings/list-4.jpg",
    location: "California City, CA, USA",
    price: "$14,000/mo",
    datePublished: "December 31, 2022",
    status: "Pending",
  },
  {
    id: 5,
    title: "Luxury villa in Rego Park",
    imageSrc: "/images/listings/list-5.jpg",
    location: "California City, CA, USA",
    price: "$14,000/mo",
    datePublished: "December 31, 2022",
    status: "Published",
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Pending":
      return "pending-style style1";
    case "Published":
      return "pending-style style2";
    case "Processing":
      return "pending-style style3";
    default:
      return "";
  }
};

const PropertyDataTable = () => {
  const [showCalendlyDialog, setshowCalendlyDialog] = useState(false)
  const [showLoginDialog, setshowLoginDialog] = useState(false)
  const toggleDrawer = () => {
    // if(isLogin === true){
    setshowCalendlyDialog(!showCalendlyDialog)
    // }else{
    //   console.log('showing login model')
    //   // redirect to login or open login modal
    //   setshowLoginDialog(true)
    // }

  };
  return (
    <table className="table-style3 table at-savesearch">
      <thead className="t-head">
        <tr>
          <th scope="col">Listing title</th>
          <th scope="col">Date Published</th>
          <th scope="col">Status</th>
          <th scope="col">View</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody className="t-body">
        {propertyData.map((property) => (
          <tr key={property.id}>
            <th scope="row">
              <Drawer
                anchor="right"
                open={showCalendlyDialog}
              >
                <div className="col-lg-6 col-xl-7 col-xxl-8">
                  <div className="message_container mt30-md">
                    <div className="user_heading px-0 mx30">
                      <div className="wrap">
                        <span className="contact-status online" />
                        <Image
                          width={50}
                          height={50}
                          className="img-fluid mr10"
                          src="/images/inbox/ms3.png"
                          alt="ms3.png"
                        />
                        <div className="meta d-sm-flex justify-content-sm-between align-items-center">
                          <div className="authors">
                            <h6 className="name mb-0">Arlene McCoy</h6>
                            <p className="preview">Active</p>
                          </div>
                          <div>
                            <a
                              className="text-decoration-underline fz14 fw600 dark-color ff-heading"
                              href="#"
                            >
                              Delete Conversation
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End .user_heading */}

                    <div className="inbox_chatting_box">
                      <ul className="chatting_content">
                        <UserChatBoxContent />
                      </ul>
                    </div>
                    {/* End inbox-chatting */}

                    <div className="mi_text">
                      <div className="message_input">
                        <ChatBoxForm/>
                      </div>
                    </div>
                    {/* End button */}
                  </div>
                </div>
              </Drawer>
              <div className="listing-style1 dashboard-style d-xxl-flex align-items-center mb-0">
                <div className="list-thumb">
                  <Image
                    width={110}
                    height={94}
                    className="w-100"
                    src={property.imageSrc}
                    alt="property"
                    onClick={() => toggleDrawer()}
                  />
                </div>
                <div className="list-content py-0 p-0 mt-2 mt-xxl-0 ps-xxl-4">
                  <div className="h6 list-title">
                    <Link href={`/single-v1/${property.id}`}>{property.title}</Link>
                  </div>
                  <p className="list-text mb-0">{property.location}</p>
                  <div className="list-price">
                    <a href="#">{property.price}</a>
                  </div>
                </div>
              </div>
            </th>
            <td className="vam">{property.datePublished}</td>
            <td className="vam">
              <span className={getStatusStyle(property.status)}>
                {property.status}
              </span>
            </td>
            <td className="vam">{property.datePublished}</td>
            <td className="vam">
              <div className="d-flex">
                <button
                  className="icon"
                  style={{ border: "none" }}
                  data-tooltip-id={`edit-${property.id}`}
                >
                  <span className="fas fa-pen fa" />
                </button>
                <button
                  className="icon"
                  style={{ border: "none" }}
                  data-tooltip-id={`delete-${property.id}`}
                >
                  <span className="flaticon-bin" />
                </button>

                <ReactTooltip
                  id={`edit-${property.id}`}
                  place="top"
                  content="Edi"
                />
                <ReactTooltip
                  id={`delete-${property.id}`}
                  place="top"
                  content="Delete"
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PropertyDataTable;
