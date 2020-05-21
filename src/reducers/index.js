// action = {
//   type: 'CREATE_EVENT',
//   title: '新しいイベント',
//   body: '新しいイベントです',
// }
//
// state = []
// state = [
//   { id: 1, title: 'ほげ', body: 'ふが' },
//   { id: 2, title: 'ふー', body: 'ばー' },
//   { id: 3, title: 'ほげ', body: 'ぴよ' },
// ]
const events = (state = [], action) => {
  switch(action.type) {
    case 'CREATE_EVENT':
      const { title, body } = action;
      const event = { title, body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length -1].id + 1;

      return [...state, { id, ...event }];
    case 'DELETE_EVENT':
      const events = state.filter((event) => event.id !== action.id);
      return [...events];
    case 'DELETE_ALL_EVENTS':
      return [];
    default:
      return state;
  }
};

export default events;
