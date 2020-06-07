import React, { useState, useReducer } from 'react';
import reducer from '../reducers';
import 'bootstrap/dist/css/bootstrap.min.css'

import Event from './Event';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [event, setEvent] = useState({ title: '', body: '' });
  const { title, body } = event;

  const addEvent = (e) => {
    e.preventDefault();

    dispatch({ type: 'CREATE_EVENT', ...event });
    return setEvent({ title: '', body: '' });
  };

  const changeEvent = (value, name) => {
    switch(name) {
      case 'title':
        return setEvent({ ...event, title: value });
      case 'body':
        return setEvent({ ...event, body: value });
      default:
        return event;
    }
  }

  const deleteEvent = (id) => {
    if (window.confirm(`${id}のイベントを削除します。よろしいですか？`)) {
      dispatch({ type: 'DELETE_EVENT', id });
    }
  };

  const deleteAllEvents = () => {
    if (window.confirm('全てのイベントを削除します。よろしいですか？')) {
      dispatch({ type: 'DELETE_ALL_EVENTS' });
    }
  };

  const addButtonIsDisabled = event.title === '' || event.body === '';
  const deleteAllEventButtonIsDisabled = state.length === 0;

  return (
    <div className="container-fluid">
      <div className="newEventForm mb-5">
        <h4>イベント作成フォーム</h4>
        <form>
          <div className="form-group">
            <label htmlFor="formEventTitle">タイトル</label>
            <input
              type="text"
              className="form-control"
              id="formEventTitle"
              onChange={e => changeEvent(e.target.value, 'title')}
              value={title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formEventBody">ボディー</label>
            <textarea
              className="form-control"
              id="formEventBody"
              onChange={e => changeEvent(e.target.value, 'body')}
              value={body}
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={addEvent} disabled={addButtonIsDisabled}>イベントを作成する</button>
          <button type="button" className="btn btn-danger" onClick={deleteAllEvents} disabled={deleteAllEventButtonIsDisabled}>全てのイベントを削除する</button>
        </form>
      </div>
      <div className="eventsList">
        <h4>イベント一覧</h4>

        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>ボディー</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {state.map(event => <Event key={event.id} event={event} onChange={deleteEvent} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
