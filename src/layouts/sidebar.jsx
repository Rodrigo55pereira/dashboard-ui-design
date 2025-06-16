import { forwardRef } from "react"
import { cn } from "../utils/cn"

import PropTypes from "prop-types"
import logoDark from "../assets/logo-dark.svg"
import logoLight from "../assets/logo-light.svg"

export const Sidebar = forwardRef(({ collapsed }, ref) => {
    return (
        <aside
            ref={ref}
            className={cn(
                "[transition:_width_300ms_cubic-bezier(0.4,_0,_0.2,_1),_left_300ms_cubic-bezier(0.4,_0,_0.2,_1),_background-color_150ms_cubic-bezier(0.4,_0,_0.2,_1),_border_150ms_cubic-bezier(0.4,_0,_0.2,_1)] fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900",
            )}
        >
            <div className="flex gap-x-3 p-3">
                <img
                    src={logoLight}
                    alt="Logoipsum"
                    className="dark:hidden"
                />
                <img
                    src={logoDark}
                    alt="Logoipsum"
                    className="hidden dark:block"
                />
                {!collapsed && <p className="text-lg font-medium text-slate-900 transition-colors dark:text-slate-50">Logoipsum</p>}
            </div>
            Sidebar
        </aside>
    );
});

Sidebar.displayName = "Sidebar";

/** @deprecated Use TypeScript for type checking instead */
Sidebar.propTypes = {
    collapsed: PropTypes.bool,
};
