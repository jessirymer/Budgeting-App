import uuid from "uuid"

// Add Expense
export const addExpense = ({description = "", note = "", amount = 0, createdAt = 0} = {}) => ({
    type: "ADD-EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount, 
        createdAt
    }
})

// Remove Expense

export const removeExpense = ({id}) => ({
    type: "REMOVE-EXPENSE",
    id
})

//Edit Expense

export const editExpense = (id, updates) => ({
    type: "EDIT-EXPENSE",
    id,
    updates
})