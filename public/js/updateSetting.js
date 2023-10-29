/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const updateSetting = async (data, type) => {
    try {
        const url =
            type === 'data'
                ? 'http://localhost:3000/api/v1/users/updateMe'
                : 'http://localhost:3000/api/v1/users/updatePassword';

        const res = await axios({
            method: 'PATCH',
            url,
            data
        });

        if (res.data.status === 'success') {
            showAlert('success', `Update ${type} successfully`);
            window.setTimeout(() => {
                location.reload(true);
            }, 1000);
        }
    } catch (err) {
        showAlert('error', err.response.data.message);
    }
};
