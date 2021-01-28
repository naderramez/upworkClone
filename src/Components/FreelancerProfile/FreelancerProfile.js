import "./FreelancerProfile.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FreelancerProfile = () => {
  return (
    <div id="freelancer-profile-body" className="p-lg-4">
      <div className="container bg-white pb-5 col-12 col-lg-10 rounded">
        <div className="row col-12 d-flex">
          <div className="my-4 mr-0 col-3 col-md-2 col-lg-1 p-0">
            <img src="https://via.placeholder.com/60" alt="profile pic" className="rounded-circle offset-3"/>
          </div>
          <div className="col-9 col-lg-11 p-0 d-flex mt-4 flex-wrap">
            <div className="col-12 col-lg-6 h4 mb-0">User Name</div>
            <div className="col-6 text-right d-none d-lg-block">
              <button id="profile-settings-btn">Profile Settings</button>
            </div>
            <div className="col-6">Cairo, Egypt</div>
          </div>
        </div>
        <hr/>
        <div className="row col-12 m-0 p-0 d-flex flex-column-reverse flex-lg-row">
          {/* Left Section */}
          <div className="col-12 col-lg-4 border-right">
            <div className="row p-2 col-12">
              <span className="h5 pr-4">View Profile</span>
              <span className="pr-3" role="button">
                <FontAwesomeIcon icon="plus" size="lg" />
              </span>
              <span role="button">
                <FontAwesomeIcon icon="pencil-alt" size="lg" />
              </span>
            </div>
            <div className="row p-2 col-12">
              Front-End Development
            </div>
            <hr className="" />
            <div className="row p-2 col-12">
              <span className="h5 pr-4">Languages</span>
              <span className="pr-3" role="button">
                <FontAwesomeIcon icon="plus" size="lg" />
              </span>
              <span role="button">
                <FontAwesomeIcon icon="pencil-alt" size="lg" />
              </span>
            </div>
            <div className="row p-2 col-12 mb-3">
              <p><span className="h5">English:</span> Fluent</p>
            </div>
            <div className="row p-2 col-12">
              <span className="h5 pr-4">Education</span>
              <span role="button">
                <FontAwesomeIcon icon="pencil-alt" size="lg" />
              </span>
            </div>
            <div className="row px-2 pt-2 col-12">
              <div className="col-8 pl-0">
                <div className="row h5 col-12">Information Technology Institute</div>
              </div>
              <div className="col-4">
                <span className="pr-4" role="button">
                  <FontAwesomeIcon icon="pencil-alt" size="lg" />
                </span>
                <span role="button">
                  <FontAwesomeIcon icon="trash-alt" size="lg" />
                </span>
              </div>
            </div>
            <div className="row px-2 col-12">
              <div className="row col-12">Full Stack Web Development using MEA/RN 2020-2021</div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-12 col-lg-8 px-0 px-lg-3">
            <div className="row p-3 col-12">
              <div className="col-12 col-lg-7 p-0">
                <p className="h5">
                  Frontend Web Developer
                  <span className="pl-3" role="button">
                    <FontAwesomeIcon icon="pencil-alt" size="lg" />
                  </span>
                </p>
              </div>
              <div className="col-12 col-lg-5 h5 text-lg-right p-0">
                $10.00/hr
                <span className="pl-3" role="button">
                  <FontAwesomeIcon icon="pencil-alt" size="lg" />
                </span>
              </div>
            </div>
            <div className="row col-12 p-0 m-0">
              <div className="col-11 p-0">
                lorem ipsum sadkf jiwe asdkflj ioawef aaskldjf ioasdfw lorem ipsum sadkf jiwe asdkflj ioawef aaskldjf ioasdfw lorem ipsum sadkf jiwe asdkflj ioawef aaskldjf ioasdfw lorem ipsum sadkf jiwe asdkflj ioawef aaskldjf ioasdfw.
              </div>
              <div className="col-1 p-0">
                <span className="pl-1 pl-lg-3" role="button">
                  <FontAwesomeIcon icon="pencil-alt" size="lg" />
                </span>
              </div>
            </div>
            <hr/>
            <div className="row col-12 h5">
              Portfolio
              <span className="pl-3" role="button">
                <FontAwesomeIcon icon="plus" size="lg" />
              </span>
            </div>
            <div className="row col-12">
              <div className="col-12 col-lg-6 p-0">
                <div className="col-12 p-0">
                  <img className="col-12 px-0" role="button" src="https://images.unsplash.com/photo-1506452985227-70bc78385fb0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="portfolio img" width="200px" />
                </div>
                <div className="col-12 p-0 portfolio-item"><strong role="button">Project 1</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FreelancerProfile;