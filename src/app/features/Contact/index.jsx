import React from "react";
import "./style.scss";
import { FaMapMarker, FaPhoneAlt, FaMailBulk, FaSkype } from "react-icons/fa";
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps";
import { GrDiamond } from "react-icons/gr";
import Map from "./Map";
import ContactContent from "./components/ContactContent";
import ContactHeader from "./components/ContactHeader";

function ContactFeature(props) {
  const key = "AIzaSyA8KMc18WWbjQk5CGjG5zBAjM4Q_KuXe00";
  return (
    <div className="contact">
      <div className="contact-header">
        <ContactHeader />
      </div>
      <div className="contact-content" style={{ marginBottom: "50px" }}>
        <ContactContent />
      </div>
    </div>
  );
}

export default ContactFeature;
