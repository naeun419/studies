1. React 살펴보기
    * React란 무엇인가

        -> UI 컴포넌트 라이브러리

            *   CBA(conponent-based-architecture) VS MVC

                -> CBA의 경우 책임은 구성 컴포넌트 별로 나누어짐(수직적). 이것은 디자인, 로직 및 헬퍼 메소드가 모두 아키텍처의 동일한 레벨(일반적으로 뷰)내에 존재함을 의미

                -> 특정 구성 요소와 관련된 모든 것은 해당 컴포넌트 클래스 내에 정의 됨

                -> 일체형 UI에 비해, 재사용과 유지보수, 확장이 용이함



                -> MVC는 책임을 수평적으로 나눔

                -> angular는 UI를 표시하는 템플릿과 렌더링 할 템플릿을 결정하는 경로 및 헬퍼 기능을 정의하는 서비스를 제공

                -> 템플릿의 경로와 연관 메소드가 있는 경우에도 이등 모두는 어플리케이션 아키텍처의 여러 단계에 존재함
            


    * React의 장점

        -> 간결성

            * 선언형 스타일 채택

            : 명령형 스타일과 달리, 실행 결과가 어떻게 되어야 할지를 코드로 작성해야 함 (What에 집중)

            : 복잡도를 줄여줄 뿐만 아니라 코드에 대한 이해도와 가독성을 높일 수 있기 때문

            : view를 갱신할 때(DOM 비교, 상태와 뷰의 보정), 명령형 스타일(DOM을 직접 조작해야 함)과 달리 개발자는 명시적으로 뷰를 변경하려고 노력할 필요가 없음 => 상태를 갱신하면 뷰는 이에 따라 자동적으로 갱신 됨

            cf) 명령형 스티일 : 결괏값을 구하기 위해 해야 할 과정을 코드로 작성 (How에 집중)



            * 자바스크립트를 이용한 컴포넌트 기반 아키텍쳐

            -> 관심사 분리, 느슨한 결합, 코드 재사용의 장점

                * React는 React.createElement(type, [props], [...children]) API를 통해 컴포넌트 생성

                -> 리액트 컴포넌트는 React.createElement를 통해 엘리먼트에 대한 정보를 가지는 Object를 생성하고 이를 In-Memory에 저장하고, ReactDOM.render 함수를 통해 Web API를 이용해서 실제 웹 브라우저에 그려주는 방식으로 동작

                -> React.createElement(elementName, data, child)

                : elementName => HTML 태그명을 'h1'처럼 문자열로 작성하거나 사용자 정의 컴포넌트 클래스 객체를 넘겨줄 수 있음

                : data => 속성이나 상위 컴포넌트에 받는 값으로 null이나 {name: 'Azat'}와 같은 형태의 데이터

                : child => 자식 엘리먼트나 태그 내부에 작성하는 텍스트



                * arr.map(callback(currentValue[, index[, array]])[, thisArg])

                -> 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환



                ex)     account.map(function(account, index) {      // 배열의 요소 값과 Array.map()이 제공하는 인덱스를 사용

                            return React.createElement('div', {key: index}, account.name)   // 인덱스를 key 속성으로 하고 안에는 account.name을 택스트로 가진 React 엘리먼트 <div/> 를 반환

                        })



            * 강력한 추상화

            -> 내부의 인터페이스는 숨기고, 대신 정규화 과정을 거친 합성 메소드와 속성을 제공



        -> 속도와 테스트 용이성

            : React의 가상 DOM은 자바스크립트 메모리에만 존재. 데이터를 변경하면 React는 가상 DOM을 먼저 비교하고, 렌더링 변경이 필요한 경우에만 실제 DOM에 렌더링 함 (꼭 필요한 부분만 갱신하여 내부 상태(가상 DOM)와 뷰(실제 DOM)를 같게 만듬)

            : 가상 DOM의 장점 => PhantomJS 같은 헤드리스 브라우저(GUI 없이 실행할 수 있는 브라우저) 없이도 단위 테스트가 가능


        -> React 의 폭넓은 개발 커뮤니티와 생태계

            : React의 개발 커뮤니티는 엄청나기 때문에, 대부분 직접 구현할 필요가 없음

    

    * React의 단점

        -> 모든 기능을 갖춘 프레임워크는 아님 (Redux나 Router같은 라이브러리를 함꼐 사용해야 함)

        -> 다른 프레임워크 만큼 성숙하지 않음 (아직 API의 변화가 있음)

        -> 아직 정통한 수준이 될 만한 모범 사례나 자료가 부족함

        -> 단방향 데이터 바인딩만 제공

            : 단방향 바인딩은 복잡한 앱에서 복잡도를 줄이는 데 도움을 주지만 AngularJS 같은 양방향 바인딩에 익숙한 개발자에게는 코드를 더 작상해야 하므로 불편함

        -> 리액티브 프로그래밍이라 볼 수 없음

            : 리액티브 프로그래밍 or 아키텍처는 보다 더 이벤트 기반이고, 탄력과 반응성이 뛰어남. 리액트는 옵저버블을 이용해서 비동기 데이터 스트림을 다루려면 RxJS같은 도구를 사용해야 함




    * 웹 애플리케이션에 React 적용하기

        -> React는 UI 라이브러리일 뿐이므로 어떤 형태의 백엔드나 프론트엔드 데이터 관리 라이브러리와도 함께 사용할 수 있음

        * React 라이브러리와 렌더링 대상

            -> React 커뮤니티는 여러 가지 렌더링 대상에 React를 적용할 수 잇는 패키지를 선보임 (컴포넌트 작성과 렌더링의 분리)



        * 단일 페이지 애플리케이션과 React

            -> 단일 패이지 애플리케이션(SPA) 아키텍쳐는 서버보다는 클라이언트, 즉 브라우저 측에 로직이 더 많은 팻 클라이언트

            -> SPA 아키텍처 동작 과정

                1. 사용자가 새로운 페이지를 열기 위해 브라우저에 URL 입력

                2. 브라우저가 URL 요청을 서버에 전송

                3. 서버는 응답으로 HTML, CSS, 자바스크립트 파일 같은 정적 자원을 보냄

                4. 자바스크립트 로드 후 추가로 AJAX, XHR(XMLHttpRequest, AJAX 요청을 생성하는 JavaScript API) 요청을 보내 서버에서 데이터를 불러옴

                5. 데이터는 JSON, XML 등의 포맷으로 전달받음

                6. SPA에 데이터가 전달되면 UI를 구성하는 HTML을 렌더링 함. SPA는 템플릿에 전달받은 데이터를 밀어넣고 브라우저 상에서 UI를 렌더링 함

            -> 모든 렌더링을 서버에서 해결하는 전통적인 방식과 달리 SPA에서는 데이터만 주고 받음(렌더링은 템플릿으로 HTML을 생성하는 과정)

 


 2. React 첫걸음

    * 엘리먼트 중첩

        -> 계층적 방식으로 더 복잡한 구조를 만드는 방법은 엘리먼트를 중첩하는 것

        -> 실제 DOM에 렌더링 하는 ReactDOM.render()에는 하나의 React 엘리먼트만 인자로 전달할 수 있음

        -> 동일한 DOM 계층에 요소 두 개를 렌더링 해야 하는 경우 문제가 발생

            : 시각적으로 영챵을 끼치지 않는 요소로 두 요소를 감싸는 방법으로 해결 (ex) <div> 또는 <span>을 컨테이너로 사용하는 것)

        -> createElement()에 두번째 매개변수 이후의 모든 매개변수는 자식 엘리먼트가 됨



    * React 컴포넌트 클래스 생성

        -> 컴포넌트 클래스를 이용하면 기능을 느슨하게 결합된 부분으로 분리하여 코드 재사용 가능

            * 느슨한 결합 : 다른 클래스를 직접적으로 사용하는 클래스의 의존성을 줄인 결합

        -> 추상화는 여러 팀이 거대하고 복잡한 애플리케이션에 UI를 재사용하는 것은 물론, 다른 프로젝트에서도 재사용 가능

        -> ES6 문법을 이용하면 React.Component 클래스를 상속받아서 React 컴포넌트 클래스 생성 가능



    * React 속성 사용하기

        -> React 컴포넌트의 속성(Props)은 React 선언형 스타일의 기초 (속성은 컴포넌트 내부에서 변경할 수 없는 값)

        -> <TAG_NAME PROPERTY_NAME=VALUE/>

        -> Props의 용도

            : 일반적인 HTML요소의 속성 (href, titile, style, class etc,,,)

            : React 컴포넌트 클래스의 자바스크립트 코드에서 this.props의 값

            ** 일치하는 HTML 속성이 있으면 해당 엘리먼트의 HTML 속성으로 사용 / 입력한 속성의 이름이 PROPERTY_NAME 이라면 컴포넌트 클래스 코드에서는 this.porps.PROPERTY_NAME으로 접근 가능

            ** 표준 HTML 속성명과 일치하지 않는다면 속성명 이 표준 속성이 아닌것 (HTML에 렌더링 하지 않음) / But, 이 값은 this.props.PROPERTY_NAME 같은 방식으로 접근 가능

        -> 같은 컴포넌트에 다른 속성 값을 입력하면 컴포넌트가 렌더링한 엘리먼트의 모습을 다르게 할 수 있음

        -> 컴포넌트 render() 메서드 내에서 this.props 객체에 접근하면 createElement()의 두번째 매개변수로 전달한 객체에 접근할 수 있음

        -> React.createElement()의 두번째 인자로 전달하는 키-값 쌍의 수는 제한이 없음

        -> 컴포넌트의 모든 속성을 자식 엘리먼트에 넘겨주는 것이 가능






