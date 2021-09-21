import styled, {createGlobalStyle} from 'styled-components'
import requiredIcon from './imgs/required.png'
import checkboxIcon from './imgs/Vector.png'
import search from './imgs/search.png'
import select from './imgs/select.png'
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setInfo} from "./redux/form-reducer";

const GlobalInputStyle = createGlobalStyle`
  input[type=text] {
    //align-items: center;
    padding: 16px 24px;
    background-image: url(${requiredIcon});
    background-repeat: no-repeat;
    background-position: 16px 30px;
    font-size: 20px;
    margin-bottom: 40px;
    width: 400px;
    height: 80px;

    border: 1px solid #E5E5E5;
    outline: none;
    border-radius: 24px;
  }

  input[type=text]::placeholder {
    color: #A2A2AE;
  }

  input[type=text]:focus, select:focus {
    border: 1px solid #8a8a8a;
  }


  h2 {
    margin-bottom: 40px;
  }

  button {
    width: 300px;
    height: 60px;
    border-radius: 500px;
    background-color: white;
    font-size: 18px;
    font-weight: 500;
    color: #A2A2AE;
    border: 2px solid #E5E5E5;
    transition: .3s;
    margin-bottom: 32px;
    cursor: pointer;
    outline: none;
  }

  button:hover {
    background-color: #E62B25;
    color: white;
    border: none;
  }

  button:focus {
    background-color: #E62B25;
    color: white;
    border: none;
  }
`

const FormWrapper = styled.form`
  width: 900px;
  padding: 40px;
  border: 1px solid black;
`

const DivSelect = styled.div`
  position: relative;

  select {
    margin-right: 30px;
    appearance: none;
    //position: relative;
    color: black;
    padding: 24px 0 0 24px;
    font-size: 20px;
    margin-bottom: 40px;
    width: 400px;
    height: 80px;

    border: 1px solid #E5E5E5;
    outline: none;
    border-radius: 24px;
  }

  ::before {
    content: 'Уровень образования';
    display: inline-block;
    width: 200px;
    position: absolute;
    top: 10px;
    left: 24px;
    z-index: 1111;
    color: #A2A2AE;
    background: url(${requiredIcon}) no-repeat 166px 0;
  }

  ::after {
    content: '';
    display: inline-block;
    width: 44px;
    height: 23px;
    position: absolute;
    top: 28px;
    right: 60px;
    background-image: url(${select});
  }
`

const DivYearOfEnding = styled.div`
  position: relative;

  ::before {
    content: 'Год окончания';
    display: inline-block;
    width: 200px;
    position: absolute;
    top: 10px;
    left: 24px;
    z-index: 1111;
    color: #A2A2AE;
    background: url(${requiredIcon}) no-repeat 114px 0;
  }

  input {
    color: black;
    padding: 24px 0 0 24px !important;
    background-image: none !important;
  }
`
const DivInputSearch = styled.div`
  position: relative;

  input[type=search] {
    align-items: center;
    padding: 16px 24px 16px 110px;
    background-image: url(${search});
    background-repeat: no-repeat;
    background-position: 60px 24px;
    font-size: 20px;
    margin-bottom: 40px;
    width: 830px;
    height: 80px;

    border: 1px solid #E5E5E5;
    outline: none;
    border-radius: 24px;
  }

  input[type=search]::placeholder {
    color: #A2A2AE;
  }

  input[type=search]:focus {
    border: 1px solid #8a8a8a;
  }

  img {
    position: absolute;
    top: 28px;
    left: 30px;
  }

  div {
    position: absolute;
    top: 90px;
    left: 0;
    font-size: 20px;
    background-color: #d2d2d2;
    width: 830px;
    border-radius: 6px;
  }

  div p {
    padding: 5px;
    transition: .2s;
    border-radius: 6px;
    cursor: pointer;
  }

  div p:hover {
    background-color: #626363;
    color: white;
  }
`

const DivCheckbox = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;

  input[type=checkbox] {
    display: none;
  }

  label {
    font-size: 16px;
  }

  label::before {
    content: '';
    display: inline-block;
    width: 28px;
    height: 28px;
    vertical-align: middle;
    margin-right: 12px;
    background-repeat: no-repeat;
    background-position: 6px 7.5px;
    border: 1px solid #CFCFCF;
    border-radius: 10px;
  }

  input[type=checkbox]:checked + label::before {
    background-image: url(${checkboxIcon});
  }
`

const DivWithSpans = styled.div`
  width: 830px;
  height: 80px;
  font-size: 22px;
  border: 1px dashed rgba(0, 0, 0, 0.5);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  color: #A2A2AE;

  span:first-child {
    white-space: pre-wrap;
    color: #E62B25;
  }

  span:nth-child(2) {
    white-space: pre-wrap;
    color: black;
  }
`

const DivButton = styled.div`
  margin-right: 24px;

  div {
    display: flex;
    justify-content: center;
  }

  div img {
    height: 7px;
    margin-right: 8px;
  }
