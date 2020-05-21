import React from 'react';

export default function Event({ event, onChange }) {
  return (
    <tr key={event.id}>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onChange(event.id)}
        >
          削除
        </button>
      </td>
    </tr>
  );
}
