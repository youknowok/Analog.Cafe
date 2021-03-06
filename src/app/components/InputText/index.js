// styles
import styled from "styled-components"
import { title, subtitle, reset } from "./styles"

// tools
import Textarea from "react-textarea-autosize"

// return
export const PlainTextarea = styled(Textarea)`${ reset }`
export const TitleTextarea = styled(Textarea)`${ title }`
export const SubtitleTextarea = styled(Textarea)`${ subtitle }`
export const TitleInput = styled.input`${ title }`
export const SubtitleInput = styled.input`${ subtitle }`
