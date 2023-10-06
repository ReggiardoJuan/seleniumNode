import requests
import os
import json
import re

# ADO_TOKEN = os.getenv("ADO_TOKEN")
PULL_REQUEST = os.getenv("PULL_REQUEST", '[{ "body": "asdas AB#123"}]')
NEW_STATE = os.getenv("NEW_STATE", "Hola")


def get_items_from_body():
    pr_body = json.loads(PULL_REQUEST)[0]["body"]
    print(pr_body)
    return re.findall(r"(?<=AB#)[0-9]+", pr_body)

def is_bot_user():
    user_type = PULL_REQUEST[0]["user"]["type"]
    print("Soy bot?")
    print(user_type)
    return user_type.lower() == "Bot".lower()


def update_work_item():
    is_bot_user()

    for item in get_items_from_body():
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
            print(data)
            print(f"Work Item {item} state is successfully updated to ${NEW_STATE}")
        except Exception as err:
            print(f"Error occurred at updating azure board: {err}")


update_work_item()
