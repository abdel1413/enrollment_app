import React, { useState } from "react";
import "./AdvanceCmp.css";

import {
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaPhone,
} from "react-icons/fa";
import "tachyons";
import Modal from "react-modal";
import advCmpInfo from "./AdvCmpInfo";

const AdvancedCmps = ({ isChecked, setIsChecked, advCourse }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCmp, setSelectedCmp] = useState({});

  Modal.setAppElement("#root");

  // useEffect(()=>{
  //     const displayCourses =()=>{
  //         axios.get('http://localhost:3001/advancedcourses')
  //              .then((response)=>{
  //                   setAdvCourse(response.data)
  //                   setIsChecked(new Array(response.data.length).fill(false))
  //          })
  //        }
  //        displayCourses()
  // },[]);

  const handCheckBox = (position) => {
    // console.log({ isChecked });
    const updateState = isChecked.map((item, index) => {
      if (index === position) {
        return item ? false : advCourse[position];
      } else {
        return item;
      }
    });
    // console.log("Jeff");
    // console.log(updateState);

    setIsChecked(updateState);
    // console.log(updateState)

    // const totalItemSelected = updateState.reduce(
    //     (total, currentState)=>{
    //         if(currentState==true){
    //           return total + 1;
    //         }
    //         return total
    //     },
    //     0
    // )
    // setTotalItems(totalItemSelected)
  };

  return (
    <div className="advancecourses">
      <div className="list">
        {advCourse.map((value, index) => {
          return (
            <div className=" shadow-5 courses" key={index}>
              <div className="checkbxstyle" key={index}>
                <input
                  className="checkbxstyle"
                  type="checkbox"
                  checked={isChecked[index] ? true : false}
                  onChange={() => handCheckBox(index)}
                />
              </div>

              <h3> CLASS: {value.Classe}</h3>
              <h3>NAME: {value.Course_Name}</h3>
              <h3>UNIT: {value.Course_Unit}</h3>

              <button
                className="modalbtn-float-right"
                onClick={() => {
                  setSelectedCmp(value);
                  setIsModalOpen(true);
                }}
              >
                +
              </button>
            </div>
          );
        })}

        {isModalOpen && (
          <div className="modal">
            <Modal
              isOpen={isModalOpen}
              className="mymodal"
              overlayClassName="myoverlay"
              closeTimeoutMS={500}
            >
              <div className="modalcontainer">
                <p>{selectedCmp.Classe}</p>
                <p>{selectedCmp.Course_Name}</p>
                <p>Prerequisites:</p>
                <p>{advCmpInfo[selectedCmp.Classe].prerequisites}</p>
                <p>Professors:</p>
                <p>
                  {advCmpInfo[selectedCmp.Classe].professors.map(
                    (profnames) => (
                      <div>{profnames}</div>
                    )
                  )}
                </p>
              </div>
              <button
                className="closemodalbtn-float-right"
                onClick={() => setIsModalOpen(false)}
              >
                _
              </button>
            </Modal>
          </div>
        )}
      </div>

      <div className="footer  hover-bg-light-gray shadow-5">
        <FaPhone size="2em" />
        <p className="hover grow">: 347-518-2522 </p>
        <a className="hover grow " href="https://github.com/abdel1413">
          {" "}
          <FaGithub size="2rem" />{" "}
        </a>
        <a
          className="hover grow "
          href=" https://www.linkedin.com/in/aboulaye-tchakoura/"
        >
          <FaLinkedin size="2rem" />
        </a>
        <a className="hover grow " href="aboulayet63@gmail.com">
          {" "}
          <FaEnvelope size="2rem" />{" "}
        </a>
        <a
          className="hover grow "
          href="https://www.facebook.com/aboulaye.tchakoura"
        >
          <FaFacebook size="2rem" />
        </a>
      </div>
    </div>
  );
};

export default AdvancedCmps;
