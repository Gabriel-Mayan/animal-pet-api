const { encryptPassword } = require('../helpers/handlePassword');
const { testDuplicatedUsers } = require('../../tests/_tests');

exports.seed = async function (knex) {
  const encryptedPassword = encryptPassword(process.env.SUPER_ADMIN_PWD);
  const insertedSuperAdm = await testDuplicatedUsers(process.env.SUPER_ADMIN_USERNAME);

  if (!insertedSuperAdm) {
    await knex('users').insert({
      id: process.env.SUPER_ADMIN_ID,
      fullName: process.env.SUPER_ADMIN_FULLNAME,
      userName: process.env.SUPER_ADMIN_USERNAME,
      email: process.env.SUPER_ADMIN_EMAIL,
      password: encryptedPassword,
      phone: process.env.SUPER_ADMIN_PHONE,
      address: process.env.SUPER_ADMIN_ADDRESS,
      userType: process.env.SUPER_ADMIN_USERTYPE,
    });
  }
};