3. JSX

    * JSX의 정의와 장점

        -> JSX는 함수 호출과 객체 생성을 위한 문법적 편의를 제공하는 자바스크립트의 확장으로, 특히 React.createElement() 호출을 반복해야 하는 불편을 해소

        -> JSX의 장점

        : 개발자 경험 개선 => 표현력이 뛰어나 코드를 읽기 쉽다. XML과 문법이 유사하여 중첩된 선언형 구조를 더 잘 나타냄

        : 팀의 생산성 향상 => JSX는 HTML과 비슷하여 개발지식이 있는 팀원이라면 코드 수정 가능

        : 문법 오류와 코드량 감소 => 작성해야 할 코드가 줄어들며, 실수나 반복을 줄여줌

        -> JSX를 사용하려면 브라우저에서 실행하기 전에 컴파일 또는 트랜스컴파일 과정을 거쳐 일반적인 자바스크립트로 변환해야 함



    * JSX의 이해

        -> JSX에서 속성 사용하기

        : 속성에 하드 코딩한 값을 사용하는 것은 유연하지 않음 (동적으로 생성한 값 사용)

        : 이 값은 컴포넌트 속성(this.props)에서 가져올 수 잇음

        : 이후 화살괄호(<>) 안에 중괄호({})를 작성하여 속성에 동적으로 생성한 값을 엘리먼트에 전달하면 됨



        : 때로는 사용자 지정 데이터를 속성으로 추가해야 하는 경우가 있음

            -> DOM의 HTML 비표준 속성에 데이터를 저장하는 것은 일반적으로 안티패턴임 (DOM을 데이터베이스나 프론트엔드 데이터 저장소로 사용하는 것은 적절하지 않기 때문/ 메모리 상의 가상 저장소에서 데이터를 가져오는것 보다 느림)

            -> JSX를 사용할 때 데이터를 반드시 HTML 요소의 속성으로 저장해야 하는 경우에는 data-* 속성을 사용함

            -> 사용자 지정 컴포넌트 클래스에는 내장 렌더러가 없고, 표준 사용자 지정 엘리먼트에 의존하므로 데이터를 다루기 위해 data-* 속성을 사용할 필요는 없음

            (this.props를 통해서 입력한 모든 속성에 접근할 수 있기 때문)


        -> React 컴포넌트 메서드 생성하기

            : React 컴포넌트에 애플리케이션을 위한 메서드 자유롭게 추가 가능 (React 컴포넌트가 클래스기 때문)


        -> JSX의 if/else 처리

            : return문 이전에 JSX 외부에서 변수를 선언한 후 JSX 내부에서 {}를 사용하여 출력

            : return문 이전에 JSX 외부에서 값을 반환하는 함수 표현식을 선언한 후 JSX 내부의 {}에서 실행

            : 삼항 연산자 사용

            : JSX 내부에서 즉시실행함수 사용

        -> JSX의 주석 작성 방법

            : JSX의 주석을 일반 자바스크립트의 주석과 비슷. JSX에 주석을 추가할 때는 표준 자바스크립트의 주석을 {}로 감싸서 작성



    * Babel을 이용한 JSX 트랜스파일러 설정

        -> JSX를 실행하려면 일반적인 자바스크립트 코드로 변환해야 함 => '트랜스파일레이션'

        -> Babel 의 주요 기능은 ES6 + /ES2015 + 컴파일러이지만, JSX를 자바스크립트로 변환하기도 함



    * React 와 JSX의 까다로운 부분

        -> 특수 문자

        : HTML 엔터티 코드를 사용하여 저작권 표시나 말바꿈표, 따옴표 등 특수문자를 표시

        : React/JSX는 위험한 HTML 구문에 대해 자동으로 이스케이프를 적용

        -> data-속성

        : React는 주로 HTML 비표준속성을 컴포넌트에 추가하면 무시함(React 동작 원리)

        : DOM 노드에 추가 데이터를 전달해야 하는 경우(안티패턴 - DOM을 데이터베이스나 로컬 스토리지처럼 ㅅ용하지 말아야함)

          But, 사용자 정의 속성을 렌더링해야 한다면, 속성의 접두사로 data-를 사용

          ex) <li data-object-id="097F4E4F">...</li>

        -> style 속성

        : JSX의 스타일 속성은 일반적인 HTML과 다르게 동작. JSX에서는 문자열 대신 자바스크립트 객체를 전달하고(React가 뷰를 더 빠르게 변경하기 때문), CSS 속성은 카멜 표기법을 작성

        ex) <span style={{borderColor: 'red',
              borderWidth: 1,
              borderStyle: 'solid'}}>Hey</span>

            <span style={{border: '1px red solid'}}>Hey</span>

        -> class 와 for 속성

        : React와 JSX는 class와 for를 제외하면 표준 HTML 속성을 모두 사용할 수 있음

        : class와 for는 자바스크립트와 ECMAScript의 예약어이고, JSX는 일반 자바스크립트로 변환해서 사용함
          따라서 class와 for 대신에 각각 className과 htmlFor를 사용

        -> bool 값을 속성으로 사용하는 경우

        : disabled, required, checked, autuFocus, readOnly 같은 일부 속성은 폼 요소에만 사용함
        (속성 값을 {}안에 반드시 자바스크립트 식으로 작성해야 함, 문자열 입력 X)




