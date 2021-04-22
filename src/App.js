import React,{useState, useEffect} from 'react'
import EventSend from './eventListener'
import Hydra from 'hydra-synth'
import {useDatabase} from 'reactfire'
import 'firebase/database'
import { Container, Card, Row, Col, Button} from 'react-bootstrap'

import {cypher} from './cypher'

import './style.css'

const html = require('nanohtml')
let canvasIn = true;
let hydra;

export const mainEval = React.createContext(
  false
);

const App = () => {
  const [status, setStatus] = useState('>>> waiting to start')
  const [evalCode, setEvalCode] = useState(false)
  const [editorText0, setEditorText0] = useState('')
  const [editorText1, setEditorText1] = useState('')
  const [editorText2, setEditorText2] = useState('')
  const [editorText3, setEditorText3] = useState('')
  const [coder0, setCoder0] = useState('')
  const [coder1, setCoder1] = useState('')
  const [coder2, setCoder2] = useState('')
  const [coder3, setCoder3] = useState('')
  const [coderNames, setCoderNames] = useState('')
  const [errorHandler0, setErrorHandler0] = useState('')
  const [errorHandler1, setErrorHandler1] = useState('')
  const [errorHandler2, setErrorHandler2] = useState('')
  const [errorHandler3, setErrorHandler3] = useState('')
  const [activeTA, setActiveTA] = useState(-1)
  const [sharedBuf, setSharedBuf] = useState([])
  const [path, setPath] = useState('')
  const [usersTaken, setUsersTaken] = useState([])

  const db = useDatabase();

  if(canvasIn){
    const canvasHydra = html`<canvas style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index:100"></canvas>`
    canvasHydra.width = window.innerWidth
    canvasHydra.height = window.innerHeight
    document.body.appendChild(canvasHydra)
    hydra = new Hydra({
     detectAudio: false, canvas: canvasHydra
    })
    canvasIn = false
    hydra.eval('solid(1,1,1).out(o0);solid(1,1,1).out(o1);solid(1,1,1).out(o2);solid(1,1,1).out(o3); render()')
  }

  useEffect(()=>{
    if(activeTA === -1){
      db.ref('app/elmnts/'+path+'/').transaction((post)=>{
        if(post){
          console.log(post.app)
        }
      })
    }

    if(activeTA !== -1){
      db.ref('app/elmnts/'+path+'/').on('value',(snapshot) => {
        let sn = snapshot.val()
        if(sn !== null){
          setCoderNames([sn.names0,sn.names1,sn.names2,sn.names3])
          setSharedBuf([sn.text0,sn.text1,sn.text2,sn.text3])
        }
      })
    }

    switch (activeTA) {
      case 0:
        db.ref('app/elmnts/'+path+'/text'+0).set(editorText0)
        db.ref('app/elmnts/'+path+'/names'+0).set(coder0)
        db.ref('app/elmnts/'+path+'/active/'+`${0}`).set(true)
        break;
      case 1:
        db.ref('app/elmnts/'+path+'/text'+1).set(editorText1)
        db.ref('app/elmnts/'+path+'/names'+1).set(coder1)
        db.ref('app/elmnts/'+path+'/active/'+`${1}`).set(true)
        break;
      case 2:
        db.ref('app/elmnts/'+path+'/text'+2).set(editorText2)
        db.ref('app/elmnts/'+path+'/names'+2).set(coder2)
        db.ref('app/elmnts/'+path+'/active/'+`${2}`).set(true)
        break;
      case 3:
        db.ref('app/elmnts/'+path+'/text'+3).set(editorText3)
        db.ref('app/elmnts/'+path+'/names'+3).set(coder3)
        db.ref('app/elmnts/'+path+'/active/'+`${3}`).set(true)
        break;
    }

    if(evalCode){
      setErrorHandler0('')
      setErrorHandler1('')
      setErrorHandler2('')
      setErrorHandler3('')
      var t0 = activeTA === 0 ? `${editorText0}.out(o0)` : `${sharedBuf[0]}.out(o0)`
      var t1 = activeTA === 1 ? `${editorText1}.out(o2)` : `${sharedBuf[1]}.out(o2)`
      var t2 = activeTA === 2 ? `${editorText2}.out(o1)` : `${sharedBuf[2]}.out(o1)`
      var t3 = activeTA === 3 ? `${editorText3}.out(o3)` : `${sharedBuf[3]}.out(o3)`
      var tt0 = editorText0 !== '.out(o0)' ? t0 : 'solid(1,1,1).out(o0)'
      var tt1 = editorText1 !== '.out(o2)' ? t1 : 'solid(1,1,1).out(o2)'
      var tt2 = editorText2 !== '.out(o1)' ? t2 : 'solid(1,1,1).out(o1)'
      var tt3 = editorText3 !== '.out(o3)' ? t3 : 'solid(1,1,1).out(o3)'

      try{
        hydra.eval(tt0)
      } catch (err){
        setErrorHandler0(err)
      }
      try{
        hydra.eval(tt1)
      } catch (err){
        setErrorHandler1(err)
      }
      try {
        hydra.eval(tt2)
      } catch (err){
        setErrorHandler2(err)
      }
      try {
        hydra.eval(tt3)
      } catch (err){
        setErrorHandler3(err)
      }
      setEvalCode(false)
    }
  },[evalCode,editorText0,editorText1,editorText2,editorText3,path])

  const checkCode0 = (e) => {
    setEditorText0(e.target.value)
  }
  const checkCode1 = (e) => {
    setEditorText1(e.target.value)
  }
  const checkCode2 = (e) => {
    setEditorText2(e.target.value)
  }
  const checkCode3 = (e) => {
    setEditorText3(e.target.value)
  }
  const setCoderName0 = (e) => {
    setCoder0(e)
  }
  const setCoderName1 = (e) => {
    setCoder1(e)
  }
  const setCoderName2 = (e) => {
    setCoder2(e)
  }
  const setCoderName3 = (e) => {
    setCoder3(e)
  }

  return (
    <>
      {activeTA === -1 &&
        <Claim
          setActiveTA={setActiveTA}
          setPath={setPath}
        />
      }
      {activeTA !== -1 &&
      <Container fluid className="main-container">
        <EventSend
          evalCode={setEvalCode}
        />
        <Card className="text-center card-container" border="dark">
          <Card.Header style={{opacity:'0.2'}} >hydra by Olivia Jack - elmnts by Celeste Betancur </Card.Header>
            <Card.Title>4 + 1 ( elmnts + hydra )</Card.Title>
              <Card.Body>
              <Row>
                <Col>
                  <label htmlFor="name1" className="label-name">name</label>
                  {activeTA === 0
                    ? <>
                      <input id="name1" onChange={(e) => setCoderName0(e.target.value)} className="input-name"/>
                      <textarea className="textarea-main-style" onChange={checkCode0}></textarea>
                      </>
                    : <>
                      <input id="name1" className="input-name focus-false" value={coderNames[0]} style={{outline:'none'}} readOnly/>
                      <textarea className="textarea-main-style focus-false" value={sharedBuf[0]} style={{outline:'none'}} readOnly></textarea>
                      </>
                  }
                  <input className="input-name-status" value={`${errorHandler0}`} readOnly/>
                </Col>
                <Col>
                  <label htmlFor="name2" className="label-name">name</label>
                  {activeTA === 1
                    ? <>
                      <input id="name2" onChange={(e) => setCoderName1(e.target.value)} className="input-name"/>
                      <textarea className="textarea-main-style" onChange={checkCode1}></textarea>
                      </>
                    : <>
                      <input id="name2" className="input-name focus-false" value={coderNames[1]} style={{outline:'none'}} readOnly/>
                      <textarea className="textarea-main-style focus-false" value={sharedBuf[1]} style={{outline:'none'}} readOnly></textarea>
                      </>
                  }
                  <input className="input-name-status" value={`${errorHandler1}`} readOnly/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="name3" className="label-name">name</label>
                  {activeTA === 2
                    ? <>
                      <input id="name3" onChange={(e) => setCoderName2(e.target.value)} className="input-name"/>
                      <textarea className="textarea-main-style" onChange={checkCode2}></textarea>
                      </>
                    : <>
                      <input id="name3" className="input-name focus-false" value={coderNames[2]} style={{outline:'none'}} readOnly/>
                      <textarea className="textarea-main-style focus-false" value={sharedBuf[2]} style={{outline:'none'}} readOnly></textarea>
                      </>
                  }
                  <input className="input-name-status" value={`${errorHandler2}`} readOnly/>
                </Col>
                <Col>
                  <label htmlFor="name4" className="label-name">name</label>
                  {activeTA === 3
                    ? <>
                      <input id="name4" onChange={(e) => setCoderName3(e.target.value)} className="input-name"/>
                      <textarea className="textarea-main-style" onChange={checkCode3}></textarea>
                      </>
                    : <>
                      <input id="name4" className="input-name focus-false" value={coderNames[3]} style={{outline:'none'}} readOnly/>
                      <textarea className="textarea-main-style focus-false" value={sharedBuf[3]} style={{outline:'none'}} readOnly></textarea>
                      </>
                  }
                  <input className="input-name-status" value={`${errorHandler3}`} readOnly/>
                </Col>
              </Row>
            </Card.Body>
          <Card.Footer>
            {status}
            <input style={{marginLeft:'2rem',backgroundColor:'rgba(255,255,255,0.2)',borderRadius:'4px'}} placeholder="main commands here" type="text"/>
          </Card.Footer>
        </Card>
      </Container>
    }
    </>
  );
}

