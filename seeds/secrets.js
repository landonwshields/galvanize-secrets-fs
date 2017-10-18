
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('secrets').del()
    .then(function () {
      // Inserts seed entries
      return knex('secrets').insert([
        {id: 1, secrets: 'My wife makes me watch Dancing With The Stars'},
        {id: 2, secrets: 'I enjoy watching Dancing With The Stars'},
        {id: 3, secrets: 'I cried during a very emotional episode of DWTS'}
      ]);
    });
};
