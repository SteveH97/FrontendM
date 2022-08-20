import React from 'react'
import { Todo, Calendar, Reminders, Planning} from '../images/index.js';
import './FeatureDropDown.css';

const FeatureDropDown = () => {
  return (
    <div className='FDropDown__'>
        <div className='FDropDown__item'><Todo/>Todo List</div>
        <div className='FDropDown__item'><Calendar/>Calendar</div>
        <div className='FDropDown__item'><Reminders/>Reminders</div>
        <div className='FDropDown__item'><Planning/>Planning</div>
    </div>
  )
}

export default FeatureDropDown