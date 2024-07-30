// import { useEffect, useRef, useState } from "react";
// import FacilityService from "../../services/FacilityService";

// const FacilityForm = () => {
//  const [id, setId] = useState("");
//  const [name, setName] = useState("");
//  const [status, setStatus] = useState("");
//  const [description, setDescription] = useState("");
//  const [picture, setPicture] = useState("");
//  const [facilityData, setFacilityData] = useState({});

//  const classname = useRef();

//  useEffect(() => {
//   classname.id = "form-control";
//   classname.name = "form-control";
//   classname.status = "form-control";
//   classname.description = "form-control";
//   classname.picture = "form-control";
//  }, []);

//  function fnCreate() {
//   var facility = { name: "", status: "", description: "", picture: "" };
//   facility.name = name;
//   facility.status = status;
//   facility.description = description;
//   facility.picture = picture;

//   FacilityService.fnCreateFacility(facility)
//    .then((response) => {
//     console.log(response.data);
//    })
//    .catch((error) => {
//     console.log(error);
//    });
//  }

//  const fnUpdate = () => {
//   const updatedFacility = {};

//   if (name) updatedFacility.name = name;
//   if (status) updatedFacility.status = status;
//   if (description) updatedFacility.description = description;
//   if (picture) updatedFacility.picture = picture;

//   FacilityService.fnUpdateFacility(id, updatedFacility)
//    .then((response) => {
//     console.log("Facility updated:", response.data);
//    })
//    .catch((error) => {
//     console.error("Error updating facility:", error);
//    });
//  };

//  const loadFacilityData = () => {
//   FacilityService.fnGetFacilityById(id)
//    .then((response) => {
//     const facility = response.data;
//     setFacilityData(facility);
//     setName(facility.name);
//     setStatus(facility.status);
//     setDescription(facility.description);
//     setPicture(facility.picture);
//    })
//    .catch((error) => {
//     console.error("Error loading facility data:", error);
//    });
//  };

//  function fnDelete() {
//   FacilityService.fnDeleteFacility(id)
//    .then((response) => {
//     console.log("response data delete is running");
//     console.log(response.data);
//    })
//    .catch((error) => {
//     console.log(error);
//    })
//    .catch((error) => {
//     console.log(error);
//    });
//  }

//  return (
//   <div>
//    <nav className="navbar navbar-expand-lg fixed-top">
//     <div className="container">
//      <a className="navbar-brand" href="index.html">
//       Apartment Facility
//      </a>
//      <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="offcanvas"
//       data-bs-target="#offcanvasNavbar"
//       aria-controls="offcanvasNavbar"
//       aria-label="Toggle navigation"
//      >
//       <span className="navbar-toggler-icon"></span>
//      </button>
//      <div
//       className="offcanvas offcanvas-end"
//       tabIndex="-1"
//       id="offcanvasNavbar"
//       aria-labelledby="offcanvasNavbarLabel"
//      >
//       <div className="offcanvas-header">
//        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
//         Apartment Facility
//        </h5>
//        <button
//         type="button"
//         className="btn-close"
//         data-bs-dismiss="offcanvas"
//         aria-label="Close"
//        ></button>
//       </div>
//       <div className="offcanvas-body">
//        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
//         <li className="nav-item">
//          <a className="nav-link active" aria-current="page" href="index.html">
//           Home
//          </a>
//         </li>
//         <li className="nav-item">
//          <a className="nav-link" href="page.html">
//           Signup
//          </a>
//         </li>
//        </ul>
//       </div>
//      </div>
//     </div>
//    </nav>

