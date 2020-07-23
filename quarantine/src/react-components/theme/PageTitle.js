import React from "react";
import classNames from "classnames";

const PageTitle = ({ title, subtitle, className, ...attrs }) => {
    const classes = classNames(
        className,
        "col",
        "text-center",
        "text-md-left",
        "mb-sm-0"
    );

    return (
        <div xs="12" sm="4" className={classes} {...attrs}>
            <span className="text-uppercase page-subtitle">{subtitle}</span>
            <h3 className="page-title">{title}</h3>
        </div>
    );
};

export default PageTitle;
