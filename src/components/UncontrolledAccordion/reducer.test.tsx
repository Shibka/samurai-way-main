import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";


test('Collapsed should be true', ()=>{
    const state: StateType = {
        collapsed: false
    }
   const newState = reducer(state, {type:TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(true)

})
test('Collapsed should be false', ()=>{
    const state: StateType = {
        collapsed: true
    }
   const newState = reducer(state, {type:TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(false)

})
test('Collapsed should throw Error', ()=>{
    const state: StateType = {
        collapsed: true
    }
   expect(() => {reducer(state, {type:'TOGGLE_COLLAPSED'})}).toThrowError()

})