//    <section className="form d-flex align-items-center justify-content-center mt-5">
//     <div className="container">
//      <div className="row justify-content-center">
//       <div className="col-md-6">
//        <form className="p-4">
//         <h2>Create account</h2>
//         <h5 className="mb-4">Welcome to Manager Signup!</h5>
//         <input
//          type="text"
//          class="form-control mb-3"
//          placeholder="Id"
//          name="Id"
//          id="id"
//          className={classname.id}
//          onChange={(event) => {
//           setId(event.target.value);
//          }}
//         />
//         <button
//          class="form-control mb-3 btn btn-secondary"
//          onClick={loadFacilityData}
//         >
//          Load Facility Data
//         </button>
//         <input
//          type="text"
//          class="form-control mb-3"
//          placeholder="Name"
//          name="name"
//          id="name"
//          className={classname.name}
//          value={name}
//          onChange={(event) => {
//           setName(event.target.value);
//          }}
//         />
//         <input
//          type="text"
//          class="form-control mb-3"
//          placeholder="Status"
//          name="Status"
//          id="status"
//          className={classname.status}
//          value={status}
//          onChange={(event) => {
//           setStatus(event.target.value);
//          }}
//         />
//         <input
//          type="text"
//          class="form-control mb-3"
//          placeholder="Description"
//          name="description"
//          id="description"
//          className={classname.description}
//          value={description}
//          onChange={(event) => {
//           setDescription(event.target.value);
//          }}
//         />
//         <input
//          type="text"
//          class="form-control mb-3"
//          placeholder="Picture"
//          name="picture"
//          id="picture"
//          className={classname.picture}
//          value={picture}
//          onChange={(event) => {
//           setPicture(event.target.value);
//          }}
//         />
//         <input
//          type="button"
//          className="btn btn-dark me-3"
//          value="Create Facility"
//          onClick={fnCreate}
//         />
//         <input
//          type="button"
//          className="btn btn-dark me-3"
//          value="Update Facility"
//          onClick={fnUpdate}
//         />
//         <input
//          type="button"
//          className="btn btn-danger"
//          value="Delete Facility"
//          onClick={fnDelete}
//         />
//        </form>
//       </div>
//      </div>
//     </div>
//    </section>
//   </div>
//  );
// };
// export default FacilityForm;

// import { useEffect, useState } from "react";
// import FacilityService from "../../services/FacilityService";
// import { useNavigate } from "react-router-dom";

// const FacilityForm = () => {
//  const [id, setId] = useState("");
//  const navigation = useNavigate();
//  const [name, setName] = useState("");
//  const [status, setStatus] = useState("");
//  const [description, setDescription] = useState("");
//  const [picture, setPicture] = useState("");
//  const [facilityData, setFacilityData] = useState({});

//  useEffect(() => {
//   // Load initial data if needed
//  }, []);

//  function fnCreate() {
//   const facility = { name, status, description, picture };

//   FacilityService.fnCreateFacility(facility)
//    .then((response) => {
//     console.log(response.data);
//     navigation("/facilitycreationmessage");
//    })
//    .catch((error) => {
//     console.log(error);
//    });
//  }

//  const fnUpdate = () => {
//   const updatedFacility = { name, status, description, picture };

//   FacilityService.fnUpdateFacility(id, updatedFacility)
//    .then((response) => {
//     console.log("Facility updated:", response.data);
//     navigation("/facilityupdatemessage");
//    })
//    .catch((error) => {
//     console.error("Error updating facility:", error);
//    });
//  };

//  const loadFacilityData = () => {
//   FacilityService.fnGetFacilityById(id)
//    .then((response) => {
//     const facility = response.data;
//     setFacilityData(facility);
//     setName(facility.name);
//     setStatus(facility.status);
//     setDescription(facility.description);
//     setPicture(facility.picture);
//    })
//    .catch((error) => {
//     console.error("Error loading facility data:", error);
//    });
//  };

//  function fnDelete() {
//   FacilityService.fnDeleteFacility(id)
//    .then((response) => {
//     console.log("response data delete is running");
//     console.log(response.data);
//     navigation("/facilitydeletedmessage");
//    })
//    .catch((error) => {
//     console.log(error);
//    });
//  }

//  return (
//   <div>
//    <nav className="navbar navbar-expand-lg fixed-top">
//     <div className="container">
//      <a className="navbar-brand" href="index.html">
//       Apartment Facility
//      </a>
//      <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="offcanvas"
//       data-bs-target="#offcanvasNavbar"
//       aria-controls="offcanvasNavbar"
//       aria-label="Toggle navigation"
//      >
//       <span className="navbar-toggler-icon"></span>
//      </button>
//      <div
//       className="offcanvas offcanvas-end"
//       tabIndex="-1"
//       id="offcanvasNavbar"
//       aria-labelledby="offcanvasNavbarLabel"
//      >
//       <div className="offcanvas-header">
//        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
//         Apartment Facility
//        </h5>
//        <button
//         type="button"
//         className="btn-close"
//         data-bs-dismiss="offcanvas"
//         aria-label="Close"
//        ></button>
//       </div>
//       <div className="offcanvas-body">
//        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
//         <li className="nav-item">
//          <a className="nav-link active" aria-current="page" href="index.html">
//           Home
//          </a>
//         </li>
//         <li className="nav-item">
//          <a className="nav-link" href="page.html">
//           Signup
//          </a>
//         </li>
//        </ul>
//       </div>
//      </div>
//     </div>
//    </nav>

