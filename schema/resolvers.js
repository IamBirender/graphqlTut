const {UserList} = require('../FakeData');
const _ = require("lodash");

const resolvers = {
    Query: {
        users: () => {

            return UserList;

        },
        user: (_, args) => {
            const id = args.id;
            console.log(id)
            const user = await getUser(id).catch( () => {
                console.log("doesnt work")
            }).then( (data) => {
                console.log("worked ", data)
            });
            console.log(user);
            return user;
        }
    },
};

async function getUser(id){
    const user = _.find(UserList, {id : Number(id)});
    return user
}

module.exports = { resolvers }