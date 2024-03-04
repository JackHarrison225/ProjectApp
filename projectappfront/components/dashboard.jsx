import React from 'react'
import CreateProject from './projectcomponents/CreateProject'
import UpdateProject from './projectcomponents/UpdateProject'
import DeleteProject from './projectcomponents/DeleteProject'

const Dashboard = (props) => {
  const client = props.client
  return (
    <div>dashboard
      <CreateProject client={client} />
      <DeleteProject client={client} />
      <UpdateProject client={client} />
    </div>
  )
}

export default Dashboard