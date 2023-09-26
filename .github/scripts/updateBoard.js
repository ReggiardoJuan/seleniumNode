import azdev from 'azure-devops-node-api';

const {
  PULL_REQUEST: pullRequest,
  NEW_STATE: newState,
} = process.env;

async function updateWorkItem() {
  const [{ body }] = JSON.parse(pullRequest);
  const workItemId = body.match(/(?<=AB#)[0-9]+/)[0];

  try {
    console.log(workItemId);
    console.log('Work Item comment created');
  } catch (err) {
    console.log(err.message);
  }
}

updateWorkItem();
