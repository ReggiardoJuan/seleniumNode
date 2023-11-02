import core from '@actions/core';
import { Octokit } from "@octokit/rest";
// import azdev from 'azure-devops-node-api';

const newState = core.getInput('new-state');
const token = core.getInput('token');
const repository = core.getInput('repository');
const eventSha = core.getInput('event-sha');

async function getPullRequest() {
    const octokit = new Octokit({ auth: token });
    const { data } = await octokit.request(`GET /repos/${repository}/commits/${eventSha}/pulls`);
    return data;
}

async function getItemsFromBody() {
  const [{ body }] = await getPullRequest();
  return body.match(/(?<=AB#)[0-9]+/g);
}

async function updateWorkItem() {
  if(true) {
    core.warning('It\'s me, Mario');
  }
  // const authHandler = azdev.getPersonalAccessTokenHandler(adoToken);
  // const connection = new azdev.WebApi('https://dev.azure.com/ResideWorldwide', authHandler);
  // const client = await connection.getWorkItemTrackingApi();
  // const stateDocument = [
  //   {
  //     op: 'add',
  //     path: '/fields/System.State',
  //     value: newState,
  //   },
  //   {
  //     op: 'add',
  //     path: '/fields/System.History',
  //     value: 'Automatically transitioned from github merge.',
  //   },
  // ];

  // for (itemId of (await getItemsFromBody())) {
  //   try {
  //     // Update board task state
  //     await client.updateWorkItem(
  //       (customHeaders = []),
  //       stateDocument,
  //       itemId,
  //       (project = '3SIXTY PROPTECH'),
  //       (validateOnly = false)
  //     );
  //     console.log(`Work Item ${itemId} state is successfully updated to ${newState}`);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // }
}

updateWorkItem();

