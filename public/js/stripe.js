/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async tourId => {
    try {
        const res = await axios({
            method: 'GET',
            url: `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`
        });

        if (res.data.session) {
            window.location = res.data.session.url;
        }
    } catch (err) {
        showAlert('error', err);
    }
};
