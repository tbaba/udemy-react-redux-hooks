import React, { useState, useReducer } from 'react';
import reducer from '../reducers';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [event, setEvent] = useState({});

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

  return (
    <div className="container-fluid">
      <div className="newEventForm mb-5">
        <h4>イベント作成フォーム</h4>
        <form>
          <div className="form-group">
            <label htmlFor="formEventTitle">タイトル</label>
            <input
              className="form-control"
              id="formEventTitle"
              onChange={e => changeEvent(e.target.value, 'title')}
              value={event.title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formEventBody">ボディー</label>
            <textarea
              className="form-control"
              id="formEventBody"
              onChange={e => changeEvent(e.target.value, 'body')}
              value={event.body}
            />
          </div>
          <button className="btn btn-primary" onClick={addEvent}>イベントを作成する</button>
          <button className="btn btn-danger">全てのイベントを削除する</button>
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
        </table>
      </div>
    </div>
  );
};

export default App;
