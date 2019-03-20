const initialState = {
    devices: [],
    deviceTypes: [
        {label: 'Button', value: 'button'},
        {label: 'Sensor', value: 'sensor'},
    ]
}


const reducer = (state = initialState, action: any) => {

    switch (action.type) {

        default:
            return state;
    }
};

export default reducer;