const Claim = (props) => {
  const [ensemble, setEnsemble] = useState('')
  const [password, setPassword] = useState('')
  const [done, setDone] = useState(false)
  const [available, setAvailable] = useState([])

  const db = useDatabase();

  useEffect(()=>{
    if(ensemble.length !== 0 && password.length !== 0){
      props.setPath(cypher(ensemble+password,2),setDone(true))
    }
    db.ref('app/elmnts/'+cypher(ensemble+password,2)+'/active/').on('value',(snapshot) => {
      let sn = snapshot.val()
      setAvailable(sn)
    })
  },[ensemble,password])

  return(
    <Container style={{width:'30%', marginTop:'14vh', zIndex:'1000',position:'relative'}}>
      <Card className="text-center">
        <Card.Header style={{opacity:'0.2'}} >hydra by Olivia Jack - elmnts by Celeste Betancur </Card.Header>
        <Card.Title>elmnts</Card.Title>
        <Container>
          <label>ensemble</label>
          <input style={{margin:'1rem'}} onChange={(e) => setEnsemble(e.target.value)} require/>
        </Container>
        <Container>
          <label>password</label>
          <input style={{margin:'1rem'}} onChange={(e) => setPassword(e.target.value)}  require/>
        </Container>
        {done &&
          <>
          {available === null
            ? <>
            <Row>
              <Col>
                <Container>
                  <Button style={{margin:'1rem'}} variant="info" className="button-claim" onClick={()=> props.setActiveTA(0)}>Agua</Button>
                </Container>
              </Col>
              <Col>
                <Container>
                  <Button style={{margin:'1rem'}} variant="warning" className="button-claim" onClick={()=> props.setActiveTA(1)}>Fuego</Button>
                </Container>
              </Col>
            </Row>

            <Row>
              <Col>
                <Container>
                  <Button style={{margin:'1rem'}} variant="danger" className="button-claim" onClick={()=> props.setActiveTA(2)}>Aire</Button>
                </Container>
              </Col>
              <Col>
                <Container>
                  <Button style={{margin:'1rem'}} variant="success" className="button-claim" onClick={()=> props.setActiveTA(3)}>Tierra</Button>
                </Container>
              </Col>
            </Row>
              </>
            : <>
            <Row>
              <Col>
                <Container>
                {!available[0] &&
                  <Button style={{margin:'1rem'}} variant="info" className="button-claim" onClick={()=> props.setActiveTA(0)}>Agua</Button>
                }
                </Container>
              </Col>
              <Col>
                <Container>
                {!available[1] &&
                  <Button style={{margin:'1rem'}} variant="warning" className="button-claim" onClick={()=> props.setActiveTA(1)}>Fuego</Button>
                }
                </Container>
              </Col>
            </Row>

            <Row>
              <Col>
                <Container>
                {!available[2] &&
                  <Button style={{margin:'1rem'}} variant="danger" className="button-claim" onClick={()=> props.setActiveTA(2)}>Aire</Button>
                }
                </Container>
              </Col>
              <Col>
                <Container>
                {!available[3] &&
                  <Button style={{margin:'1rem'}} variant="success" className="button-claim" onClick={()=> props.setActiveTA(3)}>Tierra</Button>
                }
                </Container>
              </Col>
            </Row>
            </>
          }
          </>
        }
      </Card>
    </Container>
  );
}

export default App;
