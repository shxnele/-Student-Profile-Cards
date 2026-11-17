import StudentProfile from "./StudentProfile";

function App() {
  return (
    <div>
      <h1>Student Profile Cards</h1>

      <StudentProfile
        name="Shannel Igana"
        course="BS in Computer Science"
        section="3A"
      />

      <StudentProfile
        name="Juan Dela Cruz"
        course="BS Information Technology"
        section="3B"
      />

      <StudentProfile
        name="John Reyes"
        course="BS in Computer Science"
        section="3C"
      />
    </div>
  );
}

export default App;