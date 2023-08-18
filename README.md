# Notion formula editor

Typesafe Notion formulas using typescript syntax.

### How to use :

- clone the project
- `npm i`
- `npm run dev` to watch your formulas result.
- open `src/editor.ts` and replace the `Item` type with the type of your notion database properties
- create a database item inside the `testItem` variable
- code your formula inside the `formula` function
- watch your console, the notion formula is live-tested on your item and printed in notion format.

## Notes

- You must write all notion functions capitalized : `Props`, `Join`, `Empty` etc..
- You must use JS keywords:  `and` beeing `&&`, `or` beeing `||`.
- Not all notion formulas fonction are available, but it is extremely easy to add your own inside `src/notionFunctions.ts`
- Some javascript features that doesn't exists in notion won't work (like `if`, `while` etc).

## The "Maybe" roadmap

### v1
- [ ] Make a frontend with monaco editor
- [ ] disable js keywords that are illegal in notion editor
- [ ] live output the notion formula and it's result
- [ ] allow usage of notion api to get type informations about the Db

### v2
- [ ] Make a chrome extension to directly use the product on Notion website.
- [ ] When you open Notion's formula editor, open my editor instead
- [ ] A typescript type is automatically generated with the shape of your notion database, live generated.
- [ ] Edits directly the formula in Notion in the background.
