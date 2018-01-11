/**
 * @file file description here.
 * @author winstar
 * @date 2017/9/1
 */

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state
    }
};

export default visibilityFilter
