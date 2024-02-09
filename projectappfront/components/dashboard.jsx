import React from 'react'
import CreateProject from './projectcomponents/CreateProject'

const Dashboard = (props) => {
  const client = props.client
  return (
    <div>dashboard
      <CreateProject client={client} />
    </div>
  )
}

export default Dashboard