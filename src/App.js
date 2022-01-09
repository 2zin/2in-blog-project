/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집' , '신림 미용실 추천']);
  let [따봉, 따봉변경] = useState(0);

  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState('');

  let posts = '강남 고기 맛집';

  // function 제목바꾸기(){
  //   var newArray = [...글제목]; //글제목복사(deepcopy)
  //   newArray[0] = '여자 코트 추천'; //복사한데이터의0번째수정
  //   글제목변경(newArray);
  // }
  
  return (
    <div className="App">
      <div className="black-nav">
        <div style={ {color: 'blue', fontSize: '30px'} }>개발 Blog</div>
      </div>
      {/* <button onClick={ 제목바꾸기 }>버튼</button> */}
      {/* <div className="list">
        <h4>{글제목[0]} <span onClick={ ()=>{ 따봉변경(따봉+1) } }>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h4 onClick={ ()=>{ modal변경(true) } }>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
        <hr/>
      </div> */}

      { 

        글제목.map(function(글, i){
          return (
          <div className="list" key={i}>
          <h4 onClick={ ()=>{ 누른제목변경(i) } }>{글} <span onClick={ ()=>{ 따봉변경(따봉+1) } }>👍</span> {따봉} </h4>
          <p>2월 17일 발행</p>
          <hr/>
          </div>
          )
        })
      
      }
      
      {/* <input onChange={ (e)=>{ 입력값변경(e.target.value) } }></input> */}

      <div className="publish">
        <input onChange={(e)=>{입력값변경(e.target.value)}} />
        <button onClick={()=>{
          var arrayCopy = [...글제목];
          arrayCopy.unshift(입력값);
          글제목변경( arrayCopy );
        }}>저장</button>
      </div>

      {/* <button onClick={ ()=>{ 누른제목변경(0) } }>버튼1</button>
      <button onClick={ ()=>{ 누른제목변경(1) } }>버튼2</button>
      <button onClick={ ()=>{ 누른제목변경(2) } }>버튼3</button> */}
      <button onClick={ ()=>{ modal변경(!modal) } }>열고닫기</button>


      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
        : null
      }
      
    </div>
  );
}

function Modal(props){
  return(
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
