import {MainMenu} from './MainMenu'
import {PageContainer, PageContent} from './Page'
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }
    return (
      <PageContainer>
        <MainMenu />
          <PageContent>
            <h1>Oh No!</h1>
          <p>
            <i>{errorMessage}</i>
          </p>
          </PageContent>
      </PageContainer>
    );
}
