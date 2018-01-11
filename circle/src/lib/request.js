import axios from 'axios';

export function getCircleList () {
    return axios.post('/api/getCircleList', {}).then((res) => {
        return res.data;
    });
}