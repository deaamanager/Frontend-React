import axios from 'axios';

const sendEmail = async (email, message,name,betreff,checkbox) => {
  return axios({
    method: 'post',
    url: '/api/sendmail',
    data: {
      name: name,
      email: email,
      betreff: betreff,
      message: message,
      checkbox: checkbox,
    },
  });
};

export default sendEmail;