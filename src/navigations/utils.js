import {useLocation} from 'react-router-dom'

export const createRoute = (path,element,includedRoutes=[],fallback:'')=>({
	path,
	element,
	includedRoutes,
	fallback
});

export const ROLES = {
	STUDENT: "STUDENT",
	ADMIN : "ADMIN",
    SIGNEDOUT : "SIGNEDOUT",
    CONTENT_CREATOR : "CONTENT_CREATOR"
}
export function useSearchParams() {
  return new URLSearchParams(useLocation().search);
}