//    <section className="form d-flex align-items-center justify-content-center mt-5">
//     <div className="container">
//      <div className="row justify-content-center">
//       <div className="col-md-6">
//        <form className="p-4">
//         <h2>Create account</h2>
//         <h5 className="mb-4">Welcome to Manager Signup!</h5>
//         <input
//          type="text"
//          className="form-control mb-3"
//          placeholder="Id"
//          name="Id"
//          id="id"
//          value={id}
//          onChange={(event) => setId(event.target.value)}
//         />
//         <button
//          type="button"
//          className="form-control mb-3 btn btn-secondary"
//          onClick={loadFacilityData}
//         >
//          Load Facility Data
//         </button>
//         <input
//          type="text"
//          className="form-control mb-3"
//          placeholder="Name"
//          name="name"
//          id="name"
//          value={name}
//          onChange={(event) => setName(event.target.value)}
//         />
//         <input
//          type="text"
//          className="form-control mb-3"
//          placeholder="Status"
//          name="Status"
//          id="status"
//          value={status}
//          onChange={(event) => setStatus(event.target.value)}
//         />
//         <input
//          type="text"
//          className="form-control mb-3"
//          placeholder="Description"
//          name="description"
//          id="description"
//          value={description}
//          onChange={(event) => setDescription(event.target.value)}
//         />
//         <input
//          type="text"
//          className="form-control mb-3"
//          placeholder="Picture"
//          name="picture"
//          id="picture"
//          value={picture}
//          onChange={(event) => setPicture(event.target.value)}
//         />
//         <input
//          type="button"
//          className="btn btn-dark me-3"
//          value="Create Facility"
//          onClick={fnCreate}
//         />
//         <input
//          type="button"
//          className="btn btn-dark me-3"
//          value="Update Facility"
//          onClick={fnUpdate}
//         />
//         <input
//          type="button"
//          className="btn btn-danger"
//          value="Delete Facility"
//          onClick={fnDelete}
//         />
//        </form>
//       </div>
//      </div>
//     </div>
//    </section>
//   </div>
//  );
// };

// export default FacilityForm;
// import { useEffect, useState } from "react";
// import FacilityService from "../../services/FacilityService";
// import { useNavigate } from "react-router-dom";

// const FacilityForm = () => {
//  const [id, setId] = useState("");
//  const navigate = useNavigate();
//  const [name, setName] = useState("");
//  const [status, setStatus] = useState("");
//  const [description, setDescription] = useState("");
//  const [picture, setPicture] = useState("");
//  const [facilityData, setFacilityData] = useState({});

//  useEffect(() => {
//   // Load initial data if needed
//  }, []);

//  function fnCreate() {
//   const facility = { name, status, description, picture };

//   FacilityService.fnCreateFacility(facility)
//    .then((response) => {
//     console.log(response.data);
//     navigate("/facilitycreationmessage");
//    })
//    .catch((error) => {
//     console.log(error);
//    });
//  }

//  const fnUpdate = () => {
//   const updatedFacility = { name, status, description, picture };

//   FacilityService.fnUpdateFacility(id, updatedFacility)
//    .then((response) => {
//     console.log("Facility updated:", response.data);
//     navigate("/facilityupdatemessage");
//    })
//    .catch((error) => {
//     console.error("Error updating facility:", error);
//    });
//  };

//  const loadFacilityData = () => {
//   FacilityService.fnGetFacilityById(id)
//    .then((response) => {
//     const facility = response.data;
//     setFacilityData(facility);
//     setName(facility.name);
//     setStatus(facility.status);
//     setDescription(facility.description);
//     setPicture(facility.picture);
//    })
//    .catch((error) => {
//     console.error("Error loading facility data:", error);
//    });
//  };

