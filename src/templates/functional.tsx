import { ComponentProps, FC } from 'react'
import { COMPONENT_NAME as RnCOMPONENT_NAME } from 'react-native'
import { tailwind } from 'utils/tailwind/lib'

type COMPONENT_NAMEProps = { 
  tw?: string
 } & ComponentProps<typeof RnCOMPONENT_NAME>

const COMPONENT_NAME : FC<COMPONENT_NAMEProps> = ({tw, style, ...props}) => {
  return <RnCOMPONENT_NAME style={{ ...tailwind(tw), ...style}} {...props}/>
}

export default COMPONENT_NAME