4. React 컴포넌트의 상태 객체

    -> 속성을 변경하여 뷰를 갱신할 수 있지만, 속성은 현재 컴포넌트 내부에서는 수정할 수 없음 (속성은 해당 컴포넌트 생성 시에 전달받는 값이기 때문)
       속성을 변경할 수 없는 경우 어떻게 해야 할까...?   뷰를 변경하기 위해서는 컴포넌트 내부에 변경할 수 잇는 다른 자료형이 필요 ==> 상태 객체 이용

    -> 서버 응답에 따라 콜백 코드가 컴포넌트의 상태를 변경
        상태(state)는 React 컴포넌트에 데이터를 저장하고, 데이터의 변경에 따라 자동으로 뷰를 갱신하도록 하는 핵심 개념

    * React 컴포넌트의 상태란?

        -> React의 state는 컴포넌트의 변경 가능한 데이터 저장소

        -> 컴포넌트를 속성과 상태가 있는 함수라고 생각하면 이 함수의 결과가 UI 표현(뷰)

        -> 상태 객체에 접근할 때는 이름을 이용. 이름은 this.state 객체의 속성

        -> React 개발자는 상태 객체를 이용해서 새로운 UI를 생성. 컴포넌트 속성(this.props)이나, 일반적인 변수(inputValue), 클래스 속성(this.inputValue)으로는 처리할 수 없는데, 이것들을 현재 컴포넌트 내부에서 변경하더라도 뷰를 자동으로 변경할 수 없기 때문

        ** 속성은 부모 컴포넌트에서 새로운 값을 전달하면 뷰를 갱신하여 현재 다루고 있는 자식 컴포넌트의 새로운 인스턴스를 생성함. 해당 자식 컴포넌트의 컨텍스트 내에서 this.props.inputValue = 'California' 같은 방식으로 속성을 변경하려고 해도 소용 없음

    * 상태 객체 다루기

        -> 상태 객체는 컴포넌트의 멤버 변수로 this를 통해 접근 (render()에서 this.state를 렌더링 할 수 있음)
        ex) this.state.name 

            * 초기 상태 설정하기

            -> render()에서 상태 데이터를 사용하려면 먼저 상태를 초기화해야 함
            상태를 설정하려면 React.Component를 사용하는 ES6 클래스의 생성자에서 this.state를 선언함. 반드시 super()에 속성을 전달하여 실행해야 함 (그렇지 않으면 부모 클래스 React.Component의 기능을 정상적으로 사용할 수 없음)

            -> 여기서 this.state의 값은 반드시 객체
            ** 객체지향 프로그래밍 언어에서 클래스의 인스턴스가 생성될 때 constructor()가 호출됨
            또한, 부모 클래스가 있는 클래스에서 constructor() 메서드를 생성하면 그 안에서 거의 항상 super()를 호출 (그렇지 않으면 부모 클래스의 생성자가 실행되지 않음)
            상속으로 클래스를 구현하는 경우에 constructor() 메서드를 따로 작성하지 않으면 super()를 호출한 것으로 가정
       
            -> constructor() 메서드는 앞의 컴포넌트 클래스에서 React 엘리먼트가 생성되는 시점에 한 번만 호출됨. 이렇게 constructor() 메서드 내에서 한 번만 this.state로 직접 상태를 선언할 수 있음
            ** 이렇게하면 첫번째 값을 입력해서 보여줄 뿐, But React에는 상태를 갱신하는 방법도 있음ㅋ

            * 상태 갱신하기
             
             -> 클래스 메서드인 this.setState(data, callback)를 사용하면 상태를 변경할 수 있음. 이 메서드를 실행하면 react는 전달하는 메서드를 현재 상태에 병합하고 render()를 호출함. 이후에 React가 callback 함수를 실행함 (setState는 비동기로 작동)

             -> setState()가 완료되길 기다리지 않고 새로운 상태에 의존하는 작업을 수행하는 것은 비동기 작업을 동기처럼 다루는 것. 이 경우 갱신될 새로운 상태 값에 의존하는 코드를 작성하면 버그가 생길 수 있는데, 상태 객체가 이전 값을 가진 이전의 상태 객체로 남아있기 때문

             -> 일반적으로 setState()는 이벤트 핸들러나 데이터 수신 또는 갱신을 처리하는 콜백함수에서 호출됨

             -> setState()에서 매번 상태 객체를 완전히 바꾸지 않음(일부분만 수정하거나 병합)

             -> setState()가 render()를 실행시킴

             ** JSX에서 값을 출력할 때는 중괄호({}) 사용. 그러므로 뷰에서 render() 문에서 {this.state.NAME}를 사용



    * 상태 객체와 속성

    -> 상태 객체와 속성은 모두 클래스의 멤버이며, 각각 this.state와 this.props를 말함 
    
    -> But, 상태 객체는 변경 가능한 반면, 속성은 변경 불가능 함
       또한, 속성은 부모 컴포넌트에서 전달하지만, 상태는 부모 컴포넌트가 아닌 해당 컴포넌트 자체에서 정의함 (속성 값을 변경하는 것은 오직 부모 컴포넌트에서만 가능하고, 자체적으로 변경할 수 없음 => 속성은 뷰 생성 시에 정해지고, 정적인 상태로 유지됨 / 상태는 해당 컴포넌트에서 설정되고 갱신됨)


    * 상태비저장 컴포넌트

    -> 상태비저장 컴포넌트(stateless component)는 상태 객체가 없으며, 컴포넌트 메서드 또는 다른 React 라이프사이클 이벤트 또는 메서드를 갖지 않음

    -> 상태비저장 컴포넌트는 속성을 입력받아 UI 엘리먼트를 출력하는 간단한 함수

    -> 상태비저장 컴포넌트는 출력을 결정하는 입력이 한 가지 뿐이라 예측할 수 있다는 이점이 있음 (유지보수와 디버깅이 편리함)

    -> React는 함수형 스타일을 사용하여 인자로 속성을 전달받아 뷰를 반환하는 함수를 생성할 수 있음 (보통 함수나 화살표 함수 문법으로 작성한 컴포넌트)
        => 상태비저장 컴포넌트를 생성하려면 함수로 선언해라!

    -> 상태비저장 컴포넌트는 propTypes와 defaultProps를 프로퍼티로 가질 수 있음

    * 상태비저장 컴포넌트와 상태저장 컴포넌트의 비교

    -> 상태 저장은 적을 수록, 상태비저장 컴포넌트는 많이 사용할 수록 좋음

    -> 상태비저장 컴포넌트의 사용 이유

        : HTML 렌더링을 처리하는 것으로 충분한 경우, 별도의 인스턴스를 생성하거나, 라이프사이클 메서드를 사용하지 않아도 되는 상태비저장 컴포넌트가 더 선언적으로 작동

        : 중복을 줄일 수 있고, 더 나은 문법을 바탕으로 좀 더 간결하게 컴포넌트를 작성할 수 있음

    -> 상태비저장 컴포넌트가 반드시 정적인 것음 아님, 다른 속성을 전달하면 상태비저장 컴포넌트의 모습을 바꿀 수 있음

    -> 단순하게 유지해야 함. 상태 객체나 메서드를 추가하지 않아야 함


