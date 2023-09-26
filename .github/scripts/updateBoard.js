import azdev from 'azure-devops-node-api';
import { faker } from '@faker-js/faker';

const {
  NEW_STATE: newState,
} = process.env;

async function updateWorkItem() {
    console.log(newState);
    console.log(azdev);
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

await updateWorkItem();
