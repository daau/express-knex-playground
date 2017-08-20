
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'first@first.com', password: 'first'},
        {email: 'second@second.com', password: 'second'},
        {email: 'third@third.com', password: 'third'}
      ]);
    });
};
