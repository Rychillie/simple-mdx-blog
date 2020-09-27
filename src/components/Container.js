import React from "react"
import { ContainerWrapper } from "../elements"
import { Nav } from "../components"

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav />
      {children}
    </ContainerWrapper>
  )
}
