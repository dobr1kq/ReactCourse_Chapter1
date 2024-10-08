import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Book } from '../models/Book'

const AddressBook = () => {
  const [books, setBooks] = useState([])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [editingId, setEditingId] = useState(null)
  const [editingValues, setEditingValues] = useState({
    firstName: '',
    lastName: '',
    phone: '',
  })
  const [editErrors, setEditErrors] = useState({})

  const onSubmit = (data) => {
    const newBook = new Book(
      books.length + 1,
      data.firstName,
      data.lastName,
      data.phone
    )
    setBooks([...books, newBook])
  }

  const handleEdit = (book) => {
    setEditingId(book.id)
    setEditingValues({
      firstName: book.firstName,
      lastName: book.lastName,
      phone: book.phone,
    })
    setEditErrors({})
  }

  const handleSave = () => {
    const { firstName, lastName, phone } = editingValues
    const newErrors = {}
    if (!firstName) newErrors.firstName = 'The first name is required'
    if (!lastName) newErrors.lastName = 'The last name is required'
    if (!phone) newErrors.phone = 'The phone is required'

    if (Object.keys(newErrors).length > 0) {
      setEditErrors(newErrors)
      return
    }

    setBooks(
      books.map((book) =>
        book.id === editingId ? { ...book, ...editingValues } : book
      )
    )
    setEditingId(null)
    setEditingValues({ firstName: '', lastName: '', phone: '' })
    setEditErrors({})
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setEditingValues((prevValues) => ({ ...prevValues, [name]: value }))
  }

  return (
    <div>
      <h1>Address Book</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('firstName', { required: true })}
          placeholder="First Name"
        />
        {errors.firstName && (
          <span style={{ color: 'red' }}>The first name is required</span>
        )}

        <input
          {...register('lastName', { required: true })}
          placeholder="Last Name"
        />
        {errors.lastName && (
          <span style={{ color: 'red' }}>The last name is required</span>
        )}

        <input {...register('phone', { required: true })} placeholder="Phone" />
        {errors.phone && (
          <span style={{ color: 'red' }}>The phone is required</span>
        )}

        <button type="submit">Add</button>
      </form>

      {books.length === 0 ? (
        <p>No data to display</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>
                  {editingId === book.id ? (
                    <input
                      name="firstName"
                      value={editingValues.firstName}
                      onChange={handleChange}
                    />
                  ) : (
                    book.firstName
                  )}
                  {editErrors.firstName && (
                    <span style={{ color: 'red' }}>{editErrors.firstName}</span>
                  )}
                </td>
                <td>
                  {editingId === book.id ? (
                    <input
                      name="lastName"
                      value={editingValues.lastName}
                      onChange={handleChange}
                    />
                  ) : (
                    book.lastName
                  )}
                  {editErrors.lastName && (
                    <span style={{ color: 'red' }}>{editErrors.lastName}</span>
                  )}
                </td>
                <td>
                  {editingId === book.id ? (
                    <input
                      name="phone"
                      value={editingValues.phone}
                      onChange={handleChange}
                    />
                  ) : (
                    book.phone
                  )}
                  {editErrors.phone && (
                    <span style={{ color: 'red' }}>{editErrors.phone}</span>
                  )}
                </td>
                <td>
                  {editingId === book.id ? (
                    <button onClick={handleSave}>Save</button>
                  ) : (
                    <button onClick={() => handleEdit(book)}>Edit</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default AddressBook
