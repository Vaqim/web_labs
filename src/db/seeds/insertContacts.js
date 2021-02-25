exports.seed = async (knex) => {
  await knex('contacts').del();

  await knex('contacts').insert([
    {
      name: 'Vadim',
      surname: 'Sajko',
      phone: '324657984',
      email: 'vadim.sajko@gmail.com',
    },
    {
      name: 'Anton',
      surname: 'Ovcharenko',
      phone: '549832112',
    },
    {
      name: 'Vlad',
      phone: '624987954',
      email: 'vlad.seredenko@gmail.com',
    },
  ]);
};
