const VisibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.filter) {
        case 'SHOW_COMPLETED':
            return action.filter;
        case 'SHOW_ACTIVE':
            return action.filter;
        case 'SHOW_ALL':
            return action.filter;
        default:
            return state;
    }
};
export default VisibilityFilter;
