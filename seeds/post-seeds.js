const { Post } = require('../models');

const postData = [
    {
        title: 'rfefdfxc',
        post_text: 'qpeiru adsfjsdkfj ncjxvnxjcnvjxncvj eirufeifeif dkdfkd ieu hfji iejfiejfiejfiejfiejf ifjeifnkxncxncmxnckxnkcxkcn kcjskcjjcskjc',
        user_id: 1
    },
    {
        title: 'adsfadfaf',
        post_text: 'peiru adsfjsdkfj ncjxvnxjcnvjxncvj eirufeifeif dkdfkd ieu hfji iejfiejfiejfiejfiejf ifjeifnkxncxncmxnckxnkcxkcn kcjskcjjcskjc',
        user_id: 2
    },
    {
        title: 'fadfadfaf',
        post_text: 'peiru adsfjsdkfj ncjxvnxjcnvjxncvj eirufeifeif dkdfkd ieu hfji iejfiejfiejfiejfiejf ifjeifnkxncxncmxnckxnkcxkcn kcjskcjjcskjc',
        user_id: 4
    },
    {
        title: 'dfdfdfdf',
        post_text: 'peiru adsfjsdkfj ncjxvnxjcnvjxncvj eirufeifeif dkdfkd ieu hfji iejfiejfiejfiejfiejf ifjeifnkxncxncmxnckxnkcxkcn kcjskcjjcskjc',
        user_id: 3
    },
    {
        title: 'adfdfdfdfsdf',
        post_text: 'peiru adsfjsdkfj ncjxvnxjcnvjxncvj eirufeifeif dkdfkd ieu hfji iejfiejfiejfiejfiejf ifjeifnkxncxncmxnckxnkcxkcn kcjskcjjcskjc',
        user_id: 2
    },
    {
        title: 'msefsxfefsdf',
        post_text: 'peiru adsfjsdkfj ncjxvnxjcnvjxncvj eirufeifeif dkdfkd ieu hfji iejfiejfiejfiejfiejf ifjeifnkxncxncmxnckxnkcxkcn kcjskcjjcskjc',
        user_id: 1
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;