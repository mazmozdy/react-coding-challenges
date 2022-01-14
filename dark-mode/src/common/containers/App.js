import React from 'react';
import { DarkModeWrapper } from "../../routes/App/context/DarkMode"

export default function App({ children }) {
  return (
    <DarkModeWrapper>
      {children}
    </DarkModeWrapper>
  )
}
