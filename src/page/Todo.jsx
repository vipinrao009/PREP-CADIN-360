import { useState } from 'react'
import '.././App.css'
import Layout from '../Layout/Layout'
import {useDispatch, useSelector} from 'react-redux' 
import {addStudent, updateStudent, deleteStudent} from '../redux/slices/StudentSlice'

function Todo() {
  const students = useSelector((state)=>state.students)
  const [editingId, setEditingId] = useState(null);
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    name:'',
    email:'',
    course:''
  })

  const handleChange =(e)=>{
    const {name, value} = e.target
    setForm({
      ...form,
      [name]:value
    })
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    if(editingId){
      dispatch(updateStudent({...form, id: editingId}))
    }else{
      dispatch(addStudent(form))
    }
  }
  
  const handleEdit = (student) => {
    setForm(student);
    setEditingId(student.id);
  };
  
  const handleDelete = (id) => dispatch(deleteStudent(id));

  return (
    <Layout>
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Student Management
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="course"
            value={form.course}
            onChange={handleChange}
            placeholder="Course"
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded"
          >
            {editingId ? 'Update Student' : 'Add Student'}
          </button>
        </form>

        <table className="w-full mt-6 table-auto text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Course</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students?.map((student) => (
              <tr key={student.id} className="text-center border-t">
                <td className="p-2">{student.name}</td>
                <td className="p-2">{student.email}</td>
                <td className="p-2">{student.course}</td>
                <td className="p-2 space-x-2">
                  <button
                    onClick={() => handleEdit(student)}
                    className="bg-yellow-400 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </Layout>
  )
}

export default Todo
