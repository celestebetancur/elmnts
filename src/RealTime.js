import {useEffect} from 'react'
import {useDatabase} from 'reactfire'
import 'firebase/database'

const RealTime = (props) => {

  const db = useDatabase();

  useEffect(()=>{
    db.ref('app/elmnts/text').update({
      text: props.text,
    })
    db.ref('app/elmnts/text').on('value',(snapshot) => {
      let sn = snapshot.val().text
      props.loadFireBase(sn)
    })
  },[props.text])

  return (
    <></>
  )
}

export default RealTime
