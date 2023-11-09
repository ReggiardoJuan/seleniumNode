import requests
import os
import re

ADO_TOKEN = os.getenv("ADO_TOKEN")
NEW_STATE = os.getenv("NEW_STATE")
PULL_REQUEST_BODY = os.getenv("PULL_REQUEST_BODY")


def update_work_item():
    print(PULL_REQUEST_BODY)
    items = re.findall(r"(?<=AB#)[0-9]+", PULL_REQUEST_BODY)

    if not items:
        print("No task found to update.")
        return

    print(NEW_STATE)
    for item in items:
            print(item)
        # url = f"https://dev.azure.com/ResideWorldwide/3SIXTY%20PROPTECH/_apis/wit/workitems/{item}?api-version=7.1-preview.3"
        # data = [
        #     {
        #         "op": "add",
        #         "path": "/fields/System.State",
        #         "value": NEW_STATE,
        #     },
        #     {"op": "add", "path": "/fields/System.History", "value": "Automatically transitioned from github merge."},
        # ]

        # try:
        #     requests.patch(url, json=data, headers={"Content-Type": "application/json-patch+json"}, auth=("", ADO_TOKEN))
        #     print(f"Work Item {item} state is successfully updated to {NEW_STATE}")
        # except Exception as err:
        #     print(f"Error occurred at updating azure board: {err}")


if __name__ == "__main__":
    update_work_item()
