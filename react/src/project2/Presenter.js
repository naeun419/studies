import React from  'react'

import './Presenter.css'
import hobbies from './constants'

const Presenter =({ hobbyChanged, buttonClicked, onChange, 
                    hobbyEtcChanged, phoneChanged, birthdayChanged,
                    name, age, altmsg, checkhobby, hobbyEtc, birthday, etc}) => {

                       return (
                          <form>
                              <br/>
                              <div
                                className="title">
                                    설문 조사
                                    </div>
                              <br/>
                              <div>
                                  1. 당신의 이름을 입력하세요.
                              </div>
                              <div>
                                  <input
                                    className="textfield"
                                    type='text'
                                    placeholder="이름 입력"
                                    name='name'
                                    value={name}
                                    onChange={onChange}>
                                    </input>
                              </div>
                              <br/>
                              <div>
                                  2. 당신의 나이를 입력하세요.
                              </div>
                              <div>
                                  <input
                                    className="agefield"
                                    type='text'
                                    name='age'
                                    value={age}
                                    onChange={onChange}>
                                    </input>
                                    <span>{altmsg}</span>
                              </div>
                              <br/>
                              <div>
                                  3. 당신의 취미를 선택하세요. (복수선택 가능)
                              </div>
                              <div>
                                  <input
                                    className="radio"
                                    type='checkbox'
                                    id="exercise"
                                    value="exercise"
                                    name="abc"
                                    onChange={hobbyChanged}/>
                                    <label for="exercise">
                                        운동
                                    </label>
                                    <br/>
                                    <input
                                        className="radio"
                                        type='checkbox'
                                        id="movie"
                                        value="movie"
                                        name="abc"
                                        onChange={hobbyChanged}/>
                                        <label for="movie">
                                            영화 감상
                                        </label>
                                        <br/>
                                    <input
                                        className="radio"
                                        type='checkbox'
                                        id="music"
                                        value="music"
                                        name="abc"
                                        onChange={hobbyChanged}/>
                                        <label for="music">
                                            음악 듣기
                                        </label>
                                        <br/>
                                    <input
                                        className="radio"
                                        type='checkbox'
                                        id="reading"
                                        value="reading"
                                        name="abc"
                                        onChange={hobbyChanged}/>
                                        <label for="reading">
                                            독서
                                        </label>
                                        <br/>
                                    <input
                                        className="radio"
                                        type='checkbox'
                                        id="etc"
                                        value="etc"
                                        name="abc"
                                        onChange={hobbyChanged}/>
                                        <label for="etc">
                                            기타
                                        </label>
                                        <span>
                                             {
                                                checkhobby === true ?
                                                 <input
                                                    type='text'
                                                    className="hobbyetc"
                                                    name='hobbyEtc'
                                                    value={hobbyEtc}
                                                    onChange={hobbyEtcChanged}/>
                                                : null
                                             }
                                        </span>
                              </div>
                              <br/>
                              <div>
                                  4. 당신의 핸드폰 제조사는 어디인가요?
                              </div>
                              <div>
                                  <input
                                    className="radio"
                                    type='radio'
                                    id="android"
                                    name="abc"
                                    value="android"
                                    onChange={phoneChanged}/>
                                    <label for="android">
                                        안드로이드
                                    </label>
                                    <br/>
                                    <input
                                        className="radio"
                                        type='radio'
                                        id="iphone"
                                        name="abc"
                                        value="iphone"
                                        onChange={phoneChanged}/>
                                        <label for="iphone">
                                            아이폰
                                        </label>
                              </div>
                              <br/>
                              <div>
                                  5. 당신의 생일은 언제인가요?
                              </div>
                              <div>
                                  <input
                                    className="textfield"
                                    type='date'
                                    value={birthday}
                                    onChange={birthdayChanged}>
                                    </input>
                              </div>
                              <br/>
                              <div>
                                  6. 하고 싶은 말을 적으세요.
                              </div>
                              <div>
                                  <textarea
                                    name='etc'
                                    value={etc}
                                    onChange={onChange}/>
                              </div>
                              <br/>
                              <input
                                className="submit"
                                type="submit"
                                value="제출"
                                onClick={buttonClicked}/>
                              {/* <button
                                className="submit"
                                onClick={buttonClicked}>
                                    제출
                                </button> */}
                              <input
                                className="cancel"
                                type="reset"
                                value="취소"/>
                              {/* <button
                                className="cancel"
                                onClick={cancelClicked, uncheckedAll()}>
                                    취소
                                </button> */}

                          </form> 
                       )
                   }


export default Presenter