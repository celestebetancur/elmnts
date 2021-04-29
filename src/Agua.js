import React, {useState, useEffect}  from 'react'
import ReactHowler from 'react-howler'
import SampleFiles from './samples'

const Agua = (props) => {
  const [stopST, setStopST] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0])
  const [loopST, setLoopST] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0])
  const [volST, setVolST] = useState([1,1,1,1,1,1,1,1,1,1,1,1,1])
  const [speedST, setSpeedST] = useState([1,1,1,1,1,1,1,1,1,1,1,1,1])
  const [playing, setPlaying] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0])

  useEffect(()=>{
    aguaDialect(props.text)
  },[props.evalCode])

  const aguaDialect = (text) => {
    let upper = text.toUpperCase()
    let newLines = upper.split(/\n/)
    let tokens = []
    let sampWords = ['COPOS','VASO','LLUVIA','CORRIENTE','RIO','BRISA','MAREA','NIEBLA','NIEVE','AGUA','GRANIZADA','GOTAS','MAR','OCEANO']
    let loopStateOn = ['REPITE','REPITEN','CONSTANTES','CONSTANTE','CONTINUA','CONTINUAS','CONTINUO','CONTINUOS','FLUJOS','FLUYEN','FLUYE','FLUIR','FLUIDO','PERPETUA','ETERNA','ETERNO','PERPETUO','CÍCLICO','CÍCLICA','CÍCLICOS','CÍCLICAS','INCONTABLE','INCONTABLES','INCALCULABLE','INFINITO','INFINITA','INFINITOS','INFINITAS','INTERMINABLE','INTERMINABLES']
    let stopWords = ['PARAN','PARA','DETENTE','FRENA','DETIENEN','DETIENE','PAUSA','PAUSAN','ESTANCA','ESTANCAN','REPRESA','REPRESAN','CONGELA','CONGELAN','CONGELADO','CONGELADA','CONGELADOS']
    let softVal = ['SUAVE','SUAVES','SUAVEMENTE','TRANQUILO','TRANQUILA','CALLADA','CALLADO','TRANQUILOS','TRANQUILAS','CALLADAS','CALLADOS','SILENTES','TENUES','TENUE','REPOSO','REPOSA','REPOSAN']
    let softerVal = ['MENOS','POCO','POCAS','POCOS','POCA','ESCASO','ESCASA','ESCASEAN','LIMITADO']
    let medVal = ['FUERTE','FUERTES','VIOLENTO','VIOLENTA','VIOLENTOS','VIOLENTAS','DUROS','DURAS','AGRESIVA','AGRESIVO','TORMENTOSA','TORMENTOSO','TORMENTOSOS','ROBUSTO','POTENTE','ENÉRGICO','ENÉRGICA']
    let loudVal = ['MUCHO','MUCHAS','MUCHOS','MUCHA','ABUNDANTE','ABUNTANTES','NUMEROSO','NUMEROSA','NUMEROSOS','NUMEROSAS','INMENSO','INMENSA']
    let fastVal = ['LIGERA','VOLATIL','RÁPIDA','RÁPIDO','LIGERAS','LIGEROS','VOLATILES','RÁPIDAS','RÁPIDOS']
    let slowVal = ['LENTA','LENTO','LENTOS','LENTAS','CALMADO','CALMADA','CALMADOS','CALMADAS','SOMNOLIENTO','SOMNOLIENTA','SOMNOLIENTAS','SOMNOLIENTOS','DESPACIO','PROFUNDO','PROFUNDA','PROFUNDOS','PROFUNDAS','DORMIDA','DORMIDAS','DORMID0','DORMIDOS']

    let st = [0,0,0,0,0,0,0,0,0,0,0,0,0]
    let lp = [0,0,0,0,0,0,0,0,0,0,0,0,0]
    let vl = [1,1,1,1,1,1,1,1,1,1,1,1,1]
    let sp = [1,1,1,1,1,1,1,1,1,1,1,1,1]
    let pg = [0,0,0,0,0,0,0,0,0,0,0,0,0]

    for(let i = 0; i < newLines.length; i++){
          let t = newLines[i].split(' ')
          if(t !== ''){
            tokens.push(t)
          }
    }
    for(let i = 0; i < tokens.length; i++){
      for(let j = 0; j < tokens[i].length; j++){
        let index = sampWords.indexOf(tokens[i][j])
        if(index !== -1){
          pg[index] = 1
          tokens[i].forEach((e) => {
            st[index] += stopWords.includes(e) ? 1 : 0;
            lp[index] += loopStateOn.includes(e) ? 1 : 0;
            vl[index] -= softVal.includes(e) ? 0.2 : 0;
            vl[index] += medVal.includes(e) ? 0.2 : 0;
            vl[index] -= softerVal.includes(e) ? 0.1 : 0;
            vl[index] += loudVal.includes(e) ? 0.1 : 0;
            sp[index] += fastVal.includes(e) ? 0.5 : 0;
            sp[index] -= slowVal.includes(e) ? 0.2 : 0;
          });
          // if(stopST[index] === 1){
          //   lp[index] = 0;
          // }
        }
      }
    }
    let t = `Agua(lang)
             Playing: ${pg}
             Rates: ${sp}
             Gains: ${vl}
             Loops: ${lp}`

    setStopST(st)
    setLoopST(lp)
    setVolST(vl)
    setSpeedST(sp)
    setPlaying(pg)
    props.errorHandler('Agua(lang)')
  }

  const Audio = SampleFiles.map((samp, id)=>{
      return(
        <ReactHowler
          key ={id}
          src={samp}
          playing={playing[id] === 1 ? true : false}
          loop={loopST[id] > 0 ? true : false, id, loopST}
          volume={volST[id]}
        />
      )
    })

  return (
    <div>{Audio}</div>
  )
}



export default Agua
