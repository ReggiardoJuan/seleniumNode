import requests
import os
import json
import re

PULL_REQUEST = json.loads(os.getenv("PULL_REQUEST"))
NEW_STATE = os.getenv("NEW_STATE", "Hola")


def get_items_from_body():
    pr_body = PULL_REQUEST[0]["body"]
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
