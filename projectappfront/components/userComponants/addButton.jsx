import React from 'react'

const addButton = (props) => {

     const add = async() => 
     {
          switch(props.type){
               case "friend":
                    //add friend to current users friendlist
                    await props.client()
                    break
               case "team":
                    //add Team member to current Project teamlist
                    await props.client()
                    break
               case "owner":
                    //add Team member to current Project Ownerslist and remove them from teamlist
                    await props.client()
                    break
          }
     }

     return (
          <div className='' onClick={add}>addButton</div>
     )

}

export default addButton