import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from "../../actions/filters"
import moment from "moment"

test("should generate set start date action object", () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: "SET_START_DATE",
        date: moment(0)
    })
})

test("should generate set end date action object", () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: "SET_END_DATE",
        date: moment(0)
    })
})

test("should generate sort by amount action object", () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    })
})

test("should generate sort by date action object", () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    })
})

test("should set up set text filter with provided value", () => {
    const action = setTextFilter("abc123")
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "abc123"
    })
})

test("should set up set text filter with default value", () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    })
})