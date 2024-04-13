const Course = ({ course }) => {
    const allExercises = course.parts.reduce(
        (sum, part) => sum + part.exercises, 0)
    // some gross indentation that torvalds would love
    return (
    <div>
        <h1>{course.name}</h1>
        {course.parts    
        // mapping through the course array and getting
        // all the objects as needed
            .map(part => (
                // adding id's so react doesn't flip out
                <div key={part.id}>
                    <li>
                        {`${part.name} : ${part.exercises} exercises`}
                    </li>
                </div>
        ))}
        <li>
            total exercises: {allExercises}
        </li>
    </div>
    );
  };
export default Course