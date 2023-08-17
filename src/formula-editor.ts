// Notion Ticket Exemple
type Ticket = {
  "Status": "Dev" | "Dive in" | "👉 Next" | "PR Review" | "⛵Ready to release" | "🎉 Live",
  "Dev due date": Date,
  "Dive in due date": Date
}

const testTicket: Ticket = {
  "Status": "Dev",
  "Dev due date": new Date("2020-01-01"),
  "Dive in due date": new Date("2020-02-02")
}

// base Notion formula functions
const If = (condition: any, then: any, otherwise: any) => condition ? then : otherwise;
const prop = (propName: keyof Ticket) => testTicket[propName];
const format = (expr: any) => expr.toString()
const join = (separator: string, str1: string, str2: string) => str1.concat(separator, str2);
const empty = (expr: any) => Boolean(expr);
const not = (expr: any) => !expr;

// Actual Formula
const formula = If(prop("Status") == "Dive in" || prop("Status") == "👉 Next",
  empty(prop("Dive in due date")) ? "📅Please select a dive due Date" :
    join("", "Dive: ", format(prop("Dive in due date"))),
  If(prop("Status") == "Dev",
    empty(prop("Dev due date")) ? "📅Please select a dev due Date" :
      join("", "Dev: ", format(prop("Dev due date"))),
    ""
  )
)

// same formula as above but ON A SINGLE LINE, replace "If" with "if", "||" with "or", and remove "const formula ="



// this test the formula here
console.log(formula)
