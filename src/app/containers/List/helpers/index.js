import { ROUTE_FILTERS, ROUTE_META } from "../routes"

export const datestamp = unix => {
	const m = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
	let date = new Date(unix * 1000)
	let year = date.getFullYear()
	let month = m[date.getMonth()]
	let day = date.getDate()
	return month + " " + day + ", " + year
}

export const getListHeaders = (pathname = "/", page=1) => {
	let search
	let meta
	page = parseInt(page, 0)
	
	// filter by author name
	if(pathname.includes("/author/")){
		let id = pathname.match(/\/author\/(.*)/)[1]
		search = id ? "/author-" + id : "/index" 
		meta = {
			text: ROUTE_META["/author/*"].text,
			emoji: ROUTE_META["/author/*"].emoji
		}
	}
	
	// filter by tags
	else {
		search = ROUTE_FILTERS[pathname] ? "/tags-" + ROUTE_FILTERS[pathname] : "/index"
    meta =  ROUTE_META[pathname]
	}
	
	// add pagination
	search += page > 1 ? "-page-" + page : ""
	return { search, meta }
}