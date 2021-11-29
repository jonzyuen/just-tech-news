const { User } = require('../models');

const userData = [
{
    username: 'adfadfa',
    password: '11111'
},
{
    username: 'erererwrew',
    password: '22222'
},
{
    username: 'aqerwerwer',
    password: '33333'
},
{
    username: 'ftuynhvbh',
    password: '44444'
},
{
    username: 'lihmnb',
    password: '55555'
},
{
    username: 'gfrevsdvs',
    password: 'fdfefd'
},
{
    username: 'vbcbdfbdc',
    password: 'yhnfbnc'
},
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;