5. React 컴포넌트 라이프사이클 이벤트

    -> React는 라이프사이클 이벤트를 기반으로 컴포넌트의 동작을 제어하고, 사용자 정의를 할 수 있음

    -> 라이프사이클 이벤트 종류

    -> 라이프사이클 이벤트는 컴포넌트가 수행한 작업이나 앞으로 수행할 작업에 따라 특정 시점에  실행됨

    * 이벤트 분류

    : 마운팅 이벤트 
            => React 엘리먼트(컴포넌트 클래스의 인스턴스)를 DOM에 추가할 때 발생 / React가 이벤트를 한 번만 실행

        : 갱신 이벤트
            => 속성이나 상태가 변경되어 React 엘리먼트를 갱신할 때 발생함 / React가 이벤트를 여러 번 실행

        : 언마운팅 이벤트 
            => React 엘리먼트를 DOM에서 제거할 때 발생함 / React가 이벤트를 한 번만 실행
    
    -> 라이프사이클의 실행 순서

        (마운트)

        : constructor()

        : static getDerivedStateFromProps()

        : render()

        : componentDidMount()

        (업데이트)

        : static getDerivedStateFromProps()

        : shouldConponentUpdate()

        : render()

        : getSnapshotBeforeUpdate()

        : componentDidUpdate()

        (마운트 해제)

        : componentWillUnmount()

        ** 순수함수

        -> 같은 입력에 대해 항상 같은 출력

        -> 부수효과가 없음 (외부 상태를 변경하지 않음)

        -> 외부 상태에 의존하지 않음

    * 이벤트 구현

    -> 메서드 이름은 이벤트 이름과 일치해야 함

    -> 컴포넌트 라이프사이클 이벤트에 대한 이벤트 리스너를 생성하는 것은 컴포넌트나 클래스에 메서드를 정의하면 됨

    * 자주 사용되는 생명주기 메서드

        * render()

        -> 해당 메서드 호출시 this.props, this.state의 값을 활용하여 React 엘리먼트, 배열과 Fragment, Portal, 문자열과 숫자, Boolean 또는 null 중 하나를 반환해야 함

        -> render() 함수는 순수해야 함. 즉, 컴포넌트의 state를 변경하지 않고, 호출될 때마다 동일한 결과를 반환해야 하며, 브라우저와 직접적으로 상호작용 하지 않음

        -> render()에서 setState()를 호출하면 무한루프에 빠짐

        * constructor()

        -> 메서드를 바인딩하거나 state를 초기화하는 작업이 없다면, 해당 React 컴포넌트에는 생성자를 구현하지 않아도 됨

        -> 생상자의 목적

        : this.state에 객체를 할당하여 지역 state 초기화

        : 인스턴스에 이벤트 처리 메서드를 바인딩

        -> constructor 내부에서 setState() 호출 말고, this.state에 초기 state 값을 할당해야 함

        ** state에 props를 복사하면 안됨

    * 마운팅 이벤트

    -> 마운팅 이벤트 유형은 모두 실제 DOM에 컴포넌트를 추가하는 것에 대한 이벤트 (React 엘리먼트가 DOM에 노출되는 것)

    : componentDidMount() : React 엘리먼트를 실제 DOM에 추가한 시점으로, 이 시점의 React 엘리먼트는 DOM 노드

    -> constructor()가 먼저 실행됨

    -> React는 엘리먼트를 먼저 렌더링하고 나서 DOM에 추가함 (여기서 말하는 렌더링은 컴포넌트 클래스의 render()를 호출하는 것을 말하며, 실제 DOM에 그리는 것이 아님)

        * componentWillMount()  ===> 현재 deprecated!

        -> ReactDOM.render()를 호출해서 React 엘리먼트를 브라우저에 렌더링하는 시점에서 componentWillMount()가 실행됨

        -> React 컴포넌트를 서버에서 렌더링하면 기본적으로 HTML 문자열을 얻을 수 있는데, 서버에는 DOM이 없으므로 HTML을 DOM에 추가하는 작업은 없지만, 서버 렌더링 과정에서도 componentWillMount()는 실행됨

        -> componentWillMount()에서 갱신하는 새로운 상태에 차이점이 있어도 재렌더링 되지 않음. render()에서 새로운 상태 값을 가져오기 때문 (componentWillMount()에서 setState()를 실행할 수 있음)

        * componentDidMount()

        -> 컴포넌트가 마운트된 직후 (트리에 삽입된 직후), DOM 노드가 있어야 하는 초기화 작업은 이 메서드에서 이루어져야 함

        -> 외부에서 데이터를 불러와야 한다면, 네트워크 요청을 보내기 위한 적절한 위치

        -> componentDidMount()는 초기 렌더링을 마친 후에 실행됨. 또한, 브라우저에서 한 번 실행되고 서버 렌더링에서는 실행되지 않음

        -> componentDidMount()에서 자식 엘리먼트를 참조로 접근할 수 있음

        -> 자식 컴포넌트의 componentDidMount() 메서드는 부모 컴포넌트의 componentDidMount() 보다 먼저 호출됨

        -> componentDidMount()에서 DOM 요소에 접근할 수 있고, 새로운 fetch() API를 이용해서 XHR/AJAX 요청을 보내 데이터를 가져올 수 있음

        ** Fetch API
        => promise를 이용해 XHR 요청을 보낼 수 있는 통일된 방식


    * 갱신 이벤트

        * componentWillReceiveProps(newProps)     ===> 현재 deprecated!! (getDerivedStateFromProps로 대체됨)

        -> 컴포넌트가 새로운 속성을 전달받을 때 실행 됨 (들어오는 속성의 전환) => 컴포넌트를 최초로 렌더링할 때는 실행되지 않음

        -> 컴포넌트에 새로운 속성을 받아오는 시점에 끼어들어서 render()를 호출하기 전에 일부 로직을 추가할 수 있음

        -> componentWillReceiveProps(newProps)에서 setState() 메서드를 호출해도 추가로 다시 렌더링이 발생하지 않음

        -> componentWillReceiveProps(newProps)는 속성 값의 변경과 상관없이(부모 구조 또는 호출에 따라) 재렌더링이 이뤄질 때마다 실행됨
            => React 입장에서는 속성 값이 변경되었는지 알 수 있는 방법이 없음

            ** 재렌더링이 반드시 실제 DOM의 변경을 의미하진 않음

            ** 갱신 여부와 실제 DOM에서 무엇을 갱신할지는 shouldComponentUpdate()와 보정 과정에 위임됨

        * static getDerivedStateFromProps(nextProps, prevState)

        -> 최초 마운트 시와 갱신 시 모두에서 render 메서드를 호출하기 직전에 호출됨

        -> state를 갱신하기 위한 객체를 반환하거나, null을 반환하여 아무 것도 갱신하지 않을 수 있음

        -> 이 메서드는 컴포넌트 인서턴스에 접근할 수 없음. 인스턴스 접근이 필요하다면, class 정의 외부에서 컴포넌트의 props와 state에 대한 순수 함수를 추출하여 getDerivedFromProps()와 다른 클래스 메서드 간에 코드 공유 및 재사용 할 수 있음

        * shouldComponentUpdate()

        -> 현재 state 또는 props가 변화가 컴포넌트의 출력 결과에 영향을 미치는지 여부를 React가 알 수 있음

        -> props 또는 state가  새로운 값으로 갱신되어서 렌더링 직전에 실행되나, 초기 렌더링 시점이나 forceUpdate() 호출 시에는 실행되지 않음

            ** forceUpdate()

            : state나 props가 아닌, 다른 data를 통해서 ,render() 함수가 동작하게 되어 잇는 경우 React의 기본적인 component life cycle 과 무관하기 때문에, 직접 React 에게 해당 component가 re-rendering 되야 한다고 알려야 함. 이때 사용 가능한 함수


        -> shouldComponentUpdate()에서 false를 반환하도록 구현하면 React가 다시 렌더링 되지 않아서 성능 저하를 피할 수 있음 (성능 최적화를 위한 함수)
            => 컴포넌트의 재렌더링을 제어할 수 있는 함수 / false를 반환할 경우 componentWillUpdate(), componentDidUpdate()도 호출하지 않음

        * componentWillUpdate()    ===> deprecated!!

        -> 새로운 속성이나 상태를 받은 후 렌더링 직전에 호출됨 (초기 렌더링 시에는 호출되지 않음)

        -> componentWillUpdate() 메서드를 사용하고, 이 메서드 내에서 this.setState()를 사용하는 것은 피해라
            => 컴포넌트를 갱신하는 중에 다시 갱신하기 때문

        * componentDidUpdate(prevProps, prevState, snapshot)

        -> 컴포넌트의 갱신 결과가 실제 DOM에 반영된 직후에 실행됨 (초기 렌더링 시에는 호출되지 않음)

        -> 컴포넌트가 갱신되었을 때 DOM을 조작하기 위해 / 이전과 현재의 props를 비교하여 네트워크 요청을 보내는 작업을 이 메서드에서 수행하면 됨 (props의 비교)

        -> componentDidUpdate()에서 setState()를 즉시 호출할 수도 있지만, 조건문으로 감싸지 않으면 무한 반복이 발생할 수 있음

        -> 컴포넌트에서 getSnapshotBeforeUpdate()를 구현한다면, 해당 메서드가 반환하는 값은 componentDidUpdate()에 세 번째 
        'snapshot' 인자로 넘겨짐

        * getSnapshotBeforeUpdate(prevProps, prevState)

        -> 가장 마지막으로 렌더링된 결과가 DOM 등에 반영되었을 때에 호출됨

        -> 해당 메서드 사용 시 컴포넌트가 DOM으로부터 스크롤 위치 등과 같은 정보를 이후 변경되기 전에 얻을 수 있음

        -> 이 lifecycle이 반환하는 값은 componentDidUpdate()에 인자로 전달됨

        -> 스냅샷 값 반환하거나 null을 반환함


    * 언마운팅 이벤트

        * componentWillUnmount()

        -> DOM에서 컴포넌트가 제거되기 직전에 호출 됨

        -> 정리하기 위한 코드를 이메서드에 추가 가능 (ex) 타이머 제거, 네트워크 요청 취소, DOM요소 정리, componentDidMount()애서 연결한 이벤트를 제거 가능)


    * 이외의 lifecycle 메서드

        * componentDidCatch(error, info)

        -> 해당 메서드는 자손 컴포넌트에서 오류가 발생했을 때 호출됨

        -> error: 발생한 오류 / info: 어떤 컴포넌트가 오류를 발생시켰는지에 대한 정보를 포함한 componentStack 키를 갖고 있는 객체




