function StudentProfile(props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        
        margin: "10px",
        borderRadius: "8px",
        width: "250px",
      }}
    >
      <h2>{props.name}</h2>
      <p><strong>Course:</strong> {props.course}</p>
      <p><strong>Section:</strong> {props.section}</p>
    </div>
  );
}

export default StudentProfile;