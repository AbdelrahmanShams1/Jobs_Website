import {Route , createBrowserRouter , createRoutesFromElements ,RouterProvider} from 'react-router-dom'
import React from 'react'
import JobsPage from './Pages/JobsPage'
import HomePages from './Pages/HomePages'
import MainLayout from './Layouts/MainLayout'
import NotFound from './Pages/NotFound'
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './Pages/AddJobPage'
import EditJobPage from './Pages/EditJobPage'
const App = () => {
    const addjob = async (e)=>{
    const res = await fetch('/api/jobs', 
      {
        method :'POST' ,
        headers: {
      'Content-Type' : 'application/json',
        } ,
          body: JSON.stringify(e),})

  return;
  }

  const deleteJob = async (id)=>{
    const res = await fetch(`/api/jobs/${id}` ,{ method : 'DELETE' ,}) 
    return
  }

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements (
      <Route path='/' element = { <MainLayout/> }>
               <Route index element={ <HomePages/> }/>
               <Route path='/jobs' element = { <JobsPage />} />
               <Route path='*' element={<NotFound />} />
               <Route
          path='/jobs/:id'
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />

               <Route path='/add-job' element={<AddJobPage addJobSubmit={addjob} />}/>
               <Route
          path='/edit-job/:id'
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
      </Route>
     
    )
  )
  return (
    <>

    <RouterProvider router={router}/>

   </>
  )
}

export default App