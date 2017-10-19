
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'landonwshields', email: 'landonwshields@gmail.com', code: 'abcd'},
        {id: 2, username: 'brittshields', email: 'brittshields@gmail.com', code: 'efgh'},
        {id: 3, username: 'jordonshields', email: 'jordonshields@gmail.com', code: 'ijkl'}
      ]);
    });
};
