import { useLocation } from "react-router";

export default function MakeTitle() {
    const location = useLocation();
    let pathname = location.pathname;
    pathname = pathname.slice(1);
    pathname = pathname.charAt(0).toUpperCase() + pathname.slice(1);

    return(
        <div>
            if (pathname === "") {
                document.title = "Resume | Home"
            } else {
                document.title = "Resume | " + pathname
            }
        </div>
    );
}
