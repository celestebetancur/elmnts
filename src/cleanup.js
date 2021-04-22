import {useDatabase} from 'reactfire'
import 'firebase/database'
import React,{useEffect} from 'react'

const CleanUp = (props) => {

  const db = useDatabase();

  useEffect(()=>{
    return function cleanUp()
    {
      db.ref('app/elmnts/'+props.path+'/active/'+`${props.active}`).set(false)
      console.log('cleanup')
    }
  })

  return(
    <div></div>
  );
}

export default CleanUp;