* Hook의 개요

    -> Hook 기존에 우리가 알고 있는 React 컨셉을 대체하지 않음

        : Hook은 함수 컴포넌트에서 React state와 생명주기 기능을 연동 할 수 있게 해주는 함수

        : React는 useState 같은 내장 Hook을 몇 가지 제공함 컴포넌트 간에 상태 관련 로직을 재사용하기 위해 Hook을 직접 만드는 것도 가능

        : Hook을 사용하면 컴포넌트로부터 상태 관련 로직을 추상화할 수 있음. 또한 계층 변화 없이 상태 관련 로직을 재사용할 수 있도록 도와줌

        : class는 코드의 재사용성과 코드 구성을 좀 더 어렵게 만들 뿐 아니라, Javascript에서 어떻게 this가 작동하는 지 알아야 함

    * 함수형 컴포넌트

    -> 보통 state, lifecycle API를 전혀 사용하지 않을 때 함수형 컴포넌트를 사용

    -> Redux를 사용하여 컴포넌트들을 구성할 때, Container 컴포넌트는 클래스형 컴포넌트를 사용하고, Presentational 컴포넌트는 함수형 컴포넌트를 사용함

    * State Hook 

    : const [count, setCount] = useState()   ==> 배열 구조 분해 이용

    -> useState는 현재의 state 값과 이 값을 업데이트하는 함수를 쌍으로 제공함. 이 함수를 이벤트 핸들러나 다른 곳에서 호출 가능

    -> class의 this.setState와 유사하지만, 이전 state와 새로운 state를 합치지 않는다는 차이가 있음

    -> userState는 인자로 초기 state를 하나 받고, this.state와 달리 setState Hook의 state는 객체일 필요 없음

    -> state를 가져올 때, class 컴포넌트는 count를 보여주기 위해 this.state.count를 사용하는 반면, 함수 컴포넌트는 count를 직접 사용

    -> state를 갱신할 때, 클래스 컴포넌트는 count를 갱신하기 위해 this.setState()를 호출하느 반면, 함수 컴포넌트는 setCount와 count 변수를 가지고 있으므로 this를 호출하지 않아도 됨

    -> 하나의 컴포넌트 내에서 State Hook을 여러개 사용할 수도 있음 (class의 경우 객체로 관리)

    -> 클래스 컴포너느의 this.setState와 달리 state를 갱신하는 것은 병합하는 것이 아니라 '대체'하는 것

    * Effect Hook

    -> React 컴포넌트 안에서 데이터를 가져오거나 구독하고, DOM을 직접 조작하는 작업을 'side effect'라 함 (이것은 다른 컴포넌트에 영향을 줄 수도 있고, 렌더링 하는 과정에서 구현할 수 없는 작업이기 때문)

    -> useEffect는 함수 컴포넌트 내에서 이런 side effects를 수행할 수 있게 해줌

    -> React class의 componentDidMount, componentDidUpdate, componentWillUnmount와 같은 목적으로 제공됨

    -> 리액트 컴포넌트에는 일반적으로 두 종류의 side effects가 있음 (정리(clean-up)가 필요한 것과 그렇지 않은 것)

        : 정리(clean-up)를 이용하지 않는 effects

        => 어떤 것도 반환하지 않음

        => 리액트가 DOM을 업데이트한 뒤 추가로 코드를 실행해야 하는 경우
        네트워크 리퀘스트, DOM 수동 조작, 로깅 등

        => userEffect가 하는 일

        --> useEffect를 이용하여 리액트에게 컴포넌트가 렌더링 이후에 어떤 일을 수행하는 지를 말함. 리액트는 우리가 넘긴 함수(effect)를 기억했다가 DOM 업데이트를 수행한 이후에 불러낼 것

        => useEffect를 컴포넌트 안에 두는 이유

        --> effect를 통해 state 변수(또는 그 어떤 props에도)에 접근할 수 있게 됨. 함수 범위 안에 존재하기 때문에 특별한 API 없이도 값을 얻을 수 있음

        => useEffect는 렌더링 이후에 매번 수행되는 걸까?

        --> yes, 기본적으로 첫번째 렌더링과 이후 모든 업데이트에서 수행됨

        => 리렌더링하는 때마다 모두 이전과 다른 effect로 교체하여 전달함. 각각의 effect는 특정한 렌더링에 속함

        

        : 정리(clean-up)을 이용하는 Effects

        => ex) 외부 데이터에 구독을 설정해야 하는 경우 - 메모리 누수가 발생하지 않도록 정리하하는 것은 매우 중요

        => class를 사용하는 경우, componentDidMount에서 구독을 설정한 뒤, componentWillUnmount에서 이를 정리함 (이 두 함수가 대칭을 이룸)

        => effect에서 함수를 반환하는 이유

        --> effect를 위한 추가적인 정리(clean-up) 메커니즘. 구독의 추가와 제거가 모두 하나의 effect를 구성함

        => 리액트가 effect를 정리(clean-up)하는 시점은 언제일까?

        --> 리액트는 컴포넌트가 마운트 해제되는 때에 한번만이 아니라 모든 리렌더링 시에 실행됨

        => 모든 렌더링 이후에 effect를 정리하거나 적용하는 것이 때때로 성능 저하를 발생시키는 경우도 있음
        (useEffect Hook API에 이미 내재하여 있어서 특정 값들이 리렌더링 시에 변경되지 않는다면 리액트로 하여금 effect를 건너뛰도록 할 수 있음 - useEffect의 선택적 인수인 두번째 인수로 배열을 넘기면 됨)

        ** effect를 실행하고 이를 정리하는 과정을 딱 한 번씩만 실행하고 싶다면, 빈 배열을 두 번재 인수로 넘기면 됨. 해당 effect가 prop이나 state의 그 어떤값에도 의존하지 않으며 따라서 재실행되어야 할 필요가 없음


    * Hook 사용 규칙

    -> 최상위에서만 hook을 호출해야 함. 반복문, 조건문, 중첩된 함수 내에서 hook을 실행하면 안됨

    -> React 함수 컴포넌트 내에서만 hook을 호출해야 함 / 직접 작성한 custom hook 내에서도 호출할 수 있음