`


function App() {
  const [dropDownMenuIsShowed, setDropDownMenuIsShowed] = useState(false)
  const [formIsSubmited, setFormIsSubmited] = useState(false)
  const [searchTerm, setSearchTerm] = useState([])
  const [valueOFSearchInput, setValueOFSearchInput] = useState('')

  const [inputDiplomaSeries, setInputDiplomaSeries] = useState(false)
  const [inputDiplomaNumber, setInputDiplomaNumber] = useState(false)
  const [inputSpeciality, setInputSpeciality] = useState(false)
  const [inputQualification, setInputQualification] = useState(false)

  const array = ['ready', 'orange', 'green', 'blue',
    'yellow', 'pink', 'red', 'read', 'reddit']

  const {info} = useSelector(state => state.formReducer)

  const dispatch = useDispatch()

  const onSubmitHandler = (e) => {
    e.preventDefault()

    const returnEl = (number) => {
      return e.target[number].value
    }

    dispatch(setInfo([{
      selector: returnEl(0),
      year: returnEl(1),
      searchTerm: returnEl(2),
      diplomaSeries: returnEl(3),
      diplomaNumber: returnEl(4),
      speciality: returnEl(5),
      qualification: returnEl(6),
      checkbox: e.target[7].checked
    }]))
    setFormIsSubmited(true)
  }

  const validate = (event, reg, setIsShowed) => {
    if (reg.toString() === '/^[0-9]+$/') {
      if (reg.test(event.target.value)) {
        if (setIsShowed) {
          setIsShowed(true)
        }
      } else {
        alert('Use only numbers')
      }
    } else if (reg.toString() === '/^[а-яА-ЯёЁa-zA-Z]+$/') {
      if (reg.test(event.target.value)) {
        if (setIsShowed) {
          setIsShowed(true)
        }
      } else {
        alert('Use only letters')
      }
    }
  }

  const validateInputSearch = (event) => {
    if (/^[а-яА-ЯёЁa-zA-Z]+$/.test(event.target.value)) {
      if (event.target.value.length >= 3) {
        setSearchTerm(event.target.value)
        setDropDownMenuIsShowed(true)
        setInputDiplomaSeries(true)
      } else {
        setDropDownMenuIsShowed(false)
      }
    } else {
      alert('Only letters and without space')
    }
  }

  return (
      <div style={{display: 'flex'}}>
        <FormWrapper onSubmit={onSubmitHandler}>
          <GlobalInputStyle/>
          <h2>Образование</h2>
          <div style={{display: 'flex'}}>
            <DivSelect>
              <select id={'selector'}>
                {/*<option value="first" disabled hidden></option>*/}
                <option>Среднее профессиональное</option>
                <option>Бакалавриат</option>
                <option>Специалитет</option>
                <option>Магистратура</option>
                <option>Неполное высшее</option>
              </select>
            </DivSelect>
            <DivYearOfEnding>
              <input type={'text'} required minLength={'4'} maxLength={'4'}
                     onChange={event => validate(event, /^[0-9]+$/)}/>
            </DivYearOfEnding>
          </div>
          <DivInputSearch>
            <img src={requiredIcon} alt={'requiredIcon'}/>
            <input value={valueOFSearchInput} type={'search'} required placeholder={'Введите для выбора ВУЗа'}
                   onChange={(e) => {
                     validateInputSearch(e)
                     setValueOFSearchInput(e.target.value)
                   }}/>
            <div>{dropDownMenuIsShowed ? array.filter(f => {
              if (searchTerm === '') {
                return f
              } else if (f.toLowerCase().includes(searchTerm.toLowerCase())) {
                return f
              }
            }).map(r => <p onClick={(e) => {
              setValueOFSearchInput(e.target.innerHTML)
              setDropDownMenuIsShowed(false)
            }} style={{}}>{r}</p>) : null}
            </div>
          </DivInputSearch>
          <div style={{display: 'flex'}}>
            {inputDiplomaSeries ? <div style={{marginRight: '30px'}}>
              <input type={'text'} required placeholder={'Серия диплома'}
                     onChange={(event) => validate(event, /^[0-9]+$/, setInputDiplomaNumber)}/>
            </div> : null}
            {inputDiplomaNumber ? <div>
              <input type={'text'} required placeholder={'Номер диплома'}
                     onChange={(event) => validate(event, /^[0-9]+$/, setInputSpeciality)}/>
            </div> : null}
          </div>
          {inputSpeciality ? <div>
            <input type={'text'} required placeholder={'Специальность по диплому'} style={{width: '830px'}}
                   onChange={(event) => validate(event, /^[а-яА-ЯёЁa-zA-Z]+$/, setInputQualification)}/>
          </div> : null}
          {inputQualification ? <div>
            <input type={'text'} required placeholder={'Квалификация по диплому'} style={{width: '830px'}}
                   onChange={(event) => validate(event, /^[а-яА-ЯёЁa-zA-Z]+$/)}/>
          </div> : null}
          <DivCheckbox>
            <input type={'checkbox'} id={'Checkbox'}/>
            <label htmlFor={'Checkbox'}>Нострификация</label>
          </DivCheckbox>
          {formIsSubmited ?
              <DivWithSpans>
                <span>Документ: </span>Скачать документ
              </DivWithSpans> :
              <DivWithSpans>
                <span>Документ: </span>Загрузить файлы или<span> открыть проводник</span>
              </DivWithSpans>
          }
          {formIsSubmited ? null : <div style={{display: 'flex', justifyContent: 'center'}}>
            <DivButton>
              <button type={'submit'}>Сохранить</button>
              <div>
                <img src={requiredIcon} alt={'requiredIcon'}/>
                <p>Поля обязательные для заполнения</p>
              </div>
            </DivButton>
            <DivButton>
              <button>Отмена</button>
              <div>
                <img src={requiredIcon} alt={'requiredIcon'}/>
                <p>Поля обязательные для заполнения</p>
              </div>
            </DivButton>
          </div>}
        </FormWrapper>
        {info ? info.map(i => <div>
          <div>selector: {i.selector}</div>
          <div>year: {i.year}</div>
          <div>searchTerm: {i.searchTerm}</div>
          <div>diplomaSeries: {i.diplomaSeries}</div>
          <div>diplomaNumber: {i.diplomaNumber}</div>
          <div>speciality: {i.speciality}</div>
          <div>qualification: {i.qualification}</div>
          <div>checkbox: {i.checkbox.toString()}</div>
        </div>) : null}
      </div>
  );
}

export default App;