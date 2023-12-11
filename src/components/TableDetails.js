import React,{useEffect,useState} from 'react'


const TableDetails = () => {
  const [emps,setEmps] = useState([])
  const getEmps = async () => {
    try{
      const response = await fetch("http://localhost:5000/display")
      console.log(response);
      const jsonData = await response.json();
      setEmps(jsonData);
      
    } catch (error) {
      console.error(error.message)
    }
  };

  useEffect(() => {
    getEmps();
  }, []);
  return (
    <>
      <div className="table">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Date of birth</th>
              <th>Address</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {emps.map((emp) => (
              <tr key={emp.email}>
                <td>{emp.name}</td>
                <td>{emp.dept}</td>
                <td>{emp.designation}</td>
                <td>{emp.salary}</td>
                <td>{emp.dob}</td>
                <td>{emp.address}</td>
                <td>{emp.email}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  </>
 )
}
export default TableDetails