6. React에서 이벤트 다루기

    * React에서 DOM 이벤트 다루기

        -> bind()를 이용하면 이벤트 핸들러 함수가 클래스의 인스턴스인 React 엘리먼트에 대한 참조를 유지할 수 있음

        -> 만약 use strict를 선언한 상태에서 this는 null이 되고, 다음의 경우에는 bind(this)로 바인딩 하지 않음

        : this를 이용해서 해당 클래스를 참조할 필요가 없을 때

        : ES6+ 클래스 대신 예전 방식이 React.createClass()를 사용할 때는, 이때는 createClass()가 자동으로 바인딩함

        : 화살표 함수(() => {})를 사용할 때

        -> 이벤트 핸들러를 생성자에서 바인딩하면 중복을 제거할 수 있고, 모든 바인딩을 한 곳에서 작성할 수 있으므로 이 방법 추천

        * 캡쳐 및 버블링 단계

        -> 버블링 모드에서는 이벤트가 가장 내부에 잇는 대상 요소에서 이벤트를 캡처한 후, 대상 요소의 부모 요소를 시작으로 외부의 상위 요소로 이벤트가 전파됨

        -> 캡처 모드에서는 이벤트가 가장 바깥 쪽의 요소에 의해 캡처된 후 내부 요소로 전파됨

        -> 캡처 단계를 위한 이벤트 리스너를 등록할 때는 이벤트 이름 뒤에 Capture를 추가하여 작성함 (ex) onMouseOverCapture)

        * React 이벤트 살펴보기

        -> jQuery나 일반 자바스크립트는 DOM 노드에 직접 이벤트 리스너를 연결하지만, React는 이벤트를 노드에 직접 연결하는 방법은 UI 라이프사이클에서 이벤트를 추가하거나 제거할 때 문제가 생길 수 있어서 그렇게 하지 않음

            1. DOM 이벤트 발생

            2. 부모 요소로 이벤트 버블링

            3. 버블링을 거쳐 최상위인 Document에 전달된 이벤트를 React 이벤트 리스너가 잡아냄

            4. 이벤트 핸들러가 이벤트를 처리함

        -> 특정 DOM 노드(<div> 요소)에 연결된 이벤트 리스너를 확인하려면 개발자 도구 콘솔에서 전역 메서드인 getEventListeners($0)를 실행함

        -> React는 이벤트 리스너를 각 요소가 아닌, 최상위 부모인 document에 연결함

        * React 합성 이벤트 객체 다루기

        -> DOM 이벤트를 다룰 때, 이벤트 핸들러에 전달되는 이벤트 객체에 다른 프로퍼티나 메서드가 있을 수도 잇음

        -> React는 크로스 브라우징 문제를 해결하기 위해 내부적으로 SyntheticEvent 클래스의 인스턴스를 이벤트 핸들러에 전달함

        -> 내장 프로퍼티나 메서드를 찾을 수 없을 때는 nativeEvent를 통해서 브라우저의 내장 이벤트에 접근할 수 있음

        -> 이벤트 객체의 target 프로퍼티느 이벤트가 캡처된 곳이 아니라 이벤트가 발생한 DOM 노드로 currentTarget과는 차이가 있음

        -> 대부분의 UI를 만들 때는 이벤트 캡처뿐만 아니라 입력상자의 텍스트가 필요한 경우가 있는데, event.target.value로 접근

        -> 이벤트 핸들러가 한 번 실행되고 나면 합성 이벤트는 null이 되어 더 이상 사용할 수 없음. 
        이벤트 핸들러를 실행한 후에도 합성 이벤트를 유지하려면 event.persist() 메서드를 사용해야 함.
        이 메서드를 실행하면 이벤트 객체가 재사용되지 않으므로 null로 처리되지 않음

        -> 크로스 브라우징을 해결하기 위해 합성 이벤트를 사용하는데, 이런 내장 이벤트를 직접 다루는 경우에는 크로스 브라우징 문제를 직접 해결해야 함

        * 이벤트와 상태 사용하기

        -> 이벤트와 함쎄 상태를 사요하여 이벤트를 처맇고 컴포넌트의 상태를 변경할 수 있다면 사용자 조작과 상호작용하는 UI를 만들 수 있고, 외부 코드나 표현이 불필요하므로 더 독립적인 컴포넌트를 만들 수 있음

        * 이벤트 핸들러를 속성으로 전달하기

        -> 부모 컴포넌트가 전달한 이벤트 핸들러를 this.props.handler 속성으로 접근하여 사용함

        -> 자식 컴포넌트에 state와 이벤트 핸들러를 속성으로 전달하려면, 부모 컴포넌트의 render() 메서드레 JSX를 작성할 때 속성으로 추가함

        * 컴포넌트 간의 데이터 교환

        -> 이벤트 핸들러를 부모 컴포넌트에 두면 자식 컴포넌트들과 정보를 교환할 수 있음

        -> 자식 컴포넌트 간에 상호작용이 필요한 경우에는 이벤트 관련 로직을 부모나 컨테이너 컴포넌트에 두는것이 바람직함 (자식 컴포넌트가 두개 이상인 경우에)


    * React가 지원하지 않는 DOM 이벤트 처리하기

    -> resize처럼 미지원 이벤트에 연결하려면 React 컴포넌트의 라이프사이클 이벤트를 사용함
    ex) componentDidMount()에서 window 이벤트 리스너를 추가하고, 같은 이벤트 리스너를 componentWillUnmount()에서 제거해서 컴포넌트가 DOM에서 제거될 때 이벤트 리스너도 제거함




