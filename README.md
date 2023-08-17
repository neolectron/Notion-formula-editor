# Notion formula editor

Leverage github copilot completion to write and test typesafe Notion formulas

### How to use :

- clone the project
- `npm i`
- `npm run dev` to watch your formulas result.
- open `src/formula-editor.ts` and replace the type with the type of your notion database properties
- create a database item inside the `testTicket` variable
- code your formula inside the `formula` function
- go on the line right after the comment that starts with "same formula as above" and wait for copilot completion to get your formula

## Notes

- Not all notion formulas fonction are available, but it is extremely easy to add your own, just look at the code.

## The "Maybe" roadmap

- Making a chrome extension
- When you open Notion's formula editor, opens up a monaco editor (vscode) instead.
- A typescript type is automatically generated with the shape of your notion database, live generated.
- You type your formula in plain JS with a syntax that ressemble notion's one
- The syntax only differs on capitalized functions, keyword `and` beeing `&&`, `or` beeing `||` etc.
- The syntax has some javascript features disabled (const/var/let/if/while/etc, basically all keywords)
- Everything is type-safe, autocompleted, colorized, and edits directly the formula in the background.
