import styled from '@emotion/styled'

export const FormWrapper = styled.form`
  display:flex;
  flex-direction: column;
  height: 100%;
`

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 2;
  min-width: 200px;
`

export const NarrowFormColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  min-width: 200px;
`

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 1rem;
  height: 100%;
  margin: 1rem 0 0.3rem 0;
`

export const InnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`