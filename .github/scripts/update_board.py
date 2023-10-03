import requests
import os
import json
import re

# ADO_TOKEN = os.getenv("ADO_TOKEN")
PULL_REQUEST = os.getenv("PULL_REQUEST")
NEW_STATE = os.getenv("NEW_STATE")


def get_items_from_body():
    pr_body = json.loads(PULL_REQUEST)[0]["body"]
    return re.findall(r"(?<=AB#)[0-9]+", pr_body)


def update_work_item():
    for item in get_items_from_body():
        url = f"https://dev.azure.com/ResideWorldwide/3SIXTY%20PROPTECH/_apis/wit/workitems/{item}?api-version=7.1-preview.3"
        data = [{
            "op": "add",
            "path": "/fields/System.State",
            "value": NEW_STATE,
        },
            {
            "op": "add",
            "path": "/fields/System.History",
            "value": "Automatically transitioned from github merge."
        }]

        try:
            print(f"Work Item {item} state is successfully updated to ${NEW_STATE}")
        except Exception as err:
            print(f"Error occurred at updating azure board: {err}")


update_work_item()
