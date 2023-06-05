// const fetchAllUser = () => {
//   console.log('fetchAllUser');
// }

// const fetchUserById = id => {
//   console.log(fetchUserById);
// }
// const updateUserById = id => {
//   console.log(updateUserById);
//  }

//  export default {fetchAllUser, fetchUserById, updateUserById }

import Joi from 'joi';

const passSchema = Joi.string().min(3).max(10);

export default function validatePasword(password) {
  return passSchema.validate(password);
}
