import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobZee Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
                Create Your account and search for the jobs that suits you 
                if you are job seeker or find eligible candidates for your job positions if you are an employer
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
              find jobs that suits you 
                if you are job seeker or post jobs if you are an employer
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
                Apply for a job that suits your skills or review 
                applications and recruit eligible candidates
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;