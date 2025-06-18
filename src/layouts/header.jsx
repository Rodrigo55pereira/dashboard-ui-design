import PropTypes from "prop-types";

export const Header = (props) => {
    return <header className="h-[60px] relative z-10 flex items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900">Header</header>;
};

Header.propsTypes = {
    collapsed: PropTypes.bool,
    setCollapsed: PropTypes.func,
};
