import React from "react"
import Field from "./Field"

function useUser() {
  const [user, setUser] = React.useState({
    id: "1234asdf",
    email: "email@egghead.io",
    firstName: "John",
    lastName: "Doe",
  })

  return user
}

function Settings() {
  const user = useUser()

  return (
    <div className="py-12">
      <div className="mx-auto px-8 w-full max-w-3xl">
        <h1 className="text-gray-800 font-bold text-lg py-2 border-b">
          Settings
        </h1>
        {user ? (
          <>
            <Field label="First Name" value={user.firstName} />
            <Field label="Last Name" value={user.lastName} />
            <Field label="Email" value={user.email} />
            <Field label="ID" value={user.id} />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

export default Settings
