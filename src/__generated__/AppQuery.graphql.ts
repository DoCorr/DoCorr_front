/* tslint:disable */
/* eslint-disable */
/* @relayHash e869314e174ed67047f59b464251cb25 */

import { ConcreteRequest } from "relay-runtime";
export type AppQueryVariables = {};
export type AppQueryResponse = {
    readonly allUsers: ReadonlyArray<{
        readonly name: string | null;
        readonly id: string | null;
        readonly email: string | null;
        readonly profile_image: string | null;
        readonly password: string | null;
        readonly create_date: string | null;
    }> | null;
};
export type AppQuery = {
    readonly response: AppQueryResponse;
    readonly variables: AppQueryVariables;
};



/*
query AppQuery {
  allUsers {
    name
    id
    email
    profile_image
    password
    create_date
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "allUsers",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "email",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "profile_image",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "password",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "create_date",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery {\n  allUsers {\n    name\n    id\n    email\n    profile_image\n    password\n    create_date\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '51241c4eef9b4c8a1672d2f02dfea138';
export default node;
