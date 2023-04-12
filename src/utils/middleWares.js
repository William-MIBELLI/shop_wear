
export const myLogger = store => next => action => {
    console.log("ancien state : ", store.getState())
    console.log('action dispatched : ', action)
    const result = next(action)
    console.log('new state : ', store.getState())
    return result
}