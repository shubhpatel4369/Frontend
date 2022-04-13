// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// export const Profile = () => {
//     const [data, setdata] = useState([])
//     const [username, setusername] = useState('')
//     const [email, setemail] = useState('')
//     const [password, setpassword] = useState('')
//     const [role, setrole] = useState('')

         
//      const [userList, setuserList] = useState([])
         
//     const getData = () => {
//        axios.get(`http://localhost:4000/users/${id}`,data).then(res => {
//             console.log(res.data.data)
//             setuserList(res.data.data)
//         })
//     }

//     useEffect(() => {
           
//         getData
//           return () => {
            
//           }
//         }, [])

//         var updateddata = {
//             username:username,
//             email:email,
//             password:password,
//             role:role
//         }

//         const UpdateData = async () => {
//             axios.get(`http://localhost:4000/users/${id}`,updateddata).then(res => {
//                 console.log(res.data.data)
//                 setdata(res.data.data)
//             })
//         }
       
    
//         useEffect(() => {
//             UpdateData()
          
//             return () => {
              
//             }
//           }, [])


//   return (
//     <div>

//     </div>
//   )
// }
