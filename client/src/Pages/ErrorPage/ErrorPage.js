import React from 'react';
import FullPageContainer from '../../components/FullPageContainer';
import {ErrorMessage,ErrorContainer,ErrorParagraph} from '../../components/ErrorMessage';


function ErrorPage() {
  return (
    <FullPageContainer>
    <ErrorContainer>
    <ErrorMessage>Error! Page doesn't exist!</ErrorMessage>
    <ErrorParagraph> Please try to load another page. </ErrorParagraph>
    </ErrorContainer>
    </FullPageContainer>
    
  )
}

export default ErrorPage