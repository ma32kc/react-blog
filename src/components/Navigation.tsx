import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <nav className="flex justify-between items-center h-[50px] px-4 shadow-md bg-emerald-400 text-white">
            <span className="text-xl font-bold">Блог</span>
            <span className="flex gap-9">
                <Link to="/">Главная</Link>
                <Link to="/post">Пост</Link>
            </span>
        </nav>
    )
}