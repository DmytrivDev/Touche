import axios from 'axios';

export async function sendSMS(phoneNumber, message) {
  const apiKey = 'KEY';
  const customerId = 'CUSTOMER_ID';
  const url = `https://rest-api.telesign.com/v1/messaging`;

  const data = {
    phone_number: phoneNumber,
    message: message,
    message_type: 'ARN',
  };

  const config = {
    headers: {
      accept: 'application/json',
      'content-type': 'application/x-www-form-urlencoded',
      authorization: 'Basic ' + btoa(customerId + ':' + apiKey),
    },
  };

  try {
    const response = await axios.post(url, data, config);
    console.log('SMS відправлено успішно:', response.data);
  } catch (error) {
    console.error('Помилка при відправці SMS:', error);
  }
}
