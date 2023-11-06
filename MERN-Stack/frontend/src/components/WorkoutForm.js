// // import { useState } from "react"

// // const WorkoutForm = () =>{

// // const [title,setTitle] = useState('')
// // const [load,setload] = useState('')
// // const [reps,setReps] = useState('')
// // const [error,setError] = useState(null)


// // const handleSubmit = async (e) =>{
// //     e.preventDefault()

// //     const Workout= { title, load, reps}
// //     const response = await fetch('/api/workouts',{
// //         method:'POST',
// //         body: JSON.stringify(Workout),
// //         headers: {
// //             'Content-Type': 'application/json'
// //         }
// //     })
// //     const json=await response.json()
// //     if(!response.ok){
// //         setError(json.error)
// //     }
// //     if(response.ok){
// //         setTitle('')
// //         setReps('')
// //         setReps('')
// //         setError(null)
// //         console.log('sucess',json)
        
// //     }
// // }
// // return (

// // <form className="create" onSubmit={handleSubmit}> 
// //     <h3> Add a New Workout</h3>
// //     <label> Exercise Title</label>
// //     <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>

// //     <label> Exercise Load</label>
// //     <input type="number" onChange={(e)=>setload(e.target.value)} value={load}/>

// //     <label> Exercise Reps</label>
// //     <input type="number" onChange={(e)=>setReps(e.target.value)} value={reps}/>

// //     <button>ADD WORLOUT</button>
// //     {error && <div className="error"> {error} </div>}
// // </form>


// // )

// // }

// // export default WorkoutForm




// import React, { useState } from "react";

// const WorkoutForm = () => {
//   const [title, setTitle] = useState("");
//   const [load, setLoad] = useState("");
//   const [reps, setReps] = useState("");
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const Workout = { title, load, reps };
//     const response = await fetch("/api/workouts", {
//       method: "POST",
//       body: JSON.stringify(Workout),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const json = await response.json();
//     if (!response.ok) {
//       setError(json.error);
//     }
//     if (response.ok) {
//       setTitle("");
//       setLoad("");
//       setReps("");
//       setError(null);
//       console.log("success", json);
//     }
//   };

//   const inputStyle = {
//     width: "100%",
//     padding: "10px",
//     marginBottom: "15px",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//   };

//   const buttonStyle = {
//     display: "block",
//     width: "100%",
//     padding: "10px",
//     backgroundColor: "#007bff",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   };

//   const errorStyle = {
//     color: "#ff0000",
//     marginTop: "10px",
//     textAlign: "center",
//   };

//   return (
//     <form className="create" onSubmit={handleSubmit}>
//       <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
//         Add a New Workout
//       </h3>
//       <label className="form-label" style={{ display: "block", marginBottom: "5px" }}>
//         Exercise Title
//       </label>
//       <input
//         className="form-input"
//         type="text"
//         onChange={(e) => setTitle(e.target.value)}
//         value={title}
//         style={inputStyle}
//       />

//       <label className="form-label" style={{ display: "block", marginBottom: "5px" }}>
//         Exercise Load
//       </label>
//       <input
//         className="form-input"
//         type="number"
//         onChange={(e) => setLoad(e.target.value)}
//         value={load}
//         style={inputStyle}
//       />

//       <label className="form-label" style={{ display: "block", marginBottom: "5px" }}>
//         Exercise Reps
//       </label>
//       <input
//         className="form-input"
//         type="number"
//         onChange={(e) => setReps(e.target.value)}
//         value={reps}
//         style={inputStyle}
//       />

//       <button className="form-button" style={buttonStyle}>
//         ADD WORKOUT
//       </button>
//       {error && <div className="error" style={errorStyle}>{error}</div>}
//     </form>
//   );
// };

// export default WorkoutForm;



import React, { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const Workout = { title, load, reps };
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(Workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      console.log("success", json);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>
      <label className="form-label">Exercise Title</label>
      <input
        className="form-input"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label className="form-label">Exercise Load</label>
      <input
        className="form-input"
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />

      <label className="form-label">Exercise Reps</label>
      <input
        className="form-input"
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />

      <button className="form-button">ADD WORKOUT</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
