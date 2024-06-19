import axios from 'axios';

export async function sendSMS(phoneNumber, message) {
  const apiKey =
    'E9TBO3+Qgnjyf77/P4fhrbQ+7TiLbOrurVX+5kkNMTb73cstzOtfEHqaMxyO8MlqdXt3a/wzj5Un3asFKkKarA==';
  const customerId = '14117F0E-FCE4-48A3-8514-1CD4D58A6FD6';
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
