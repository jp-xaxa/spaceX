import { Routes, Route, Navigate } from "react-router-dom"

import { Home } from "../pages/Home"
import { NewAddress } from "../pages/NewAddress"
import { EditAddress } from "../pages/EditAddress"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-address" element={<NewAddress />} />
      <Route path="/edit-address" element={<EditAddress />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