//  function fnDelete() {
//   FacilityService.fnDeleteFacility(id)
//    .then((response) => {
//     console.log("response data delete is running");
//     console.log(response.data);
//     navigate("/facilitydeletedmessage");
//    })
//    .catch((error) => {
//     console.log(error);
//    });
//  }

//  function readFileDataAsBase64(e) {
//   const file = e.target.files[0];

//   return new Promise((resolve, reject) => {
//    const reader = new FileReader();

//    reader.onload = (event) => {
//     resolve(event.target.result);
//    };

//    reader.onerror = (err) => {
//     reject(err);
//    };

//    reader.readAsDataURL(file);
//   });
//  }

//  function onFileChange(event) {
//   readFileDataAsBase64(event).then((data) => {
//    setPicture(data);
//   });
//  }

//  return (
//   <div>
//    <nav className="navbar navbar-expand-lg fixed-top">
//     <div className="container">
//      <a className="navbar-brand" href="index.html">
//       Apartment Facility
//      </a>
//      <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="offcanvas"
//       data-bs-target="#offcanvasNavbar"
//       aria-controls="offcanvasNavbar"
//       aria-label="Toggle navigation"
//      >
//       <span className="navbar-toggler-icon"></span>
//      </button>
//      <div
//       className="offcanvas offcanvas-end"
//       tabIndex="-1"
//       id="offcanvasNavbar"
//       aria-labelledby="offcanvasNavbarLabel"
//      >
//       <div className="offcanvas-header">
//        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
//         Apartment Facility
//        </h5>
//        <button
//         type="button"
//         className="btn-close"
//         data-bs-dismiss="offcanvas"
//         aria-label="Close"
//        ></button>
//       </div>
//       <div className="offcanvas-body">
//        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
//         <li className="nav-item">
//          <a className="nav-link active" aria-current="page" href="index.html">
//           Home
//          </a>
//         </li>
//         <li className="nav-item">
//          <a className="nav-link" href="page.html">
//           Signup
//          </a>
//         </li>
//        </ul>
//       </div>
//      </div>
//     </div>
//    </nav>

//    <section className="form d-flex align-items-center justify-content-center mt-5">
//     <div className="container">
//      <div className="row justify-content-center">
//       <div className="col-md-6">
//        <form className="p-4">
//         <h2>Create account</h2>
//         <h5 className="mb-4">Welcome to Manager Signup!</h5>
//         <input
//          type="text"
//          className="form-control mb-3"
//          placeholder="Id"
//          name="Id"
//          id="id"
//          value={id}
//          onChange={(event) => setId(event.target.value)}
//         />
//         <button
//          type="button"
//          className="form-control mb-3 btn btn-secondary"
//          onClick={loadFacilityData}
//         >
//          Load Facility Data
//         </button>
//         <input
//          type="text"
//          className="form-control mb-3"
//          placeholder="Name"
//          name="name"
//          id="name"
//          value={name}
//          onChange={(event) => setName(event.target.value)}
//         />
//         <input
//          type="text"
//          className="form-control mb-3"
//          placeholder="Status"
//          name="Status"
//          id="status"
//          value={status}
//          onChange={(event) => setStatus(event.target.value)}
//         />
//         <input
//          type="text"
//          className="form-control mb-3"
//          placeholder="Description"
//          name="description"
//          id="description"
//          value={description}
//          onChange={(event) => setDescription(event.target.value)}
//         />
//         <input
//          type="file"
//          className="form-control mb-3"
//          placeholder="Picture"
//          name="picture"
//          id="picture"
//          onChange={onFileChange}
//         />
//         <input
//          type="button"
//          className="btn btn-dark me-3"
//          value="Create Facility"
//          onClick={fnCreate}
//         />
//         <input
//          type="button"
//          className="btn btn-dark me-3"
//          value="Update Facility"
//          onClick={fnUpdate}
//         />
//         <input
//          type="button"
//          className="btn btn-danger"
//          value="Delete Facility"
//          onClick={fnDelete}
//         />
//        </form>
//       </div>
//      </div>
//     </div>
//    </section>
//   </div>
//  );
// };

// export default FacilityForm;
