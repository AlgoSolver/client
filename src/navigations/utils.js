import {useLocation} from 'react-router-dom'

export const createRoute = (path,element,includedRoutes=[],fallback:'',options={})=>({
	path,
	element,
	includedRoutes,
	fallback,
	options
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
