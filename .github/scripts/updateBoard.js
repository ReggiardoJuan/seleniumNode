import azdev from 'azure-devops-node-api';

let {
  PULL_REQUEST: pullRequest,
  NEW_STATE: newState,
} = process.env;

async function updateWorkItem() {
  let workItemId;
  try {
    const [{ body }] = pullRequest;
    const workItemId = body.match(/(?<=AB#)[0-9]+/)[0];
    if (!workItemId) {
      throw new Error('Work item was not found.');
    }
    console.log(workItemId)
    console.log('Work Item comment created');
  } catch (err) {
    console.log(err.message);
  }
}

updateWorkItem();
