/**
 * @file file description here.
 * @author winstar
 * @date 2017/9/1
 */

import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

export default todoApp
