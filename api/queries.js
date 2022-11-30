

const getStudents = `select * from students;`;

const getStudentById = `select * from students where id = $1;`;

const delStudentById  = `delete  from students where id = $1`;

const addStudent = `insert into students(name,email,age,dob) values($1,$2,$3,$4)`;


export default  {
    getStudents,
    getStudentById,
    addStudent,
    delStudentById,
}

// export default queries;