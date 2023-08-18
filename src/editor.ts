import { If, Empty, makeProp, Join, Format } from "./notionFunctions"
import { getNotionScriptFromFunction } from "./stringHelpers";

// Notion Database Item Exemple
type Item = {
  "Status": "Dev" | "Dive in" | "👉 Next" | "PR Review" | "⛵Ready to release" | "🎉 Live",
  "Dev due date": Date,
  "Dive in due date": Date
}

const testItem: Item = {
  "Status": "Dev",
  "Dev due date": new Date("2020-01-01"),
  "Dive in due date": new Date("2020-02-02")
}

const Prop = makeProp(testItem);

// Notion formula, but don't use notions keyword, use js keyword instead
// use capitalized fonction names.instead of regular names
const formula = () => If(Prop("Status") == "Dive in" || Prop("Status") == "👉 Next",
  Empty(Prop("Dive in due date")) ? "📅Please select a dive due Date" :
    Join("", "Dive: ", Format(Prop("Dive in due date"))),
  If(Prop("Status") == "Dev",
    Empty(Prop("Dev due date")) ? "📅Please select a dev due Date" :
      Join("", "Dev: ", Format(Prop("Dev due date"))),
    ""
  )
)

// log the result
console.log(`\nTEST: ${formula()}\n`);
console.log(`NOTION FORMULA:\n${getNotionScriptFromFunction(formula)}`)
