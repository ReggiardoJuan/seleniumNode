const azdev = require('azure-devops-node-api');
const { faker } = require('@faker-js/faker');

const {
  NEW_STATE: newState,
} = process.env;

async function updateWorkItem() {
    console.log(newState);
    return {
          userId: faker.string.uuid(),
          username: faker.internet.userName(),
          email: faker.internet.email(),
          avatar: faker.image.avatar(),
          password: faker.internet.password(),
          birthdate: faker.date.birthdate(),
          registeredAt: faker.date.past(),
    };
}

console.log(updateWorkItem());
