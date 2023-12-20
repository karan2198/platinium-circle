import { useData } from "@/context/DataContext";
import listings from "@/data/listings";
import React from "react";


const PropertyHeader = ({id}) => {
  const { defaultData}=useData();
  // if(defaultData.length>0){ 
  
    // //console.log(defaultData,"ingallery")
    const data = defaultData.filter((elm) => elm.id == id)[0] || listings[0];
    // //console.log(data.gallery)

  return (
    <>
      <div className="col-lg-8">
        <div className="single-property-content mb30-md">
          <h2 className="sp-lg-title">{`${data.property_subtype} ${data.property_type} in ${data.city}`}</h2>
          <div className="pd-meta mb15 d-md-flex align-items-center">
            <p className="text fz15 mb-0 bdrr1 pr10 bdrrn-sm">
              {data.city}
            </p>
          </div>
          <div className="property-meta d-flex align-items-center">
            <a
              className="ff-heading text-thm fz15 bdrr1 pr10 bdrrn-sm"
              href="#"
            >
              <i className="fas fa-circle fz10 pe-2" />
              For {data.forRent ? 'rent':'sale'}
            </a>
            <a
              className="ff-heading bdrr1 fz15 pr10 ml10 ml0-sm bdrrn-sm"
              href="#"
            >
              {/* <i className="far fa-clock pe-2" />{Number(new Date().getFullYear()) - Number(data.yearBuilding)} years ago */}
              <i className="far fa-clock pe-2" />{data.posted_on} 
            </a>
            <a className="ff-heading ml10 ml0-sm fz15" href="#">
              <i className="flaticon-fullscreen pe-2 align-text-top" />
              8721
            </a>
          </div>
        </div>
      </div>
      {/* End .col-lg--8 */}

      <div className="col-lg-4">
        <div className="single-property-content">
          <div className="property-action text-lg-end">
            <div className="d-flex mb20 mb10-md align-items-center justify-content-lg-end">
              <a className="icon mr10" href="#">
                <span className="flaticon-like" />
              </a>
              <a className="icon mr10" href="#">
                <span className="flaticon-new-tab" />
              </a>
              <a className="icon mr10" href="#">
                <span className="flaticon-share-1" />
              </a>
              <a className="icon" href="#">
                <span className="flaticon-printer" />
              </a>
            </div>
            <h3 className="price mb-0">{data.display_price}</h3>
            {/* <p className="text space fz15">${(Number(data.price.split('$')[1].split(',').join(''))/data.sqft).toFixed(2)}/sq ft</p> */}
            <p className="text space fz15">{data.area} {data.area_unit}</p>
          </div>
        </div>
      </div>
      {/* End .col-lg--4 */}
    </>
  );
};

export default PropertyHeader;
