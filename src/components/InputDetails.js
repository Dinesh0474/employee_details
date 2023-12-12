import React,{useState} from 'react'

const InputDetails = () => {
  const [name,setName] = useState('');
  const [dob,setDob] = useState('');
  const [salary,setSalary] = useState('');
  const [designation,setDesignation] = useState('');
  const [dept,setDept] = useState('');
  const [doj,setDoj] = useState('');
  const [address,setAddress] = useState('');
  const [email,setEmail] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const formData = {
        name:name,
        dob:dob,
        salary:salary,
        dept:dept,
        designation:designation,
        doj:doj,
        address:address,
        email:email
      };

      const response = await fetch("https://employee-details-backend.vercel.app/create",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(formData)
      });
      console.log(response);
      setName('')
      setDob('')
      setAddress('')
      setSalary('')
      setEmail('')
      setDept('')
      setDesignation('')
      setDoj('')
    }catch(err){
      console.error(err.message)
    }
  }

  return (
    <>
      <h1 className='inputHeader'>Employee Details</h1>
      <form className='form'>
          <div>
            <label className='label'>
                Employee Name  
                <input id="input-form"
                    autoFocus
                    placeholder='Enter Name'
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label className='label' >
                Employee DOB
                <input id="input-form"
                    placeholder='Enter DOB'
                    required
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                />
            </label>
          </div>
          <div>
              <label className='label'>
                  Employee Salary
                  <input id="input-form"
                      placeholder='Enter salary'
                      required
                      type="number"
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                  />
              </label>
              <label className='label'>
                  Employee Dept
                  <input id="input-form"
                      placeholder='Enter Department'
                      required
                      type="text"
                      value={dept}
                      onChange={(e) => setDept(e.target.value)}
                  />
              </label>
          </div>
          <div>
              <label className='label'>
                  Employee Designation
                  <input id="input-form"
                      placeholder='Enter Designation'
                      required
                      type="text"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                  />
              </label>
              <label className='label'>
                  Employee Address
                  <input id="input-form"
                      placeholder='Enter Address'
                      required
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                  />
              </label>
          </div>
          <div>
          <label className="label">
              Employee DOJ
              <input 
                  placeholder='Enter Date of Joining'
                  required
                  type="text"
                  value={doj}
                  onChange={(e) => setDoj(e.target.value)}
              />
          </label>
          <label className='label'>
              Employee Email
              <input 
                  placeholder='Enter Email'
                  required
                  type="text"
                  value={email}
                  onChange = {(e) => setEmail(e.target.value)}
              />
          </label>
          </div>   
          <button type="submit"
          onClick={handleSubmit} className='submit'>Submit</button>
      </form>
    </>
  )
}

export default InputDetails