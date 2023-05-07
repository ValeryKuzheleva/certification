import React from 'react'
import Table from 'react-bootstrap/Table';

const Contacts = () => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Город</th>
          <th>Номер телефона</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Москва</td>
          <td>8(963)625-35-78</td>
          <td>moscow.poratrip@mail.ru</td>
        </tr>
        <tr>
          <td>Санкт-Петербург</td>
          <td>8(963)681-45-78</td>
          <td>petersburg.poratrip@mail.ru</td>
        </tr>
        <tr>
          <td>Казань</td>
          <td>8(963)699-56-78</td>
          <td>kazan.poratrip@mail.ru</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default Contacts