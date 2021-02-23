import React, { Fragment} from 'react'
//import ReactTooltip from 'react-tooltip'

import Chapter1 from './chapter1'
import Chapter2 from './chapter2'
import Chapter3 from './chapter3'
import Chapter4 from './chapter4'
import Chapter5 from './chapter5'
import Chapter6 from './chapter6'
import HookExample from './hookexample'
import Hook from './hook'
import Chapter7 from './chapter7'
import Chapter8 from './chapter8'
import Example from './example'
import Example2 from './example/Example2'
//import Container from './example3'
import Presenter from './example3/Presenter'
import Example4 from './example4'
import Example5 from './example5'
import Menu from './menu'
import Tooltip from './tooltip'
import TimerWrapperContainer from './timer'
import Container from './hoc/Container'

// import ReduxContainer from './redux/Container'
// import ReduxContainer from './counterredux/Container'
// import ReduxContainer from './project1/Container'
import ReduxContainer from './project2/Container'


function App() {
  return (
     <>
      {/* <Chapter1 />
      <Chapter2 />
      <Chapter3 />
      <Chapter4 />
      <Chapter5 />
      <Chapter6 />
      <Hook />
      <HookExample />
      <Chapter7 />
      <Example title='student list'/>
      <Chapter8 />
      <Example2 />
      <Container />
      <Example4 />
      <Example5 />
      <Menu />
      <Tooltip />
      <TimerWrapperContainer /> */}
      {/* <Container />  */}
      {/* <ReactTooltip /> */}
      <ReduxContainer />
       </>

  )
}

export default App;