7. React에서 폼 다루기

    * React에서 폼을 다루기 위한 권장 방법

        -> 일반적인 HTML에서 입력 요소를 다룰 때는 페이지의 DOM이 해당 요소의 값을 DOM 노드에서 관리함

        -> 전통적인 HTML의 폼 요소는 사용자 입력에 의해 요소의 상태가 변경됨, 그렇지만 React는 UI를 묘사하기 위해 선언형 스타일을 사용하므로 상태를 적절하게 반영하려면 입력이 동적이어야 함

        -> So, 컴포넌트의 상태를 자바스크립트에서 관리하지 않고, 뷰와 동기화하지 않으면 내부 상태와 뷰가 다른 경우가 발생 함
            => React의 render() 메서드를 폼 요소의 데이터를 포함한 실제 DOM에 최대한 밀접하게 유지시켜야 함

        -> HTML에서 <input>영역을 구현하면 React는 항상 상태를 실제 DOM에 동기화되도록 유지함 (React는 사용자가 값을 바꿀수 없게 함)

        -> React는 사용자가 폼 요소에 무언가 작성한다는 것을 알 수 없음. React가 변경을 감지할 수 있도록 onChange에 이벤트 핸들러를 추가해야 함

            * 단방향 바인딩

            -> 상태가 뷰를 바꿈(반대로는 불가능), 모델에서 뷰로 데이터를 옮기는 것을 담당

            -> 여러 개의 뷰에서 암묵적으로 상태 또는 데이터 모델을 갱신하거나 역으로 상태가 뷰를 갱신하는 거대한 규모의 앱을 다룰 때 복잡도를 제거할 수 있다는 것이 단방향 바인딩의 대표적인 이점

            1. render()에서 상태 값을 이용해 엘리먼트를 정의함

            2. onChange를 이용해서 폼 요소에 발생하는 변경 사항을 감지함

            3. 이벤트 핸들러에서 내부 상태를 갱신함

            4. 새로운 값이 상태에 저장되면 새로운 render()가 실행되어 뷰를 갱신함

            cf) 양방향 바인딩

                -> 모델에서 뷰뿐만 아니라 뷰에서 모델로 변경을 전달하기도 함

                -> 명시적으로 과정을 구현하지 않아도 뷰에서 상태를 자동으로 갱신함

                -> Angular 1의 작동 방식
        
        ** React에서 폼을 다룰 때 권장하는 방식

            -> 제어 컴포넌트를 사용하는 방식 : 컴포넌트 내부 상태와 뷰를 항상 동기화시킬 수 있음

    
        * React에서 폼과 이벤트 정의하기

        -> 일반적으로 서로 기능이 다른 여러 개의 입력 요소 집합을 다루는 경우에 잘못될 수 있기 때문에 입력요소를 DOM의 아무곳에나 무작위로 두지 않고, input 요소를 공통 목적을 가진 항목끼리 묶어서 <form> 요소로 감쌈

        -> React의 <form>은 HTML의 <form>처럼 렌더링되므로 HTML 폼에 적용할 수 있는 방법은 React의 <form>요소에도 적용할 수 있음 (ex)HTML5 명세에 의하면 폼은 중첩할 수 없음)

        -> <form>요소에 이벤트를 사용할 수 있음 (표준 React DOM 이벤트와 함께, 폼 요소를 위한 세 가지 이벤트 지원)

            : onChange => 폼의 입력 요소에 변경이 생기면 발생함

            : onInput => <textarea><input> 요소의 값이 변경될 때 발생함. React 팀은 이 이벤트의 사용을 추천하지 않음

            : onSubmit => 폼 제출 시 발생함. 흔히 enter를 눌렀을 때 발생함

        -> 폼 이벤트를 사용하면 input 요소 그룹 같은 전체 폼에서 특정 이벤트를 감지해야 하는 경우에 편리함


        * 폼 요소 정의하기


        -> HTML의 거의 모든 입력 영역을 네 가지 요소, 즉 <input>, <textarea>, <select>, <option>을 사용해서 구현할 수 있음.
        
        (React에서 속성은 원래 변경 할 수 없지만, 폼 요소는 사용자가 폼 요소와 상호작용하면서 속성을 변경하므로 특별함)


        -> 폼 요소에서 변경 가능한 속성을 '대화형 속성'이라 함 (value, checked, selected)


        -> 폼 요소에 연결한 onChange 같은 이벤트에서 이 속성을 읽을 수 있음


            : value => <input>, <textarea>, <select>에 적용됨


            : checked => <input>에 type="checkbox" 또는 type="radio"인 경우에 적용됨


            : selected => <select>와 함께 <option>을 사용할 때 적용됨


        -> 대화형 속성을 이용해서 값을 읽거나 변경할 수 있음


            * <input> 요소


            -> input 요소는 type 속성에 입력하는 값에 따라 여러 가지 방식의 입력 영역을 렌더링할 수 있음


                : text, password, radio, checkbox, button

                ** radio와 checkbox의 경우, 그룹을 만들 때는 name 속성에 같은 값을 입력함


            -> 체크박스와 라디오 버튼을 제외한 모든 <input> 요소의 주요 용도는 요소의 변경 가능한 대화형 속성을 사용하는 것


            -> 라디오 버튼에는 선택 값이 하나이므로 상태에서 할당할 필요가 없음. 따라서 빈 객체를 사용할 수 있었음. 그러나 체크박스의 경우, 선택 값이 여러 가지이므로 교체하는 대신 병합해야 함


            -> 상태를 다룰때 잠재적인 충돌을 방지하기 위해 Object.assign()을 이용해 값을 할당하는 것이 좋음 ==> '복제'


            * <textarea> 요소


            -> <textarea> 요소는 노트, 블로그 게시글, 코드 조각처럼 장문 입력을 감지하고 보여주기 위해 사용됨. 일반적인 HTML에서 <textarea>는 inner HTML을 이용하여(자식을 말함)값을 보여줌


            -> 반면, React는 value 속성을 이용함. React는 <textarea>에 자식이 있는 경우에는 자식으로 입력된 텍스트를 기본값으로 사용.


            -> <input> 요소와 마찬가지로 변경을 감지하려면 onChange를 사용함


            * <select>와 <option> 요소


            -> 사용자가 미리 입력된 값 목록에서 한 가지 또는 여러 가지 값을 선택할 수 잇는 훌륭한 UX 제공


            -> React에서는 선택된 요소의 순서를 확인하기 위해 <select>에 value 속성 사용

        

        * 변경 감지하기


        -> 폼 요소의 변경을 감지할 때는 onChange 이벤트 리스너를 이용함.


        -> React의 onChange 이벤트는 일반적인 DOM의 onInput 이벤트를 대체함
        

        -> But, 일반적인 DOM의 onChange 이벤트는 요소가 포커스를 잃었을 때만 발생하지만, React의 onChange 이벤트는 모든 새로운 입력에 대해 발생함


        -> onChange 이벤트를 발생시키는 요인은 요소에 따라 차이가 있음


            : <input>, <textarea>, <select> => value가 변경될 때 onChange 이벤트가 발생


            : <input> 체크박스와 라디오 버튼 => checked가 변경될 때 onChange 이벤트가 발생


        -> 이벤트 핸들러의 인자로는 합성 이벤트(SyntheticEvent)를 받음. 요소에 따라 event.target은 value, checked, selected 같은 값을 갖음


        -> 변경을 감지하려면 이벤트 핸들러를 정의하고(JSX의 {}에 인라인으로 작성할 수도 있음) onChange 속성으로 이벤트 핸들러를 전달해주면 됨


        -> onChange를 정의하지 않고, value만 입력하면 React가 경고를 보내고 요소를 읽기 전용으로 만들어 줌



    * 폼을 다루는 다른 방법


        -> 뷰의 DOM 상태와 React의 내부 상태에 차이가 있을 수 있어 비제어 컴포넌트는 권장하지 않지만, 서버에 전달할 간단한 폼을 만들 때는 비제어 컴포넌트가 유용함
        (복잡한 사용자 입력과 조작이 많은 UI 요소를 만드는 경우가 아니라면 비제어 패턴을 사용하는 것을 고려해 볼만 함)


        -> 비제어 컴포넌트를 사용하려면 폼에서 제출 이벤트를 정의해야 함 (보통 버튼에 onClick 이벤트나 폼의 onSubmit 이벤트를 사용함)


            : 제어 엘리먼트를 사용할 때처럼 변경을 감지하여 상태에 저장하지만, 상태를 value에 사용하지 않고 제출 시에만 사용하는 방식


            : 변경을 감지하지 않는 방식 


        * 비제어 엘리먼트에서 변경 감지하기


            -> React에서 비제어 컴포넌트는 value 속성을 React에서 설정하지 않는 다는 것을 의미함


            -> 비제어 컴포넌트를 사용하는 경우에는 사용자가 폼 요소에 무엇이든 입력할 수 있으므로 뷰와 상태 사이에 차이가 발생함


        * 비제어 엘리먼트에서 이벤트를 감지하지 않는 경우


            -> 변경을 감지하지 않고 비제어 엘리먼트를 사용하려면 다른 엘리먼트에 접근해서 데이터를 가져올 수 있는 방법이 필요함


        * 값에 참조로 접근하기


            -> 비제어 컴포넌트를 다룰 때는 onChange 같은 이벤트를 이용해서 입력을 감지하지 않으므로, refs를 통해 참조로 값에 접근함


            -> 참조를 사용하면 React 컴포넌트의 DOM 요소 또는 노드를 가져올 수 있음 (변경을 감지하지 않고 폼 요소의 값을 가져와야 할 때 유용함)


            -> 참조를 사용하기 위한 두 가지 작업


                : render() 메서드에서 반환하는 엘리먼트의 ref 속성에 문자열을 전달하는 경우 카멜 표기법으로 작성되어 있어야 함

                ex) email:<input ref="userEmail" />


                : 지정한 이름으로 다른 메서드에서 DOM 인스턴스에 접근함

                ex) this.refs.NAME으로 리액트 컴포넌트의 인스턴스에 접근할 수 있음


            -> 입력값을 확인하려면 컴포넌트의 DOM 노드에 접근하기 위해 ReactDOM.findDOMNode(this.refs.NAME) 사용


            -> React가 속성을 구현했으므로 ReactDOM.findDOMNode(comment).value 이런식으로 사용 가능


            ** But, 참조를 사용하는 경우는 흔하지 않음


        * 기본값 설정하기


            -> React는 특별한 속성인 defaultValue를 이용해서 입력 값을 설정하고, 사용자가 폼 요소를 수정할 수 있도록 함

            cf) defaultValue 대신 value 속성을 사용하면 해당 엘리먼트는 읽기 전용이 됨


            -> 주로 defaultValue 기능은 비제어 컴포넌트와 함께 사용




