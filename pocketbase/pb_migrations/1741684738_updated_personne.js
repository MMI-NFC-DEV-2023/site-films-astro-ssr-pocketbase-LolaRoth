/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1333826038")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id !=\"\"",
    "deleteRule": "@request.auth.id !=\"\"",
    "updateRule": "@request.auth.id !=\"\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1333826038")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id =\"\"",
    "deleteRule": "",
    "updateRule": ""
  }, collection)

  return app.save(collection)
})