8. 확장성을 고려한 React 컴포넌트


    * 컴포넌트의 기본 속성


        -> defaultProps를 설정하면 컴포넌트 속성이 누락되었을 때 기본값을 렌더링할 수 있는 이점이 있음


    * React 속성 타입과 유효성 검사


        -> React 컴포넌트 클래스에 propTypes 정적 속성을 이용하면 속성 타입을 설정할 수 있음
        (개발 단계에서 잘못 사용한 자료형에 대해 경고하는 편의 기능)


        -> 속성 타입을 검사하려면 속성을 키로 하고 타입을 값으로 하는 객체를 생성하여 propTypes로 추가함


        -> 'isRequired'를 타입에 추가하면 필수 속성으로 지정할 수도 있음


        -> 사용자 정의 유효성 검사 : 타입 유효성 검사를 직접 정의하는 기능


        -> 큰 프로젝트나 오픈 소스 컴포넌트에서는 propTypes(속성 타입과 유효성 검사)를 알고 사용하는 것이 중요. 
        다른 사람이 만든 컴포넌트를 사용할 때 전달하는 속성의 타입을 올바르게 적용했는지 확인할 수 있음


    * 자식 엘리먼트 렌더링


        -> children 속성은 모든 자식을 {this.props.children}으로 렌더링할 수 있는 간편한 방법


        -> this.props.children을 사용하면 유연하고 강력하며 범용적인 컴포넌트를 생성하여 얼마든지 자식을 추가할 수 있음


        -> children 속성은 자식 엘리먼트가 하나 이상 있는 경우에 배열이 됨. {this.props.children[1]} 이런식으로 개별 엘리먼트에 접근할 수 있음


        -> React.Children.count(this.props.children)을 사용하면 자식 엘리먼트의 수를 정확하게 확인할 수 있음


    * 코드 재사용을 위한 React 고차 컴포넌트 생성하기


        -> 코차 컴포넌트를 이용하면 컴포넌트에 추가적인 로직을 적용해서 컴포넌트를 향상시킬 수 있음


        -> 고차 컴포넌트를 통해 다른 컴포넌트가 기능을 상속받는 패턴이라고 생각할 수 있음(고차 컴포넌트를 통해 코드 재사용이 가능)


        -> 고차 컴포넌트는 원래의 컴포넌트를 렌더링하면서 추가적인 기능을 포함시키도록 하는 React 컴포넌트 클래스


        * displayName을 이용한 자식 컴포넌트와 부모 컴포넌트의 구분


            -> 기본적으로 JSX는 인스턴스(엘리먼트)의 이름으로 컴포넌트 클래스 이름을 사용함


            -> React 엘리먼트 이름을 컴포넌트 클래스 이름과 다르게 해야 할 때 displayName을 설정할 수 있음


        * 펼침 연산자를 사용해서 모든 속성 전달하기 


            -> 펼침 연산자를 이용하면 객체의 모든 속성을 엘리먼트의 속성으로 전달할 수 있음
            <Component {...obj}/>


            -> 펼침 연산자는 객체 또는 변수의 모든 데이터를 전달하는 포괄문임


            -> 고차 컴포넌트에서 모든 속성과 상태를 원래의 컴포넌트를 렌더링할 때 전달함
            이렇게 하면 LoadWebsite/EnhancedComponent를 초기화하는 부모 컴포넌트 Content에서 고차 컴포넌트로 전달하는 속성을 추가하거나 기존의 데이터를 더 이상 전달하지 않을 때도 고차 컴포넌트에서 원래의 컴포넌트로 전달하는 속성을 일일이 추가하거나 삭제할 필요가 없음


    * 프레젠테이션 컴포넌트와 컨테이너 컴포넌트


        (프레젠테이션 컴포넌트)

        -> 프레젠테이션 컴포넌트는 보통 DOM과 스타일에 구조만 추가하고, 속성은 이용하지만 상태를 갖는 경우는 없음


        -> 자식 컴포넌트를 감싸서 스타일을 입히기 위해 종종 this.props.children을 사용함


        -> 데이터나 상태를 다루는 경우는 거의 없음


        (컨데이너 컴포넌트)

        -> 컨테이너 컴포넌트를 만들 때, 고차 컴포넌트로 컨테이너 컴포넌트에 데이터 소스를 주입하기도 함


        -> 컨테이너 컴포넌트를 상태를 갖음


        ** 프레젠테이션 컴포넌트와 컨테이너 컴포넌트는 모두 다른 프레젠테이션 컴포넌트 또는 컨테이너 컴포넌트를 가질 수 있음


        ** 처음에는 다른 컴포넌트로 프레젠테이션 컴포넌트만 포함하는 프레젠테이션 컴포넌트로 시작함


        ** 컨테이너 컴포넌트는 다른 컨테이너 컴포넌트나 프레젠테이션 컴포넌트를 가질 수 있음




* useCallback 과 useMemo


    * useCallback


        -> 메모이제이션된 콜백을 반환함


        -> 콜백과 그것의 의존성 값의 배열을 전달해야 함


        -> useCallback은 콜백 메모이제이션된 버전을 버전을 반환함


        -> 그 메모이제이션된 버전은 콜백의 의존성이 변경되었을 때만 변경됨


        -> 불필요한 렌더링을 방지하기 위해 참조의 동일성에 의존적인 최적화된 자식 컴포넌트에 콜백을 전달할 때 유용함


        -> 함수 안에서 사용하는 상태 혹은 props가 있다면, 꼭 deps 배열안에 포함시켜야 됨. 그렇지 않으면 함수 내에서 해당 값들을 참조할 때 가장 최신 값을 참조할 것이라고 보장 할 수 없음



    * useMemo


        -> 메모이제이션된 값을 반환


        -> "생성" 함수와 그것의 의존성 값의 배열을 전달해야 함
        

        -> useMemo는 의존성이 변경되었을 때에만 메모이제이션된 값만 다시 계산함


        -> 이 최적화는 모든 렌더링 시의 고비용 계산을 방지하게 해줌


        -> useMemo로 전달된 함수는 렌더링 중에 실행되고, 배열이 없는 경우는 매 렌더링 때마다 새 값을 계산하게 됨


        -> useMemo에서 첫번째 인자는, 결과값을 생성해주는 팩토리 함수, 두번째 인자는 기존 결과값 재활용 여부의 기준이 되는 입력값 배열


        ** 실행되는 모든 코드는 한줄한줄 비용이 소모되기 때문에 useMemo, useCallback과 같은 최적화는 정확한 측정과 검증없이 사용하는것은 부적절함


        * useMemo와 useCallback을 사용해야 하는 시점


        -> 참조 동일성 / 고비용의 복잡한 연산


        (참조 동일성)

        -> 레퍼런스를 비교하는 상황


        -> non-primitive type일 경우 레퍼런스로 비교하게 되는데 객체 내부의 값은 같더라도 그 레퍼런스가 다르게 되는 경우에도 렌더링이 발생하는 상황을 막고 싶을 때 사용해야 한다는 의미


        (고비용의 복잡한 연산)

        -> useMemo가 리액트의 hookdp built-in 되어 있는 이유


        -> useCallback의 경우에는 적용되지 않음



* useRef


    -> javascript를 사용할 때에는, 우리가 특정 DOM을 선택하기 위해 getElementById, querySelector 같은 DOM Selector 함수를 사용해서 DOM을 선택함


    -> 리액트에서도 DOM을 직접 선택해야 하는 상황이 있슴 (특정 엘리먼트의 크기 가져오기, 스크롤바 위치를 가져오거나 설정하기, 포커스 설정하기, 외부 라이브러리 사용할 때)


    -> 함수형 컴포넌트에서는 ref를 사용할 때에는 'useRef'라는 Hook 함수 사용

    cf) 클래스형 컴포넌트에서는 콜뱍 함수를 사용하거나 React.createRef 라는 함수 사용


    (사용법)

    -> useRef()를 사용하여 Ref 객체를 만들고, 이 객체를 우리가 선택하고 싶은 DOM에 ref 값으로 설정해 주어야 함. 그러면 Ref 객체의 .current 값은 우리가 원하는 DOM을 가르키게 됨


    ** useRef Hook은 DOM을 선택하는 용도 외에도, 컴포넌트 안에서 조회 및 수정 할 수 있는 변수 를 관리하는 용도로 사용하기도 함
